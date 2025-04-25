import { breakpoints, Breakpoint } from "$/ui/styles/tokens/tokens";

type SizesMap = Record<Breakpoint, string>;

/*
  Use from to add media queries using min-width, instead of use:
  @media (min-width: 320px) {
    width:100%;
  }
  you can use:
  ${from.s} {
    width:100%;
  }
*/

export const from: SizesMap = {
  s: `@media (min-width: ${breakpoints.s}px)`,
  m: `@media (min-width: ${breakpoints.m}px)`,
  l: `@media (min-width: ${breakpoints.l}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
};

export function getMediaQuery(breakpoint: Breakpoint): string {
  return from[breakpoint];
}
