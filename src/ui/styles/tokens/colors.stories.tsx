import styled from "styled-components";
import withPadding from "$/storybook-helpers/decorators/with-padding";

import { colors, spacing } from "./tokens";
import { setTypography } from "$/ui/styles/mixins";

export default {
  title: "UI: Colors/Tokens",
  decorators: [withPadding(16)],
};

function isTooDark(color: string) {
  const hex = color.replace("#", "");
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 150;
}

const Container = styled.div`
  margin-block-end: ${spacing.sp032};
`;

const Swatch = styled.div<{ $color: keyof typeof colors }>`
  background-color: ${({ $color: color }) => colors[color]};
  height: 64px;
  width: 128px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${setTypography("body1Emphasis")}
  word-wrap: break-word;
  color: ${({ $color: color }) =>
    isTooDark(colors[color]) ? "black" : "white"};
`;
export const All = () => {
  const categories = Object.keys(colors) as Array<keyof typeof colors>;
  const samples = categories.map((color) => {
    return (
      <Container key={color}>
        <Swatch $color={color}>{color}</Swatch>
      </Container>
    );
  });
  return <>{samples}</>;
};
