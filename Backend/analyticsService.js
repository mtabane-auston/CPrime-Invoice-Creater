import { getAllInvoices, getAllItems } from ".//databaseFuctions.js";

export async function getAnalyticsData() {
  let analyticsData = {
    totalInvoices: 0,
    totalRevenue: 0,
    lowestInvoiceAmount: 0,
    highestInvoiceAmount: 0,
    totalItems: 0,
    metadata: {
      generatedAt: new Date().toISOString(),
      currency: {
        code: "ZAR",
        symbol: "R",
        name: "South African Rand",
      }
    },
  };

  const invoices = await getAllInvoices();
  const items = await getAllItems();

  analyticsData.totalInvoices = invoices.length;
  analyticsData.totalRevenue = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0,
  );
  analyticsData.lowestInvoiceAmount = Math.min(
    ...invoices.map((invoice) => invoice.amount),
  );
  analyticsData.highestInvoiceAmount = Math.max(
    ...invoices.map((invoice) => invoice.amount),
  );
  analyticsData.totalItems = items.length;

  return analyticsData;
}
