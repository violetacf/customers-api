import { FC, ReactNode } from 'react';
import { Icon, NavItem, NavLink } from './nav-tab.styles';
import { Text } from '$/ui/components/text/text';
import { IconName } from '$/ui/components/icon/icon';

export type NavTabProps = {
  to: string;
  label: ReactNode;
  icon: IconName;
};

export const NavTab: FC<NavTabProps> = ({ to, label, icon }) => {
  return (
    <NavLink to={to}>
      {({ isActive }): ReactNode => (
        <NavItem $isActive={isActive}>
          <Icon name={icon}></Icon>
          <Text typography="body1Emphasis" tag="span">
            {label}
          </Text>
        </NavItem>
      )}
    </NavLink>
  );
};
