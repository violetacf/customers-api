import { FC } from "react";
import type { ReactNode } from "react";
import { Container } from "./heading.styles";
import { Typography } from "$/ui/styles/tokens/tokens";

export type HeadingTypography = Extract<
  Typography,
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "body1Emphasis"
  | "overline"
>;

export interface HeadingProps {
  children: ReactNode;
  className?: string;
  $level: 1 | 2 | 3 | 4 | 5 | 6;
  testId?: string;
  typography?: HeadingTypography;
}

export const Heading: FC<HeadingProps> = ({
  children,
  className,
  $level: level = 1,
  testId,
  typography: typography = "headline1",
}) => {
  return (
    <Container
      as={`h${level}`}
      className={className}
      data-testid={testId}
      $typography={typography}
    >
      {children}
    </Container>
  );
};
