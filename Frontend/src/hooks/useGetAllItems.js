import { useState, useEffect } from "react";

export function useGetAllItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/items",
        );
        if (response.ok) {
          const data = await response.json();
          setItems(data);
          console.log("Fetched items:", data);
        } else {
          setError(new Error(`Failed to fetch items (${response.status})`));
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchItems();

  }, []);

  return { items , loading, error };
}
