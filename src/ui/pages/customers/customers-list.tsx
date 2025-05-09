import { useState } from "react";
import { Text } from "$/ui/components/text/text";
import { usePagination } from "$/ui/utils/use-pagination";
import { useSearch } from "$/ui/utils/use-search";
import { SearchInput } from "$/ui/components/search-input/search-input";
import { LoadingLayout } from "$/ui/layouts/loading-layout/loading-layout";
import { CustomerTableHeader } from "./components/CustomerTableHeader";
import { CustomerCard } from "./components/CustomerCard";
import { PaginationControls } from "./components/PaginationControls";
import { BaseContainer } from "$/ui/components/container/base-container";

export function CustomerList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);

  const {
    customers,
    loading: paginationLoading,
    error: paginationError,
  } = usePagination(currentPage, perPage);

  const {
    searchResults,
    loading: searchLoading,
    error: searchError,
  } = useSearch(searchTerm);

  const loading = paginationLoading || searchLoading;
  const error = paginationError || searchError;

  const results = (searchTerm ? searchResults : customers) || [];

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const isLastPage = results.length < perPage;

  if (loading) return <LoadingLayout />;
  if (error) return <Text>{error}</Text>;

  return (
    <BaseContainer>
      <SearchInput
        onChange={handleSearchChange}
        placeholder="Search by company name"
        defaultValue={searchTerm}
      />

      {results.length === 0 ? (
        <Text typography="body1Emphasis">No companies found.</Text>
      ) : (
        <>
          <CustomerTableHeader />
          {results.map((customer) => (
            <CustomerCard
              customer={customer}
              key={customer.id}
              data-testid="customer-card"
            />
          ))}
        </>
      )}

      {isLastPage && results.length > 0 && (
        <Text typography="body1Emphasis">
          You have reached the end of the list.
        </Text>
      )}

      <PaginationControls
        perPage={perPage}
        currentPage={currentPage}
        isLastPage={isLastPage}
        setPerPage={setPerPage}
        setCurrentPage={setCurrentPage}
      />
    </BaseContainer>
  );
}
