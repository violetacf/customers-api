import { forwardRef } from "react";
import type { ReactNode } from "react";
import { Container } from "./text.styles";
import type { Color, Typography } from "$/ui/styles/tokens/tokens";

export type TextTypography = Extract<
  Typography,
  | "overline"
  | "body1"
  | "body1Emphasis"
  | "body2"
  | "body2Emphasis"
  | "caption"
  | "captionEmphasis"
  | "headline4"
>;

export type TextColors = Extract<
  Color,
  | "topiBlue05"
  | "topiBlue10"
  | "topiBlue20"
  | "topiBlue30"
  | "topiBlue40"
  | "topiBlue50"
  | "topiBlue60"
  | "topiBlue70"
  | "topiPink05"
  | "topiPink10"
  | "topiPink50"
  | "white"
  | "black"
  | "grey04"
  | "grey10"
  | "grey15"
  | "grey20"
  | "grey30"
  | "grey40"
  | "grey50"
  | "grey60"
  | "grey70"
  | "grey80"
  | "grey90"
  | "grey100"
  | "green05"
  | "green10"
  | "green20"
  | "green70"
  | "yellow05"
  | "yellow10"
  | "yellow20"
  | "yellow50"
  | "yellow60"
  | "red05"
  | "red10"
  | "red20"
  | "red40"
  | "red50"
  | "red60"
  | "red70"
  | "alpha04"
  | "alpha08"
  | "alpha20"
  | "alpha40"
>;

export interface TextProps {
  children: ReactNode;
  className?: string;
  isTruncated?: boolean;
  tag?: "p" | "span" | "li" | "dt" | "dd" | "label" | "b" | "legend";
  testId?: string;
  typography?: TextTypography;
  color?: TextColors;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      className,
      isTruncated: isTruncated,
      tag = "p",
      testId,
      typography = "body1",
      color,
    },
    ref
  ) => (
    <Container
      as={tag}
      className={className}
      data-testid={testId}
      $isTruncated={isTruncated}
      ref={ref}
      $typography={typography}
      color={color}
    >
      {children}
    </Container>
  )
);

Text.displayName = "Text";
