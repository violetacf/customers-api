import styled, { css } from "styled-components";
import { CloseButton as DefaultCloseButton } from "$/ui/components/buttons/close-button/close-button";
import { from } from "$/ui/styles/media-queries";
import { spacing, zIndices } from "$/ui/styles/tokens/tokens";
import { SecondaryIconButton } from "$/ui/components/buttons/icon-button/secondary-icon-button/secondary-icon-button";
import { Text as DefaultText } from "$/ui/components/text/text";
import { px2rems } from "$/ui/utils/px-to-rem";
import { Logo as DefaultLogo } from "$/ui/components/logo/logo";

const USER_INFO_MAX_WIDTH = 168;
const SIDEBAR_WIDTH = px2rems(260);

type StateProps = {
  $isOpen: boolean;
};

export const Container = styled.header<StateProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${spacing.sp016};
  z-index: ${zIndices.mobileMenu};

  ${from.l} {
    position: fixed;
    top: 0;
    bottom: 0;
    width: ${SIDEBAR_WIDTH};
    padding: ${spacing.sp032} ${spacing.sp016};
  }

  ${({ $isOpen: isOpen }) =>
    isOpen
      ? css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        `
      : css`
          position: static;
        `}
`;

export const SidebarHeader = styled.div<StateProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${from.m} {
    padding-inline: ${spacing.sp008};
  }
`;

export const MobileLogo = styled(DefaultLogo)`
  ${from.l} {
    display: none;
  }
`;

export const DesktopLogo = styled(DefaultLogo)`
  display: none;

  ${from.l} {
    display: block;
  }
`;

export const CloseButton = styled(DefaultCloseButton)`
  /* Force size equal to Hamburger button so content doesn't jump when switching between them */
  width: 44px;
  height: 44px;

  ${from.l} {
    display: none;
  }
`;

export const HamburgerButton = styled(SecondaryIconButton)`
  ${from.l} {
    display: none;
  }
`;

export const NavItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${spacing.sp004};
  margin-block-start: ${spacing.sp016};

  ${from.l} {
    margin-block-start: ${spacing.sp032};
  }
`;

export const Wrapper = styled.div<StateProps>`
  flex: 1;
  ${({ $isOpen: isOpen }) =>
    isOpen
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;
        `}

  ${from.l} {
    display: flex;
    flex-direction: column;
  }
`;

export const UserInfoContainer = styled.div`
  ${from.l} {
    width: ${px2rems(USER_INFO_MAX_WIDTH)};
  }
`;

export const Text = styled(DefaultText)`
  ${from.l} {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const LogoutButton = styled(SecondaryIconButton)`
  flex-shrink: 0;
`;

export const AuthenticatedUserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.sp008};
  margin-block-start: auto;
  padding-inline: ${spacing.sp008};
  padding-block: ${spacing.sp032} ${spacing.sp016};

  ${from.l} {
    padding-block-end: 0;
  }
`;
