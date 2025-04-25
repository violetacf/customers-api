import styled from "styled-components";
import { topiOutline } from "$/ui/styles/mixins";
import {
  borderRadius,
  sizes,
  borderWidths,
  colors,
} from "$/ui/styles/tokens/tokens";

export const Button = styled.button`
  appearance: none;
  border-radius: ${borderRadius.rounded};
  width: ${sizes.sz044};
  height: ${sizes.sz044};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: var(--icon-button-bg-color);
  color: var(--icon-button-color);

  border: ${borderWidths.sm} solid var(--icon-button-border-color);

  &:hover {
    background: ${colors.alpha04};
    cursor: pointer;
  }

  &:disabled {
    color: var(--icon-button-disabled-color);
  }

  &:focus-visible {
    ${topiOutline()}
  }

  --icon-button-bg-color: ${colors.white};
  --icon-button-color: ${colors.grey90};
  --icon-button-border-color: ${colors.grey10};
  --icon-button-disabled-color: ${colors.grey10};
`;
