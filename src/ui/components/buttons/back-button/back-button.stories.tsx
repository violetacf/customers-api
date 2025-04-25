import type { Meta, StoryFn } from "@storybook/react";
import { BackButton, BackButtonProps } from "./back-button";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import {
  Title,
  Section,
} from "$/storybook-helpers/components/combined-stories";

export default {
  title: "UI: Components/IconButtons/BackButton",
  component: BackButton,
  decorators: [withPadding(24)],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
} as Meta<typeof BackButton>;

const AllTemplate: StoryFn<BackButtonProps> = (props) => {
  const items: { title: string; id?: string }[] = [
    { title: "Back button" },
    { title: "Back button (hover)", id: "hover" },
    { title: "Back button (focus)", id: "focus-visible" },
    { title: "Back button (active)", id: "active" },
  ];

  return (
    <>
      {items.map((lineProps) => {
        const { id, title } = lineProps;
        return (
          <Section>
            <Title>{title}</Title>
            <BackButton className={`pseudo-${id}`} {...props} />
          </Section>
        );
      })}
    </>
  );
};

const Template: StoryFn<BackButtonProps> = (props) => {
  return <BackButton {...props} />;
};

export const All = AllTemplate.bind({});
All.parameters = {
  controls: {
    include: [],
  },
};

export const Default = Template.bind({});
Default.parameters = {
  chromatic: { disableSnapshot: true },
};
