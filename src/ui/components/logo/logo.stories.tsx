import type { StoryFn } from "@storybook/react";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import { Logo, LogoProps } from "./logo";
import { brand } from "$/ui/styles/tokens/tokens";

export default {
  title: "UI: Components/Logo",
  component: Logo,
  decorators: [withPadding()],
  backgrounds: { default: "white" },
  args: {
    variant: "on-white",
    size: "m",
  },
  argTypes: {
    variant: {
      options: ["on-white", "on-black", "on-blue", "on-pink"],
      control: { type: "select" },
    },
    size: {
      options: ["s", "m"],
      control: { type: "select" },
    },
  },
};

const Template: StoryFn<LogoProps> = (props) => <Logo {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const OnBlack = Template.bind({});
OnBlack.args = {
  variant: "on-black",
};
OnBlack.parameters = {
  backgrounds: { default: "dark" },
};

export const OnBlue = Template.bind({});
OnBlue.args = {
  variant: "on-blue",
};
OnBlue.parameters = {
  backgrounds: { default: "topi-blue" },
};

export const OnPink = Template.bind({});
OnPink.args = {
  variant: "on-pink",
};
OnPink.parameters = {
  backgrounds: { default: "topi-pink" },
};

export const SizeS = Template.bind({});
SizeS.args = { size: "s" };

export const LogoURLSmall = Template.bind({});
LogoURLSmall.args = {
  size: "s",
  logoURL: brand.logoURL,
};

export const LogoURLRegular = Template.bind({});
LogoURLRegular.args = {
  logoURL: brand.logoURL,
};
