import styled from "styled-components";
import { Icon as DefaultIcon } from "$/ui/components/icon/icon";
import {
  sizes,
  colors,
  spacing,
  borderRadius,
} from "$/ui/styles/tokens/tokens";
import { topiOutline } from "$/ui/styles/mixins";

export const Container = styled.button<{
  $isTransparent: boolean;
}>`
  --background-color: ${({ $isTransparent: isTransparent }) =>
    isTransparent ? "transparent" : colors.white};
  --color: ${colors.grey90};

  padding: ${spacing.sp012};
  color: var(--color);
  background-color: var(--background-color);
  border: none;
  border-radius: ${borderRadius.rounded};
  line-height: 0;
  cursor: pointer;

  &:disabled {
    --color: ${colors.grey40};
    cursor: default;
  }

  &:focus-visible {
    ${topiOutline()}
  }

  &:hover:enabled {
    --background-color: ${({ $isTransparent: isTransparent }) =>
      isTransparent ? "transparent" : colors.grey04};
  }

  &:active:enabled {
    --background-color: ${colors.grey10};
  }
`;

export const Icon = styled(DefaultIcon)`
  height: ${sizes.sz016};
  width: ${sizes.sz016};
`;
