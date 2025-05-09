import styled, { css } from "styled-components";
import { spacing } from "$/ui/styles/tokens/tokens";

type BaseContainerProps = {
  children: React.ReactNode;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  noPadding?: boolean;
  layout?: "column" | "row";
  alignItemsCenter?: boolean;
};

export const BaseContainer = styled.section<BaseContainerProps>`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ layout }) => layout || "column"};
  gap: ${spacing.sp016};

  ${({ noPadding }) =>
    noPadding
      ? css`
          padding: 0;
        `
      : css`
          padding: 0 ${spacing.sp016};
        `}
  ${({ alignItemsCenter }) =>
    alignItemsCenter &&
    css`
      align-items: center;
    `}
`;
