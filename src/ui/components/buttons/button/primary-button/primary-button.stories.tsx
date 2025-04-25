import type { StoryFn } from "@storybook/react";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import {
  Title,
  Section,
} from "$/storybook-helpers/components/combined-stories";

export default {
  title: "UI: Components/Buttons/PrimaryButton",
  component: PrimaryButton,
  decorators: [withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
};

const AllTemplate: StoryFn = () => {
  const items: (PrimaryButtonProps & { title: string; id?: string })[] = [
    { title: "Default" },
    { title: "With icon", icon: "medal" },
    { title: "Small text", icon: "medal", typography: "body2Emphasis" },
    { title: "Hover", id: "hover" },
    { title: "Focus", id: "focus-visible" },
    { title: "Active", id: "active" },
    {
      title: "Disabled",
      isDisabled: true,
    },
    {
      title: "Loading",
      isLoading: true,
    },
  ];

  return (
    <>
      {items.map((lineProps) => {
        const { id, title, ...props } = lineProps;
        return (
          <Section>
            <Title>{title}</Title>
            <PrimaryButton className={`pseudo-${id}`} {...props}>
              Primary Button
            </PrimaryButton>
          </Section>
        );
      })}
    </>
  );
};

const Template: StoryFn<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  return <PrimaryButton {...props}>Primary Button</PrimaryButton>;
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
