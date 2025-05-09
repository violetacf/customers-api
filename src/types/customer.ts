export type Customer = {
  id: number;
  name: string;
  email: string;
  country: string;
  address: {
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
  };
};
