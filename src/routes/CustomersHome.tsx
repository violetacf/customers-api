import { BaseContainer } from '$/ui/components/container/base-container';
import { Heading } from '$/ui/components/heading/heading';
import { CustomerList } from '$/ui/pages/customers/customers-list';

export function CustomersHome() {
  return (
    <BaseContainer>
      <BaseContainer>
        <Heading
          testId="customersPageHeading"
          $level={1}
          typography="headline2"
        >
          Customers
        </Heading>
      </BaseContainer>
      <CustomerList />
    </BaseContainer>
  );
}
