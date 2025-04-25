import styled, { css } from "styled-components";

import { borderWidths, colors, spacing } from "$/ui/styles/tokens/tokens";
import { Text as DefaultText } from "$/ui/components/text/text";
import { topiOutline } from "$/ui/styles/mixins";

export const Container = styled.button<{ $isLast: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.sp008};
  padding: ${spacing.sp012} ${spacing.sp016};
  background: none;
  color: ${colors.grey60};
  border: none;
  cursor: pointer;
  ${({ $isLast: isLast }) =>
    isLast
      ? css`
          border-block-end: none;
        `
      : css`
          border-block-end: solid ${borderWidths.sm} ${colors.grey04};
        `};

  &:disabled {
    background-color: ${colors.white};
    color: ${colors.grey30};
    border-color: ${colors.grey10};
    cursor: default;
  }

  &:focus-visible {
    ${topiOutline()}
  }

  &:hover:not(:disabled) {
    background-color: ${colors.alpha04};
    border-color: ${colors.grey04};
  }

  &:active:not(:disabled) {
    background-color: ${colors.alpha08};
  }
`;

export const Text = styled(DefaultText)`
  margin: 0;
  text-align: start;
`;
