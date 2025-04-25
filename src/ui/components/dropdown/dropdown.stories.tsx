import type { StoryFn } from "@storybook/react";
import { Dropdown, DropdownProps } from "./dropdown";
import withPadding from "$/storybook-helpers/decorators/with-padding";

export default {
  title: "UI: Components/Dropdown",
  component: Dropdown,
  decorators: [withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
  args: {
    icon: "dotsThreeOutline",
    options: [
      {
        label: "Option 1",
        icon: "addressBook",
      },
      {
        label: "Option 2",
        icon: "fileText",
      },
      {
        label: "Option 3",
        icon: "truck",
      },
    ],
  },
};

const Template: StoryFn<DropdownProps> = (props: DropdownProps) => (
  <Dropdown {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = { isOpenByDefault: true };

export const WithLabel = Template.bind({});
WithLabel.args = { isOpenByDefault: true, label: "Label" };
