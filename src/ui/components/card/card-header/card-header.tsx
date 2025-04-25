import { FC, ReactElement, ReactNode } from "react";
import type { BaseIconButton } from "$/ui/components/buttons/icon-button/base-icon-button/base-icon-button";
import type { BaseButton } from "$/ui/components/buttons/button/base-button/base-button";
import type { IconName } from "$/ui/components/icon/icon";
import { Container, Heading, Icon } from "./card-header.styles";

export interface CardHeaderProps {
  icon?: IconName;
  children: ReactNode;
  className?: string;
  button?:
    | ReactElement<typeof BaseIconButton>
    | ReactElement<typeof BaseButton>;
}

export const CardHeader: FC<CardHeaderProps> = ({
  icon,
  children,
  button,
  className,
}) => {
  return (
    <Container className={className}>
      <Heading $level={2} typography="headline3">
        {icon ? <Icon name={icon} /> : undefined}
        {children}
      </Heading>
      {button}
    </Container>
  );
};
