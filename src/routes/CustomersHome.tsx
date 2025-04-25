import { Heading } from "$/ui/components/heading/heading";

export function CustomersHome() {
  return (
    <Heading testId="customersPageHeading" $level={1} typography="headline2">
      Customers
    </Heading>
  );
}
