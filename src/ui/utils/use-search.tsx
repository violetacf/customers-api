import { useState, useEffect } from "react";
import { searchCustomers } from "$/api/customers";
import { Customer } from "$/types/customer";

export function useSearch(query: string) {
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchCustomers(query);
        setSearchResults(data);
      } catch (err) {
        setError("Failed to search customers.");
        console.log("error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return { searchResults, loading, error };
}
