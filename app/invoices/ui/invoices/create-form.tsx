'use client';

import { CustomerField } from '@/app/invoices/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/invoices/ui/button';
import { createInvoice, State } from '@/app/invoices/lib/actions';

// TODO: This form resets all fields to empty values even if there is an error in one
// of them. It does not retain the selected values.

// ALAN: Had to update react types and react-dom types since the below
// code was otherwise not being recognized as per below URL
// https://stackoverflow.com/questions/78687164/cant-import-useactionstate-from-react-following-next-js-tutorial-next-js

// ALso updated package.json to latest beta version of react and latest canary version
// of Next and installed using "npm i -- force" as per url below
// https://github.com/vercel/next.js/issues/65673#issuecomment-2106702212
import { useActionState, useState } from 'react';

export default function Form({ customers }: { customers: CustomerField[] }) {
  // const initialState: State = {
  //   message: null,
  //   errors: {},
  // };
  // const [state, formAction] = useActionState(createInvoice, initialState);

  // TODO: select Does not work either as uncontrolled or controlled component
  // Because if the other fields are invalid, the select does not remain selected
  // with useActionState. Going forward, will simply use RHF and call server
  // actions from the handleSubmit method instead of using useActionState or
  // useFormState. See:
  const [customerId, setCustomerId] = useState<string>('');

  // input works
  const [amount, setAmount] = useState('');

  // radio does not work either
  const [status, setStatus] = useState('');

  console.log(
    ' :: customerId = ',
    customerId,
    ' :: amount = ',
    amount,
    ' :: status = ',
    status,
  );

  return (
    <form action={createInvoice}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="customer-error"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          {/*<div id="customer-error" aria-live="polite" aria-atomic="true">*/}
          {/*  {state.errors?.customerId &&*/}
          {/*    state.errors.customerId.map((error: string) => (*/}
          {/*      <p className="mt-2 text-sm text-red-500" key={error}>*/}
          {/*        {error}*/}
          {/*      </p>*/}
          {/*    ))}*/}
          {/*</div>*/}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/*<div id="amount-error" aria-live="polite" aria-atomic="true">*/}
          {/*  {state.errors?.amount &&*/}
          {/*    state.errors.amount.map((error: string) => (*/}
          {/*      <p className="mt-2 text-sm text-red-500" key={error}>*/}
          {/*        {error}*/}
          {/*      </p>*/}
          {/*    ))}*/}
          {/*</div>*/}
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
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status-error"
                  checked={status === 'pending'}
                  onChange={() => setStatus('pending')}
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status-error"
                  checked={status === 'paid'}
                  onChange={() => setStatus('paid')}
                  defaultChecked={status === 'paid'}
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>

            {/*<div id="status-error" aria-live="polite" aria-atomic="true">*/}
            {/*  {state.errors?.status &&*/}
            {/*    state.errors.status.map((error: string) => (*/}
            {/*      <p className="mt-2 text-sm text-red-500" key={error}>*/}
            {/*        {error}*/}
            {/*      </p>*/}
            {/*    ))}*/}
            {/*</div>*/}
          </div>
        </fieldset>

        {/*<div aria-live="polite" aria-atomic="true">*/}
        {/*  {state.message ? (*/}
        {/*    <p className="mt-2 text-sm text-red-500">{state.message}</p>*/}
        {/*  ) : null}*/}
        {/*</div>*/}
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
