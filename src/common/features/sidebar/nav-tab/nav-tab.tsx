import { FC, ReactNode } from "react";
import { NavItem, NavLink } from "./nav-tab.styles";
import { Text } from "$/ui/components/text/text";

export type NavTabProps = {
  to: string;
  label: ReactNode;
};

export const NavTab: FC<NavTabProps> = ({ to, label }) => {
  return (
    <NavLink to={to}>
      {({ isActive }): ReactNode => (
        <NavItem $isActive={isActive}>
          <Text typography="body1Emphasis" tag="span">
            {label}
          </Text>
        </NavItem>
      )}
    </NavLink>
  );
};
