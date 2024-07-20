'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// TODO: Change CustomFormData to FormData after implementing updateInvoice() method
import { FormData as CustomFormData, FormSchema, } from '@/app/invoices/lib/types';

// ALAN: Not required as id and date are not in the FormSchema
// const CreateInvoice = FormSchema.omit({ id: true, date: true,});
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: CustomFormData) {

  // Validate form fields using Zod
  const validatedFields = FormSchema.safeParse(formData);

  console.log('validatedFields = ', validatedFields);

  // If form validation fails, return errors. Taken from NextJS learning chapter 14
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      serverErrorMessage: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const {customerId, amount, status} = validatedFields.data;

  // ALAN: If you create an invoice with $0.55, then JS converts it to cents as 55.0000000001
  // DB save errors out as the invoice is an integer. This is a floating point conversion error.
  //     In some cases, it can also be e.g. 24.99999999 instead of 30. So, better to round it
  // Also see: https://stackoverflow.com/questions/41296492/how-do-i-fix-it-5010-100-1-expect-result-55-but-i-got-55-000000001-in-j
  const amountInCents = Math.round(amount * 100);

  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      serverErrorMessage: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/invoices');
  redirect('/invoices');
}

// TODO: Change this and edit-form.tsx to use zod and RHF
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = FormSchema.parse(formData);

  const amountInCents = Math.round(amount * 100);

  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/invoices');
  redirect('/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}
