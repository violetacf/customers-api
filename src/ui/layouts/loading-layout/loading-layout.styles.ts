import styled from "styled-components";

interface ContainerProps {
  inheritHeight?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.inheritHeight ? "100%" : "100vh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
