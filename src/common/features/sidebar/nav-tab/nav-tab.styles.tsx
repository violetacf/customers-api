import styled, { css } from "styled-components";
import { NavLink as DefaultNavLink } from "react-router";
import {
  borderRadius,
  colors,
  sizes,
  spacing,
  transitions,
} from "$/ui/styles/tokens/tokens";
import { Icon as DefaultIcon } from "$/ui/components/icon/icon";
import { topiOutline } from "$/ui/styles/mixins";

type NavItemProps = {
  $isActive: boolean;
};

// This is the topiBlue05 with opacity 0.5 in #rrggbbaa
const TOPI_BLUE_05_ALPHA_50 = `${colors.topiBlue05}80`;

export const NavItem = styled.span<NavItemProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.sp012};
  padding: ${spacing.sp012} ${spacing.sp016};
  border-radius: ${borderRadius.m};
  color: ${colors.grey80};
  transition: all ${transitions.medium};

  ${({ $isActive: isActive }) =>
    isActive &&
    css`
      background-color: ${TOPI_BLUE_05_ALPHA_50};
      color: ${colors.topiBlue50};
    `}
`;

const commonLinkStyles = () => css`
  &:focus-visible {
    outline: none;
    ${NavItem} {
      ${topiOutline()}
    }
  }

  &:hover {
    text-decoration: none;

    ${NavItem} {
      background-color: ${TOPI_BLUE_05_ALPHA_50};
      color: ${colors.topiBlue50};
    }
  }
  &[aria-disabled="true"] {
    pointer-events: none;

    ${NavItem} {
      color: ${colors.grey60};
    }
  }
`;

export const Link = styled.a`
  ${commonLinkStyles()};
`;

export const NavLink = styled(DefaultNavLink)`
  ${commonLinkStyles()};
`;

export const Icon = styled(DefaultIcon)`
  width: ${sizes.sz024};
  height: ${sizes.sz024};
`;
