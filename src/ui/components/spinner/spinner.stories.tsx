import type { StoryFn } from "@storybook/react";
import { Spinner } from "./spinner";
import withPadding from "$/storybook-helpers/decorators/with-padding";

export default {
  title: "UI: Components/Spinner",
  component: Spinner,
  decorators: [withPadding()],
};

const Template: StoryFn = (props) => <Spinner {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { size: "s" };
