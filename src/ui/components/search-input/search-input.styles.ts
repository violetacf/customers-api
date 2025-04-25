import styled from "styled-components";

import { Text } from "$/ui/components/text/text";
import { colors, spacing } from "$/ui/styles/tokens/tokens";
import { Icon } from "$/ui/components/icon/icon";
import { BaseInput } from "$/ui/components/input/base-input/base-input";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sp008};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.grey90};
`;

export const Input = styled(BaseInput)`
  width: 100%;
  padding-inline-start: ${spacing.sp040};
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  margin-inline-start: ${spacing.sp016};
`;

export const Description = styled(Text)`
  color: ${colors.grey60};
  margin: 0;
`;
