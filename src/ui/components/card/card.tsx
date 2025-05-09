import { FC, ReactElement, ReactNode } from "react";
import type { IconName } from "$/ui/components/icon/icon";
import type { CardHeader } from "./card-header/card-header";
import { Container, Content, Icon } from "./card.styles";

type CommonProps = {
  className?: string;
  children?: ReactNode;
  testId?: string;
};

type PrimaryOrSecondaryCardProps =
  | {
      // primary cards can have optional headers
      type?: "primary";
      header?: ReactElement<typeof CardHeader>;
      icon?: never;
    }
  | {
      // secondary cards can have optional icons
      type: "secondary";
      header?: never;
      icon?: IconName;
    };

export type CardProps = CommonProps &
  PrimaryOrSecondaryCardProps & {
    layout: "column" | "row";
  };

export const Card: FC<CardProps> = ({
  className,
  children,
  type = "primary",
  header,
  icon,
  layout,
  testId,
}) => {
  return (
    <Container
      className={className}
      $type={type}
      $hasHeader={!!header}
      $hasIcon={!!icon}
      data-testid={testId}
    >
      {header}
      {icon ? <Icon name={icon} /> : undefined}
      <Content layout={layout}>{children}</Content>
    </Container>
  );
};
