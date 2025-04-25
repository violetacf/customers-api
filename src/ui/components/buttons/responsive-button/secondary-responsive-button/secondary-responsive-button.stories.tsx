import type { StoryFn } from "@storybook/react";
import withPadding from "$/storybook-helpers/decorators/with-padding";

import {
  SecondaryResponsiveButton,
  SecondaryResponsiveButtonProps,
} from "./secondary-responsive-button";
import { iconTypes } from "$/ui/components/icon/icon";

export default {
  title: "UI: Components/ResponsiveButtons/Secondary",
  component: SecondaryResponsiveButton,
  decorators: [withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
  args: {
    fullButtonFrom: "m",
    icon: "logout",
    isDisabled: false,
  },
  argTypes: {
    icon: {
      options: Object.keys(iconTypes),
      control: {
        type: "select",
      },
    },
    fullButtonFrom: {
      options: ["m", "l", "xl"],
      control: {
        type: "select",
      },
    },
  },
};

type StoryProps = SecondaryResponsiveButtonProps;

const Template: StoryFn<StoryProps> = (props: StoryProps) => (
  <SecondaryResponsiveButton {...props}>Lorem ipsum</SecondaryResponsiveButton>
);

export const FromM = Template.bind({});

export const FromL = Template.bind({});
FromL.args = { fullButtonFrom: "l" };

export const FromXL = Template.bind({});
FromXL.args = { fullButtonFrom: "xl" };
