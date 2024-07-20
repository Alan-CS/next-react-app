// import { FieldError, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export const FormSchema = z.object({
    customerId: z.string().min(1, { message: "Please select a customer." }),
    amount: z.coerce
        .number({
            required_error: "Amount is required",
            invalid_type_error: "Amount must be a number",
        })
        .gt(0, { message: 'Please enter an amount greater than 0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
    }),
});

// Don't define FormData manually, instead infer it
// export type FormData = {
//     customerId: string;
//     amount: number;
//     status: string;
// };

export type FormData = z.infer<typeof FormSchema>

export type ValidFieldNames =
    | "customerId"
    | "amount"
    | "status";
