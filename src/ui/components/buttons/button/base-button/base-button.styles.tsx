import styled, { css } from "styled-components";
import { BaseButtonProps } from "$/ui/components/buttons/button/base-button/base-button";
import { setTypography, topiOutline } from "$/ui/styles/mixins";
import {
  colors,
  spacing,
  borderRadius,
  borderWidths,
} from "$/ui/styles/tokens/tokens";

export const ButtonContent = styled.span``;

type PickedButtonProps = Pick<
  BaseButtonProps,
  "typography" | "actionType" | "isLoading"
>;

export type ButtonProps = {
  $actionType: PickedButtonProps["actionType"];
  $typography?: PickedButtonProps["typography"];
  $isLoading?: PickedButtonProps["isLoading"];
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: ${spacing.sp008};
  appearance: none;
  border-radius: ${borderRadius.xxl};
  padding: var(--button-padding);
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  ${({ $typography: typography }) => {
    return typography ? setTypography(typography) : "";
  }}

  ${({ $actionType: actionType }) => {
    switch (actionType) {
      case "secondary":
        return css`
          border: ${borderWidths.sm} solid var(--button-border-color);
        `;
      case "secondaryEm":
        return css`
          border: ${borderWidths.sm} solid var(--button-border-color);
        `;
      default:
        return css`
          border: none;
        `;
    }
  }};

  &:disabled {
    background-color: var(--button-bg-color-disabled);
    color: var(--button-text-color-disabled);
    border-color: var(--button-border-color-disabled);
    cursor: default;
  }

  &:focus-visible {
    ${topiOutline()}
    border-color: var(--button-border-color-focus);
  }

  &:hover:not(:disabled) {
    background-color: var(--button-bg-color-hover);
    color: var(--button-text-color-hover);
    border-color: var(--button-border-color-hover);
  }

  &:active:not(:disabled) {
    background-color: var(--button-bg-color-active);
    color: var(--button-text-color-active);
    border-color: var(--button-border-color-active);
  }

  ${({ $actionType: actionType }) => {
    switch (actionType) {
      case "primary":
        return css`
          --button-bg-color: ${colors.topiBlue50};
          --button-bg-color-hover: ${colors.topiBlue60};
          --button-bg-color-active: ${colors.topiBlue70};
          --button-bg-color-disabled: ${colors.grey30};
          --button-text-color: ${colors.white};
          --button-text-color-hover: ${colors.white};
          --button-text-color-active: ${colors.white};
          --button-text-color-disabled: ${colors.white};
          --button-border-color: ${colors.topiBlue50};
          --button-border-color-hover: ${colors.topiBlue60};
          --button-border-color-active: ${colors.topiBlue70};
          --button-border-color-focus: ${colors.topiBlue50};
          --button-border-color-disabled: ${colors.grey30};
          --button-padding: ${spacing.sp012} ${spacing.sp016};
        `;
      case "secondaryEm":
        return css`
          --button-bg-color: ${colors.white};
          --button-bg-color-hover: ${colors.white};
          --button-bg-color-active: ${colors.white};
          --button-bg-color-disabled: ${colors.white};
          --button-text-color: ${colors.topiBlue50};
          --button-text-color-hover: ${colors.topiBlue60};
          --button-text-color-active: ${colors.topiBlue70};
          --button-text-color-disabled: ${colors.grey30};
          --button-border-color: ${colors.topiBlue10};
          --button-border-color-hover: ${colors.topiBlue30};
          --button-border-color-active: ${colors.topiBlue70};
          --button-border-color-focus: ${colors.topiBlue10};
          --button-border-color-disabled: ${colors.grey10};
          --button-padding: ${spacing.sp012} ${spacing.sp016};
        `;
      case "secondary":
        return css`
          --button-bg-color: ${colors.white};
          --button-bg-color-hover: ${colors.white};
          --button-bg-color-active: ${colors.white};
          --button-bg-color-disabled: ${colors.white};
          --button-text-color: ${colors.grey90};
          --button-text-color-hover: ${colors.black};
          --button-text-color-active: ${colors.black};
          --button-text-color-disabled: ${colors.grey30};
          --button-border-color: ${colors.grey10};
          --button-border-color-hover: ${colors.grey30};
          --button-border-color-active: ${colors.grey60};
          --button-border-color-focus: ${colors.grey10};
          --button-border-color-disabled: ${colors.grey10};
          --button-padding: ${spacing.sp012} ${spacing.sp016};
        `;
      case "destructive":
        return css`
          --button-bg-color: ${colors.red50};
          --button-bg-color-hover: ${colors.red60};
          --button-bg-color-active: ${colors.red70};
          --button-bg-color-disabled: ${colors.grey30};
          --button-text-color: ${colors.white};
          --button-text-color-hover: ${colors.white};
          --button-text-color-active: ${colors.white};
          --button-text-color-disabled: ${colors.white};
          --button-border-color: ${colors.red50};
          --button-border-color-hover: ${colors.red60};
          --button-border-color-active: ${colors.red70};
          --button-border-color-focus: ${colors.red50};
          --button-border-color-disabled: $z{colors.grey30};
          --button-padding: ${spacing.sp012} ${spacing.sp016};
        `;
      case "tertiary":
        return css`
          --button-bg-color: none;
          --button-bg-color-hover: ${colors.alpha04};
          --button-bg-color-active: ${colors.alpha08};
          --button-bg-color-disabled: none;
          --button-text-color: ${colors.grey90};
          --button-text-color-hover: ${colors.black};
          --button-text-color-active: ${colors.black};
          --button-text-color-disabled: ${colors.grey30};
          --button-border-color-hover: unset;
          --button-border-color-active: unset;
          --button-border-color-focus: unset;
          --button-border-color-disabled: unset;
          --button-padding: ${spacing.sp012};
        `;
      case "tertiaryEm":
        return css`
          --button-bg-color: none;
          --button-bg-color-hover: ${colors.alpha04};
          --button-bg-color-active: ${colors.alpha08};
          --button-bg-color-disabled: none;
          --button-text-color: ${colors.topiBlue50};
          --button-text-color-hover: ${colors.topiBlue40};
          --button-text-color-active: ${colors.topiBlue70};
          --button-text-color-disabled: ${colors.grey30};
          --button-border-color-hover: unset;
          --button-border-color-active: unset;
          --button-border-color-focus: unset;
          --button-border-color-disabled: unset;
          --button-padding: ${spacing.sp012};
        `;
      default:
        return "";
    }
  }}

  ${({ $isLoading: isLoading }) => {
    return isLoading
      ? css`
          pointer-events: none;
          &:hover:not(:disabled) {
            background-color: var(--button-bg-color);
            color: var(--button-text-color);
            border-color: var(--button-border-color);
          }
        `
      : "";
  }}

  ${ButtonContent} {
    ${({ $isLoading: isLoading }) => {
      return isLoading
        ? css`
            opacity: 0;
          `
        : "";
    }}
  }
`;
