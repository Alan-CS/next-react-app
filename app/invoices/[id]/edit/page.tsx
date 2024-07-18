import Form from '@/app/invoices/ui/invoices/edit-form';
import Breadcrumbs from '@/app/invoices/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/invoices/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // ALAN: Did it like this as the tutorial's method was still showing error.tsx
  // since the error is thrown in the db fetch routine and does not reach this code

  let results = null;
  try {
    results = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);
  } catch (err) {
    if (err instanceof Error && err.message === 'Failed to fetch invoice.') {
      notFound();
    } else {
      throw new Error('Something went wrong!.');
    }
  }
  const [invoice, customers] = results;

  return (
    <main className="p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/invoices' },
          {
            label: 'Edit Invoice',
            href: `/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form key={invoice.id} invoice={invoice} customers={customers} />
    </main>
  );
}
