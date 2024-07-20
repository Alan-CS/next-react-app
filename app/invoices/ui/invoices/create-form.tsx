'use client';

import {CustomerField} from '@/app/invoices/lib/definitions';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import {Button} from '@/app/invoices/ui/button';
import {createInvoice} from '@/app/invoices/lib/actions';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {FormData, FormSchema,} from '@/app/invoices/lib/types';

function isKey<T extends object>(
    x: T,
    k: PropertyKey
): k is keyof T {
    return k in x;
}

export default function Form({customers}: { customers: CustomerField[] }) {
    const {
        register, handleSubmit, formState: {errors},
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = async (data: FormData) => {

        try {

            // ALAN: Uncomment for testing server side validations, using mock data object
            // data = {
            //     customerId: '',
            //     amount: 0,
            //     status: null,
            // }

            const response = await createInvoice(data);

            // ALAN: For successful submission, response is undefined and server action will redirect.
            if (!response) {
                // TODO: A better modal can also be shown here
                alert("Invoice created successfully.!");
            } else {
                // console.log('response = ', response);

                const {errors = {}, serverErrorMessage} = response;

                // https://www.totaltypescript.com/iterate-over-object-keys-in-typescript
                if (errors) {
                    Object.keys(errors).forEach((key) => {
                        if (isKey(errors, key)) {
                            setError(key, {
                                type: "server",
                                message: errors[key]?.[0],
                            });
                        }
                    })
                }

                // See below to set a generic error message
                // https://react-hook-form.com/docs/useform/seterror
                if (serverErrorMessage) {
                    setError("root.serverError", {
                        type: "server",
                        message: serverErrorMessage,
                    });
                }

            }
        } catch (error) {
            alert("Submitting form failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose customer
                    </label>
                    <div className="relative">
                        <select
                            id="customer"
                            {...register('customerId')}
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="customer-error"
                        >
                            <option value="">
                                Select a customer
                            </option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name}
                                </option>
                            ))}
                        </select>
                        <UserCircleIcon
                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                    </div>
                    {errors.customerId &&
                        <span id="customer-error" className="text-xs text-red-500"> {errors.customerId.message} </span>}
                </div>

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Choose an amount
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="amount"
                            {...register('amount', {valueAsNumber: true})}
                            type="number"
                            step="0.01"
                            placeholder="Enter USD amount"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="amount-error"
                        />
                        <CurrencyDollarIcon
                            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
                    </div>
                    {errors.amount && <span id="amount-error" className="text-xs text-red-500">{errors.amount.message}</span>}
                </div>

                {/* Invoice Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Set the invoice status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="pending"
                                    {...register('status')}
                                    type="radio"
                                    value="pending"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                />
                                <label
                                    htmlFor="pending"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    Pending <ClockIcon className="h-4 w-4"/>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="paid"
                                    {...register('status')}
                                    type="radio"
                                    value="paid"
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    aria-describedby="status-error"
                                />
                                <label
                                    htmlFor="paid"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Paid <CheckIcon className="h-4 w-4"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    {errors.status && <span id="status-error" className="text-xs text-red-500">{errors.status.message}</span>}
                </fieldset>

                <div aria-live="polite" aria-atomic="true">
                    {errors.root?.serverError ? (
                        <p className="mt-2 text-xs text-red-500">{errors.root.serverError.message}</p>
                    ) : null}
                </div>

            </div>

            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Invoice</Button>
            </div>
        </form>
    );
}
