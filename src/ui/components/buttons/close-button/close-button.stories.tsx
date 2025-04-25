import type { StoryFn } from "@storybook/react";
import {
  CloseButton,
  CloseButtonProps,
} from "$/ui/components/buttons/close-button/close-button";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import {
  Title,
  Section,
} from "$/storybook-helpers/components/combined-stories";

export default {
  title: "UI: Components/IconButtons/CloseButton",
  component: CloseButton,
  decorators: [withPadding()],
  args: {
    isDisabled: false,
  },
  parameters: {
    backgrounds: { default: "topi-background" },
  },
};

const AllTemplate: StoryFn<CloseButtonProps> = (props) => {
  const items: { title: string; id?: string }[] = [
    { title: "Close button" },
    { title: "Close button (hover)", id: "hover" },
    { title: "Close button (focus)", id: "focus-visible" },
    { title: "Close button (active)", id: "active" },
  ];

  return (
    <>
      {items.map((lineProps) => {
        const { id, title } = lineProps;
        return (
          <Section>
            <Title>{title}</Title>
            <CloseButton className={`pseudo-${id}`} {...props} />
          </Section>
        );
      })}
    </>
  );
};

const Template: StoryFn<CloseButtonProps> = (props) => {
  return <CloseButton {...props} />;
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
