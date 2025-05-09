// getCustomers - get all customers paginated
export const getCustomers = async (page = 1, perPage = 5) => {
  const response = await fetch(
    `/api/customers?page=${page}&perPage=${perPage}`
  );
  if (!response.ok) throw new Error("Failed to fetch customers");
  return response.json();
};

// searchCustomers - searches for customers by name
export const searchCustomers = async (query: string) => {
  const response = await fetch(
    `/api/customers/search?query=${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error("Failed to search customers");
  return response.json();
};

// getCustomerById - get customer by id - to display more detailed info
export const getCustomerById = async (id: string) => {
  const response = await fetch(`/api/customers/${id}`);
  if (!response.ok) throw new Error("Failed to fetch customer details");
  return response.json();
};
