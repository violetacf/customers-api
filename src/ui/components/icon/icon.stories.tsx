import styled from "styled-components";
import type { Meta, StoryObj } from "@storybook/react";

import withPadding from "$/storybook-helpers/decorators/with-padding";
import { Icon as DefaultIcon, IconName, iconTypes } from "./icon";
import {
  borderRadius,
  borderWidths,
  colors,
  sizes,
  spacing,
} from "$/ui/styles/tokens/tokens";

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: ${spacing.sp012};
`;

const IconContainer = styled.div`
  padding: ${spacing.sp012};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sp012};
  border: ${borderWidths.sm} solid ${colors.grey10};
  border-radius: ${borderRadius.s};
`;

const Icon = styled(DefaultIcon)`
  width: ${sizes.sz048};
  height: ${sizes.sz048};
  color: ${colors.topiPink50};
`;

const meta: Meta<typeof DefaultIcon> = {
  title: "UI: Components/Icon",
  component: DefaultIcon,
  decorators: [withPadding()],
};

export default meta;
type Story = StoryObj<typeof DefaultIcon>;

export const Default: Story = {
  render: () => (
    <IconsContainer>
      {Object.keys(iconTypes).map((type) => {
        const name = type as IconName;
        return (
          <IconContainer>
            <h1>{type}</h1>
            <Icon name={name} />
          </IconContainer>
        );
      })}
    </IconsContainer>
  ),
};
