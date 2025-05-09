import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCustomerById } from "$/api/customers";
import { Text } from "$/ui/components/text/text";
import { Card } from "$/ui/components/card/card";
import { Heading } from "$/ui/components/heading/heading";
import { BackButton } from "$/ui/components/buttons/back-button/back-button";
import { Customer } from "$/types/customer";
import { LoadingLayout } from "$/ui/layouts/loading-layout/loading-layout";
import { CardHeader } from "$/ui/components/card/card-header/card-header";
import { SecondaryIconButton } from "$/ui/components/buttons/icon-button/secondary-icon-button/secondary-icon-button";
import { BaseContainer } from "$/ui/components/container/base-container";
import { Divider } from "./components/Divider";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <>
    <Text typography="overline">{label}</Text>
    <Text typography="body2">{value}</Text>
  </>
);

export function CustomerDetails() {
  const { customerId } = useParams<{ customerId: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(customerId!);
        setCustomer(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId]);

  if (loading) return <LoadingLayout />;
  if (error) return <Text>{error}</Text>;
  if (!customer) return <Text>Customer not found.</Text>;

  const { name, email, country, address } = customer;

  return (
    <BaseContainer>
      <BaseContainer layout="row" noPadding alignItemsCenter>
        <BackButton to="/customers" data-test-id="back-button" />
        <Heading data-test-id="customer-name" $level={1} typography="headline2">
          {name}
        </Heading>
      </BaseContainer>

      <Card type="primary" layout="column">
        <CardHeader
          button={
            <SecondaryIconButton
              icon="pencilSimple"
              to="https://www.topi.eu/en/old-home"
              target="_blank"
            />
          }
        >
          Customer info
        </CardHeader>

        <InfoRow label="Email" value={email} />
        <Divider />
        <InfoRow label="Country" value={country} />
        <Divider />

        {address && (
          <>
            <Text typography="overline">Address</Text>
            <Text typography="body2">
              {[address.street, address.number].filter(Boolean).join(" ")}
            </Text>
            <Text typography="body2">
              {[address.postalCode, address.city].filter(Boolean).join(" ")}
            </Text>
            <Text typography="body2">{address.country}</Text>
          </>
        )}
      </Card>
    </BaseContainer>
  );
}
