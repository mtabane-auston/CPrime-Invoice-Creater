import { useState, useEffect } from "react";

export function useGetAllInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/invoices",
        );
        if (response.ok) {
          const data = await response.json();
          setInvoices(data);
          console.log("Fetched invoices:", data);
        } else {
          setError(new Error(`Failed to fetch invoices (${response.status})`));
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchInvoices();

  }, []);

  return { invoices, loading, error };
}
