import { Card } from "$/ui/components/card/card";
import { CardHeader } from "$/ui/components/card/card-header/card-header";
import { Text } from "$/ui/components/text/text";
import { Divider } from "../../customers/components/Divider";

interface TechTestCardProps {
  title: string;
  children: React.ReactNode;
}

export function TechTestCard({ title, children }: TechTestCardProps) {
  return (
    <Card type="primary" layout="column">
      <CardHeader>{title}</CardHeader>
      <Divider />
      <Text typography="body2">{children}</Text>
    </Card>
  );
}
