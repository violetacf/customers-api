import styled, { css } from "styled-components";
import { px2rems } from "$/ui/utils/px-to-rem";

const getLogoStyles = (size: "s" | "m", isTopiLogo: boolean) => {
  if (size === "s") {
    return css`
      height: ${px2rems(24)};
    `;
  }

  if (isTopiLogo && size === "m") {
    return css`
      height: ${px2rems(32)};
    `;
  }

  return css``;
};

export const LogoSVG = styled.svg<{ $size: "s" | "m" }>`
  ${({ $size: size }) => getLogoStyles(size, true)};
`;

export const LogoImage = styled.img<{ $size: "s" | "m"; $isTopiLogo: boolean }>`
  ${({ $size: size, $isTopiLogo: isTopiLogo }) =>
    getLogoStyles(size, isTopiLogo)};
`;
