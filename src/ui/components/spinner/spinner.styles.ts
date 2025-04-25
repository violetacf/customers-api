import styled from "styled-components";
import {
  borderRadius,
  colors,
  sizes,
  spacing,
} from "$/ui/styles/tokens/tokens";

// CSS from https://loading.io/css

const SPINNER_PROPORTIONS = sizes.sz080;
const SPINNER_PROPORTIONS_SMALL = sizes.sz056;

export type SpinnerSize = "s" | "l";

interface SpinnerProps {
  $size: SpinnerSize;
}

export const Container = styled.div<SpinnerProps>`
  position: relative;
  width: ${({ $size: size }) =>
    size === "s" ? SPINNER_PROPORTIONS_SMALL : SPINNER_PROPORTIONS};
  height: ${({ $size: size }) =>
    size === "s" ? SPINNER_PROPORTIONS_SMALL : SPINNER_PROPORTIONS};
`;

export const Ring = styled.div<SpinnerProps>`
  position: absolute;
  width: ${({ $size: size }) =>
    size === "s"
      ? `calc(${SPINNER_PROPORTIONS_SMALL} - (${sizes.sz008} * 2))`
      : `calc(${SPINNER_PROPORTIONS} - (${sizes.sz008} * 2))`};
  height: ${({ $size: size }) =>
    size === "s"
      ? `calc(${SPINNER_PROPORTIONS_SMALL} - (${sizes.sz008} * 2))`
      : `calc(${SPINNER_PROPORTIONS} - (${sizes.sz008} * 2))`};
  margin: ${spacing.sp008};
  border: ${({ $size: size }) =>
    size === "s"
      ? `${sizes.sz004} solid ${colors.topiBlue50}`
      : `${sizes.sz008} solid ${colors.topiBlue50}`};

  border-radius: ${borderRadius.rounded};
  animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${colors.topiBlue50} transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
