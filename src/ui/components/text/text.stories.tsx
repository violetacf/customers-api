import type { StoryFn } from "@storybook/react";
import styled from "styled-components";

import { Text } from "./text";
import type { TextProps } from "./text";
import { colors, spacing } from "$/ui/styles/tokens/tokens";
import { Heading } from "$/ui/components/heading/heading";

export default {
  title: "UI: Typography/Text",
  component: Text,
};

const Section = styled.section`
  padding-block-end: ${spacing.sp032};
`;

const Title = styled(Heading)`
  color: ${colors.topiPink50};
`;

const Template: StoryFn = () => {
  const items: (TextProps & { title: string })[] = [
    {
      title: "Overline",
      tag: "label",
      children: "This is an overline",
      typography: "overline",
    },
    {
      title: "Body1",
      tag: "p",
      children: "This is a body1",
      typography: "body1",
    },
    {
      title: "Body1 emphasis",
      tag: "p",
      children: "This is a body1 emphasis",
      typography: "body1Emphasis",
    },
    {
      title: "Body2",
      tag: "p",
      children: "This is a body2",
      typography: "body2",
    },
    {
      title: "Body2 emphasis",
      tag: "p",
      children: "This is a body2 emphasis",
      typography: "body2Emphasis",
    },
    {
      title: "Caption",
      tag: "span",
      children: "This is a caption",
      typography: "caption",
    },
    {
      title: "Caption emphasis",
      tag: "span",
      children: "This is a caption emphasis",
      typography: "captionEmphasis",
    },
    {
      title: "Headline4",
      tag: "span",
      children: "This is a headline4",
      typography: "headline4",
    },
    {
      title: "Truncated",
      tag: "span",
      children:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam.",
      isTruncated: true,
    },
  ];

  return (
    <>
      {items.map((rowProps) => {
        const { title, ...props } = rowProps;
        return (
          <Section>
            <Title $level={5} typography="overline">
              {title}
            </Title>
            <Text {...props} />
          </Section>
        );
      })}
    </>
  );
};

export const Default = Template.bind({});
