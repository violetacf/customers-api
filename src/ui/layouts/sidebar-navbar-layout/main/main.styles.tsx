import styled from "styled-components";
import {
  colors,
  shadows,
  borderRadius,
  spacing,
} from "$/ui/styles/tokens/tokens";
import { from } from "$/ui/styles/media-queries";
import { maxContentWidth } from "$/ui/styles/mixins";

export const Wrapper = styled.main`
  background-color: ${colors.grey04};
  padding: ${spacing.sp016};

  /* NOTE: in the figma this is tokenized as shadows.s, but the values are the ones from m :( */
  box-shadow: inset ${shadows.m};

  ${from.m} {
    padding: ${spacing.sp024};
  }

  ${from.l} {
    margin: ${spacing.sp024};
    padding: ${spacing.sp056} ${spacing.sp032};
    border-radius: ${borderRadius.xxl};
    box-shadow: none;
  }

  ${from.xl} {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div<{ isFullWidth?: boolean }>`
  height: 100%;
  ${maxContentWidth};
`;
