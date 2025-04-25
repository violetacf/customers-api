import styled from "styled-components";

import {
  colors,
  typography,
  spacing,
  Typography as TypographyType,
} from "./tokens";
import { Heading as DefaultHeading } from "$/ui/components/heading/heading";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import { setTypography } from "$/ui/styles/mixins";

export default {
  title: "UI: Typography/Typography",
  decorators: [withPadding(16)],
};

const Item = styled.div`
  margin-bottom: ${spacing.sp032};
`;

const Content = styled.div<{ $category: TypographyType }>`
  ${({ $category: category }) => setTypography(category)}
`;

const Heading = styled(DefaultHeading)`
  color: ${colors.topiPink50};
`;

export const Typography = () => {
  const categories = Object.keys(typography) as TypographyType[];
  return categories.map((category: TypographyType) => (
    <Item key={category}>
      <Heading $level={5} typography="overline">
        {category}
      </Heading>
      <Content $category={category}>Business the simple way.</Content>
    </Item>
  ));
};
