import styled from "styled-components";

import {
  borderRadius,
  borderWidths,
  colors,
  shadows,
  sizes,
  zIndices,
} from "$/ui/styles/tokens/tokens";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border: solid ${borderWidths.sm} ${colors.grey04};
  box-shadow: ${shadows.s};
  border-radius: ${borderRadius.m};
  background: ${colors.white};
  min-width: ${sizes.sz200};
  z-index: ${zIndices.menu};
`;
