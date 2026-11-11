import { getAllInvoices, getAllItems } from ".//databaseFuctions.js";

export async function getAnalyticsData() {
  let analyticsData = {
    totalInvoices: 0,
    totalRevenue: 0,
    lowestInvoiceRevenue: 0,
    highestInvoiceRevenue: 0,
    totalItems: 0,
  };

  const invoices = await getAllInvoices();
  const items = await getAllItems();

  analyticsData.totalInvoices = invoices.length;
  analyticsData.totalRevenue = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0,
  );
  analyticsData.lowestInvoiceRevenue = Math.min(
    ...invoices.map((invoice) => invoice.amount),
  );
  analyticsData.highestInvoiceRevenue = Math.max(
    ...invoices.map((invoice) => invoice.amount),
  );
  analyticsData.totalItems = items.length;

  return analyticsData;
}
