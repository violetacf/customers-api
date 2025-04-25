import styled from "styled-components";
import type { StoryFn } from "@storybook/react";

import withMaxWidth from "$/storybook-helpers/decorators/with-maxwidth";
import withPadding from "$/storybook-helpers/decorators/with-padding";

import { Card, CardProps } from "./card";
import { CardHeader } from "./card-header/card-header";
import { SecondaryIconButton } from "$/ui/components/buttons/icon-button/secondary-icon-button/secondary-icon-button";

export default {
  title: "UI: Components/Card",
  component: Card,
  decorators: [withMaxWidth(), withPadding()],
  parameters: {
    backgrounds: { default: "topi-background" },
  },
  argTypes: {
    header: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

type CardStoryProps = Omit<CardProps, "type">;

const DefaultPrimary: StoryFn<CardStoryProps> = ({
  header,
}: CardStoryProps) => (
  <Card type="primary" header={header}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit animi
      voluptatibus deleniti officiis.
    </p>
  </Card>
);

const anyHeader = (
  <CardHeader icon="chat" button={<SecondaryIconButton icon="logout" />}>
    Header
  </CardHeader>
);

const DefaultSecondary: StoryFn<CardStoryProps> = ({
  icon,
}: CardStoryProps) => (
  <Card type="secondary" icon={icon}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit animi
      voluptatibus deleniti officiis.
    </p>
  </Card>
);

export const Primary = DefaultPrimary.bind({});
Primary.args = { ...DefaultPrimary.args };

export const PrimaryWithHeader = DefaultPrimary.bind({});
PrimaryWithHeader.args = {
  ...DefaultPrimary.args,
  header: anyHeader,
};

export const Secondary = DefaultSecondary.bind({});
Secondary.parameters = { backgrounds: { default: "medium" } };

export const SecondaryWithIcon = DefaultSecondary.bind({});
SecondaryWithIcon.args = {
  ...DefaultSecondary.args,
  icon: "medal",
};
SecondaryWithIcon.parameters = { backgrounds: { default: "medium" } };

const InnerWrapper = styled.div`
  display: grid;
  row-gap: 16px;
`;

const PrimaryWithHeaderAndInnerCard: StoryFn = () => {
  return (
    <Card type="primary" header={anyHeader}>
      <InnerWrapper>
        <p>Lorem ipsum.</p>
        <Card type="secondary" icon="medal">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quas minima natus eius et beatae illum dolorem unde excepturi
            voluptas.
          </p>
        </Card>
      </InnerWrapper>
    </Card>
  );
};

export const WithAnInnerCard = PrimaryWithHeaderAndInnerCard.bind({});
