import { FC } from "react";

import { Container, Ring, SpinnerSize } from "./spinner.styles";

interface SpinnerProps {
  className?: string;
  size?: SpinnerSize;
}

export const Spinner: FC<SpinnerProps> = ({ className, size = "l" }) => {
  return (
    <Container
      aria-label={"Loading"}
      role="img"
      $size={size}
      className={className}
    >
      <Ring $size={size} />
      <Ring $size={size} />
      <Ring $size={size} />
      <Ring $size={size} />
      <Ring $size={size} />
    </Container>
  );
};
