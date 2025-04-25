import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import {
  Illustration as DefaultIllustration,
  IllustrationNames,
  IllustrationTypes,
} from "./illustration";
import withPadding from "$/storybook-helpers/decorators/with-padding";
import {
  borderRadius,
  borderWidths,
  colors,
  spacing,
} from "$/ui/styles/tokens/tokens";

const IllustrationsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: ${spacing.sp012};
`;

type IllustrationContainerProps = { $size: number };

const IllustrationContainer = styled.div<IllustrationContainerProps>`
  padding: ${spacing.sp012};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sp012};
  border: ${borderWidths.sm} solid ${colors.grey10};
  border-radius: ${borderRadius.s};
  width: ${({ $size: size }) => size}px;
`;

const Illustration = styled(DefaultIllustration)`
  width: 100%;
`;

const meta: Meta<IllustrationContainerProps> = {
  title: "UI: Components/Illustrations",
  component: IllustrationContainer,
  decorators: [withPadding()],
  argTypes: {
    $size: {
      control: { type: "range", min: 10, max: 500, step: 10 },
    },
  },
};

export default meta;

export const Default: StoryObj<IllustrationContainerProps> = {
  render: ({ $size: size }) => {
    return (
      <IllustrationsContainer>
        {Object.keys(IllustrationTypes).map((type) => {
          const name = type as IllustrationNames;
          return (
            <IllustrationContainer $size={size}>
              <h1>{type}</h1>
              <Illustration name={name} />
            </IllustrationContainer>
          );
        })}
      </IllustrationsContainer>
    );
  },
  args: {
    $size: 200,
  },
};
