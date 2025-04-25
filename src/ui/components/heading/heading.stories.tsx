import styled from "styled-components";

import type { StoryFn } from "@storybook/react";
import { Heading } from "./heading";
import type { HeadingProps } from "./heading";
import { spacing, colors } from "$/ui/styles/tokens/tokens";

export default {
  title: "UI: Typography/Heading",
  component: Heading,
};

const Section = styled.section`
  padding-block-end: ${spacing.sp032};
`;

const Title = styled(Heading)`
  color: ${colors.topiPink50};
`;

const Template: StoryFn = () => {
  const items: HeadingProps[] = [
    {
      $level: 1,
      children: "This is a H1",
      typography: "headline1",
    },

    {
      $level: 2,
      children: "This is a H2",
      typography: "headline2",
    },

    {
      $level: 3,
      children: "This is a H3",
      typography: "headline3",
    },

    {
      $level: 4,
      children: "This is a H4",
      typography: "headline3",
    },

    {
      $level: 5,
      children: "This is a H5",
      typography: "headline4",
    },

    {
      $level: 6,
      children: "This is a H6",
      typography: "body1Emphasis",
    },

    {
      $level: 6,
      children: "H6 (custom typography)",
      typography: "overline",
    },
  ];

  return (
    <>
      {items.map((props: HeadingProps) => {
        return (
          <Section>
            <Title $level={5} typography="overline">
              {props.typography}
            </Title>
            <Heading {...props} />
          </Section>
        );
      })}
    </>
  );
};

export const Default = Template.bind({});
