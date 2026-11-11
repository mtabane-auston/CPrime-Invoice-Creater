import "react";
// @ts-ignore -- The JavaScript hook currently has no declaration file.
import { useGetAllInvoices } from '../hooks/useGetAllInvoices';
// @ts-ignore -- The JavaScript hook currently has no declaration file.
import { useGetAllItems } from '../hooks/useGetAllItems';


const Dashboard = () => {
  const { invoices, loading, error } = useGetAllInvoices();
  const {items, loading: itemsLoading, error: itemsError} = useGetAllItems();

  if (loading || itemsLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (itemsError) {
    return <div>Error: {itemsError.message}</div>;
  }

  return (
    <div className="page">
      <h2>Dashboard</h2>
            <p>{invoices.length} invoices found.</p>
        </div>
    );
}
export default Dashboard;