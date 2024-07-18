import Form from '@/app/invoices/ui/invoices/create-form';
import Breadcrumbs from '@/app/invoices/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/invoices/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main className="p-8">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/invoices' },
          {
            label: 'Create Invoice',
            href: '/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
