import styled from "styled-components";
import { FC, ReactNode } from "react";

import {
  Heading as DefaultHeading,
  HeadingTypography,
} from "$/ui/components/heading/heading";
import { spacing, colors } from "$/ui/styles/tokens/tokens";

const Heading = styled(DefaultHeading)`
  color: ${colors.topiPink50};
  margin-block-end: ${spacing.sp016};
`;

export const Section = styled.section`
  padding-block-end: ${spacing.sp032};
`;

interface TitleProps {
  children?: ReactNode;
  level?: 1 | 2;
  typography?: HeadingTypography;
}

export const Title: FC<TitleProps> = ({
  children,
  level = 2,
  typography = "overline",
}: TitleProps) => {
  return (
    <Heading $level={level} typography={typography}>
      {children}
    </Heading>
  );
};
