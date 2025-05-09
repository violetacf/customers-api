import { Text } from "$/ui/components/text/text";

export const CustomerTableHeader = () => (
  <div style={{ display: "flex", width: "100%", padding: "0 1.5rem" }}>
    <div style={{ width: "30%" }}>
      <Text typography="overline">Company</Text>
    </div>
    <div style={{ width: "30%" }}>
      <Text typography="overline">Email</Text>
    </div>
    <div style={{ width: "40%" }}>
      <Text typography="overline">Country</Text>
    </div>
  </div>
);
