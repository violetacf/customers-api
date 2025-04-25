import { FC } from "react";
import { Container } from "./loading-layout.styles";
import { SpinnerAndText } from "$/ui/layouts/loading-layout/spinner-and-text";

interface LoadingLayoutProps {
  inheritHeight?: boolean;
}

export const LoadingLayout: FC<LoadingLayoutProps> = ({ inheritHeight }) => {
  return (
    <Container inheritHeight={inheritHeight}>
      <SpinnerAndText />
    </Container>
  );
};
