import styled from "styled-components";

import { spacing, sizes } from "$/ui/styles/tokens/tokens";
import { Heading as DefaultHeading } from "$/ui/components/heading/heading";
import { Icon as DefaultIcon } from "$/ui/components/icon/icon";

export const Container = styled.header`
  display: flex;
  gap: ${spacing.sp016};
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ICON_SIZE = sizes.sz016;

export const Icon = styled(DefaultIcon)`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
`;

export const Heading = styled(DefaultHeading)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: ${spacing.sp008};
`;
