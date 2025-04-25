import styled, { css } from "styled-components";
import { linesClamp, setTypography } from "$/ui/styles/mixins";
import { spacing } from "$/ui/styles/tokens/tokens";
import { TextTypography } from "$/ui/components/text/text";

type ContainerProps = {
  $typography: TextTypography;
  $isTruncated?: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ $typography }) =>
    $typography &&
    css`
      margin: ${spacing.sp004} 0;
      padding: 0;
      ${setTypography($typography)};
    `}

  ${({ $isTruncated }) =>
    $isTruncated &&
    css`
      width: 100%;
      vertical-align: bottom;
      ${linesClamp()};
    `}
`;
