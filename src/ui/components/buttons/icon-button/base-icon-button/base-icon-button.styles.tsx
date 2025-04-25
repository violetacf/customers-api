import styled from "styled-components";
import { borderRadius, sizes } from "$/ui/styles/tokens/tokens";
import { Icon as DefaultIcon } from "$/ui/components/icon/icon";
import {
  Button,
  ButtonProps,
} from "$/ui/components/buttons/button/base-button/base-button.styles";
import { topiOutline } from "$/ui/styles/mixins";

export const Icon = styled(DefaultIcon)`
  width: ${sizes.sz016};
  height: ${sizes.sz016};
`;

export const IconButton = styled(Button)<ButtonProps>`
  border-radius: ${borderRadius.rounded};
  width: ${sizes.sz044};
  height: ${sizes.sz044};
  column-gap: unset;
  padding: unset;

  &:focus-visible {
    ${topiOutline()}
    border-color: var(--button-border-color-focus);
  }
`;
