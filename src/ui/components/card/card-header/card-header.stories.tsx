import type { StoryFn } from "@storybook/react";

import { Card } from "$/ui/components/card/card";
import { CardHeader, CardHeaderProps } from "./card-header";
import { SecondaryIconButton } from "$/ui/components/buttons/icon-button/secondary-icon-button/secondary-icon-button";
import { PrimaryButton } from "$/ui/components/buttons/button/primary-button/primary-button";

import withPadding from "$/storybook-helpers/decorators/with-padding";

export default {
  title: "UI: Components/Card/CardHeader",
  component: CardHeader,
  decorators: [withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
};

const Default: StoryFn<CardHeaderProps> = (props: CardHeaderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ...otherProps } = props;
  const header = <CardHeader {...otherProps}>CardHeader</CardHeader>;
  return <Card header={header} />;
};

export const TextOnly = Default.bind({});
export const WithIcon = Default.bind({});
WithIcon.args = { ...Default.args, icon: "chat" };

export const WithIconButton = Default.bind({});
WithIconButton.args = {
  ...Default.args,
  button: <SecondaryIconButton icon="logout" />,
};

export const WithPrimaryButton = Default.bind({});
WithPrimaryButton.args = {
  ...Default.args,
  children: "LongHeaderHere",
  button: <PrimaryButton>Lorem ipsum dolors</PrimaryButton>,
};

export const FullHeader = Default.bind({});
FullHeader.args = {
  ...Default.args,
  icon: "chat",
  button: <SecondaryIconButton icon="logout" />,
};
