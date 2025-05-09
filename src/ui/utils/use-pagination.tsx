import { useEffect, useState } from "react";
import { getCustomers } from "$/api/customers";
import { Customer } from "$/types/customer";

export function usePagination(page: number, perPage: number) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchCustomers = async () => {
      try {
        const data = await getCustomers(page, perPage);
        setCustomers(data);
      } catch (err) {
        setError("Failed to load customers.");
        console.log("error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [page, perPage]);

  return { customers, loading, error };
}
