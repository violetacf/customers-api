import styled, { css } from "styled-components";
import {
  borderRadius,
  colors,
  spacing,
  sizes,
} from "$/ui/styles/tokens/tokens";
import { setTypography } from "$/ui/styles/mixins";
import { Icon as DefaultIcon } from "$/ui/components/icon/icon";
import type { CardProps } from "./card";
import { from } from "$/ui/styles/media-queries";

type CardContainerProps = Required<Pick<CardProps, "type">> & {
  hasHeader: boolean;
  hasIcon: boolean;
};

type MappedCardContainerProps = {
  $type: CardContainerProps["type"];
  $hasHeader: CardContainerProps["hasHeader"];
  $hasIcon: CardContainerProps["hasIcon"];
};

export const Container = styled.section<MappedCardContainerProps>`
  padding: var(--card-padding);
  background: var(--card-bg-color);
  border-radius: var(--card-radius);

  display: grid;
  gap: ${spacing.sp016};
  grid-template-columns: var(--card-grid-columns);
  grid-template-rows: var(--card-grid-rows);

  ${({ $type: type, $hasHeader: hasHeader, $hasIcon: hasIcon }) => {
    switch (type) {
      case "primary":
        return css`
          --card-bg-color: ${colors.white};
          --card-radius: ${borderRadius.xl};
          --card-padding: ${spacing.sp016};
          --card-grid-columns: none;
          --card-grid-rows: ${hasHeader ? `auto 1fr` : `none`};
          --card-content-align: top;
          ${setTypography("body1")}
        `;
      case "secondary":
        return css`
          --card-bg-color: ${colors.grey04};
          --card-radius: ${borderRadius.m};
          --card-padding: ${spacing.sp016};
          --card-grid-columns: ${hasIcon ? `auto 1fr` : `none`};
          --card-grid-rows: none;
          --card-content-align: center;
          ${setTypography("body2Emphasis")}
        `;
    }
  }};

  ${from.m} {
    ${({ $type: type }) => {
      switch (type) {
        case "primary":
          return css`
            --card-padding: ${spacing.sp024};
          `;
      }
      return "";
    }}
  }
`;

export const Content = styled.div<CardProps>`
  align-self: var(--card-content-align);
  flex: 1;
  display: flex;
  justify-content: space-between;

  ${({ layout: layout }) => {
    switch (layout) {
      case "column":
        return css`
          flex-direction: column;
        `;
      case "row":
        return css`
          align-items: center;
          flex-direction: row;
        `;
    }
  }};
`;

export const Icon = styled(DefaultIcon)`
  width: ${sizes.sz024};
  height: ${sizes.sz024};
  align-self: center;
  flex-shrink: 0;
`;
