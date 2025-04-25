import { FC, ReactNode } from "react";

import { Wrapper, Content } from "./main.styles";

interface MainProps {
  className?: string;
  children?: ReactNode;
}

export const Main: FC<MainProps> = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <Content>{children}</Content>
    </Wrapper>
  );
};
