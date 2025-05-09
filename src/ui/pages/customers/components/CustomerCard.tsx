import { Text } from "$/ui/components/text/text";
import { Card } from "$/ui/components/card/card";
import { SecondaryButton } from "$/ui/components/buttons/button/secondary-button/secondary-button";
import { Customer } from "$/types/customer";

export const CustomerCard = ({ customer }: { customer: Customer }) => (
  <Card type="primary" layout="row" key={customer.id}>
    <div style={{ width: "30%" }}>
      <Text typography="body1Emphasis">{customer.name}</Text>
    </div>
    <div style={{ width: "30%" }}>
      <Text isTruncated typography="body2">
        {customer.email}
      </Text>
    </div>
    <div style={{ width: "30%" }}>
      <Text typography="body2">{customer.country}</Text>
    </div>
    <SecondaryButton to={`/customers/${customer.id}`}>View</SecondaryButton>
  </Card>
);
