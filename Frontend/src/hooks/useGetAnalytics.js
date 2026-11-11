import react, { useState, useEffect } from "react";

export function useGetAnalytics() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        const response = await fetch(
          "http://localhost:3001/api/analytics",
        );
        if (response.ok) {
          const data = await response.json();
          setAnalyticsData(data);
          console.log("Fetched analytics data:", data);
        } else {
          setError(new Error(`Failed to fetch analytics data (${response.status})`));
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchAnalyticsData();
  }, []);

  return { analyticsData, loading, error };
}
