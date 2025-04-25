import styled from "styled-components";
import { HeadingTypography } from "$/ui/components/heading/heading";
import { from } from "$/ui/styles/media-queries";
import { setTypography } from "$/ui/styles/mixins";

export const Container = styled.div<{ $typography: HeadingTypography }>`
  ${({ $typography: typography }) => {
    if (typography === "headline1") {
      return `
        ${setTypography("headline1small")};

        ${from.l} {
          ${setTypography("headline1")};
        }
      `;
    }
    if (typography === "headline2") {
      return `
        ${setTypography("headline2small")};

        ${from.l} {
          ${setTypography("headline2")};
        }
      `;
    }
    return `
      ${setTypography(typography)}
    `;
  }}
`;
