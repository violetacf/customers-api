import { Typography, typography, TOPI_LOGO } from "$/ui/styles/tokens/tokens";

export const extractTypographyCssFromToken = (token: Typography): string => {
  const tokenToUse = typography[token];
  if (!tokenToUse) {
    return "";
  }

  return Object.keys(tokenToUse)
    .map((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return `${key}:${tokenToUse[key]};`;
    })
    .join("");
};

export const isTopiBranding = (logoURL: string): boolean => {
  return logoURL === TOPI_LOGO;
};
