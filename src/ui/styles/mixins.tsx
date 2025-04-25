import { css, RuleSet } from "styled-components";
import { from } from "$/ui/styles/media-queries";
import { px2rems } from "$/ui/utils/px-to-rem";
import {
  borderRadius,
  colors,
  typography,
  spacing,
  Typography,
  borderWidths,
  blurRadius,
  sizes,
} from "./tokens/tokens";

export const setTypography = (category: Typography): string => `
  ${Object.entries(typography[category])
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n")}
`;

export const setTypographyImportant = (category: Typography): string => `
  ${Object.entries(typography[category])
    .map(([key, value]) => `${key}: ${value} !important;`)
    .join("\n")}
`;

export const screenReaderOnly = (): RuleSet<object> => css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const WRAPPER_WIDTH = 1170;

export const maxContent = css`
  margin: 0 auto;
  max-width: ${px2rems(WRAPPER_WIDTH)};
  width: 100%;
  padding: ${spacing.sp032} ${spacing.sp016};

  ${from.m} {
    padding: ${spacing.sp032} ${spacing.sp024};
  }

  ${from.l} {
    padding: ${spacing.sp032} ${spacing.sp040};
  }
`;

export const maxContentWidth = css`
  width: 100%;
  ${from.xl} {
    margin: 0 auto;
    max-width: ${px2rems(1280)};
  }
`;

/*
  linesClamp is a function that takes a number of lines as an argument and returns a CSS string that
  will truncate text to that number of lines. With this function you don't need to worry about using a
  hardcoded max-width and no-wrap on your text becauses is not necessary.
*/

export const linesClamp = (lines = 1): RuleSet<object> => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const colorfulBackground = (): RuleSet<object> => css`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    border-radius: ${borderRadius.rounded};
    filter: blur(${blurRadius.colorfulBackground});

    width: ${sizes.sz480};
    height: ${sizes.sz480};
    background: ${colors.topiPink10};
    top: 50%;
    left: 82%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: ${borderRadius.rounded};
    filter: blur(${blurRadius.colorfulBackground});

    width: ${sizes.sz644};
    height: ${sizes.sz644};
    background: ${colors.topiBlue10};
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const whiteCardWithRoundedBorders = (): RuleSet<object> => css`
  padding: ${spacing.sp048} ${spacing.sp024};
  border-radius: ${borderRadius.xxl};
  background-color: ${colors.white};
  text-align: center;
  /* To allow newline translation characters */
  white-space: pre-line;

  ${from.l} {
    padding: ${spacing.sp064} ${spacing.sp064} ${spacing.sp048};
  }
`;

export const topiOutline = (): RuleSet<object> => css`
  outline: none;
  box-shadow: 0 0 0 ${borderWidths.md} ${colors.topiBlue30};
`;
