import styled, { css } from "styled-components";
import { setTypography, topiOutline } from "$/ui/styles/mixins";
import {
  borderRadius,
  borderWidths,
  colors,
  spacing,
} from "$/ui/styles/tokens/tokens";
import { TextProps } from "$/ui/components/text/text";

type ContainerProps = Pick<TextProps, "typography" | "isTruncated">;

type MappedContainerProps = {
  $typography: ContainerProps["typography"];
  $isTruncated?: ContainerProps["isTruncated"];
};

export const Text = styled.div<MappedContainerProps>`
  ${({ $typography: typography }) =>
    typography &&
    css`
      margin: 0;
      padding: 0;
      ${setTypography(typography)};
    `}
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${spacing.sp008};
  appearance: none;
  border-radius: ${borderRadius.xxl};
  padding: ${spacing.sp012} ${spacing.sp016};
  background-color: ${colors.white};
  color: ${colors.grey90};
  white-space: nowrap;
  cursor: pointer;
  border: ${borderWidths.sm} solid ${colors.grey10};

  &:disabled {
    background-color: ${colors.white};
    color: ${colors.grey30};
    border-color: ${colors.grey10};
    cursor: default;
  }

  &:focus-visible {
    ${topiOutline()}
    border-color: ${colors.grey10};
  }

  &:hover:not(:disabled) {
    background-color: ${colors.white};
    color: ${colors.black};
    border-color: ${colors.grey30};
  }

  &:active:not(:disabled) {
    background-color: ${colors.white};
    color: ${colors.black};
    border-color: ${colors.grey60};
  }
`;
