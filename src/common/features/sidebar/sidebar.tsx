import { FC, ReactElement, useState } from "react";

import {
  Container,
  HamburgerButton,
  NavItemsContainer,
  CloseButton,
  Wrapper,
  SidebarHeader,
  MobileLogo,
  DesktopLogo,
} from "./sidebar.styles";

import { IconName } from "$/ui/components/icon/icon";
import { brand } from "$/ui/styles/tokens/tokens";

export type TabProps = {
  to: string;
  label: string | ReactElement;
  icon: IconName;
  isDisabled: boolean;
  isAnExternalLink?: boolean;
  trackEvent?: { name: string; metaData?: { [k: string]: string | number } };
  id: string;
  testId?: string;
  afterTextSlot?: ReactElement;
};

export type SidebarProps = {
  tabs: TabProps[];
};

export const SIDEBAR_NAV_TEST_ID = "sideBarNav";

export const Sidebar: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container $isOpen={isOpen}>
      <SidebarHeader $isOpen={isOpen}>
        <MobileLogo size="s" logoURL={brand.logoURL} />
        <DesktopLogo size="m" logoURL={brand.logoURL} />
        {isOpen ? (
          <CloseButton
            aria-label="Close sidebar"
            onClick={(): void => setIsOpen(false)}
          />
        ) : (
          <HamburgerButton
            aria-label="Open sidebar"
            onClick={(): void => setIsOpen(true)}
            icon="list"
          />
        )}
      </SidebarHeader>
      <Wrapper $isOpen={isOpen}>
        <NavItemsContainer
          data-testid={SIDEBAR_NAV_TEST_ID}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </NavItemsContainer>
      </Wrapper>
    </Container>
  );
};
