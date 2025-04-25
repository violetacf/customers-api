import type { StoryFn } from "@storybook/react";
import withPadding from "$/storybook-helpers/decorators/with-padding";

import {
  SecondaryIconButton,
  SecondaryIconButtonProps,
} from "./secondary-icon-button";
import { iconTypes } from "$/ui/components/icon/icon";

export default {
  title: "UI: Components/IconButtons/Secondary",
  component: SecondaryIconButton,
  decorators: [withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
  args: {
    isDisabled: false,
    icon: "chat",
  },
  argTypes: {
    icon: {
      options: Object.keys(iconTypes),
      control: {
        type: "select",
      },
    },
  },
};

type StoryProps = SecondaryIconButtonProps;

const Template: StoryFn<StoryProps> = (props: StoryProps) => (
  <SecondaryIconButton {...props} />
);

export const Default = Template.bind({});

// states
// NOTE: the library is supposed to support target selectors within the same
//       story, but I could not make it work using the example provided…
//       See https://storybook.js.org/addons/storybook-addon-pseudo-states

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };
export const Pressed = Template.bind({});
Pressed.parameters = { pseudo: { active: true } };
export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true };
