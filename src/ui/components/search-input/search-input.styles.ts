import styled from "styled-components";

import { Text } from "$/ui/components/text/text";
import { colors, spacing } from "$/ui/styles/tokens/tokens";
import { Icon } from "$/ui/components/icon/icon";
// import { BaseInput } from "$/ui/components/input/base-input/base-input";

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

// export const Input = styled(BaseInput)`
//   width: 100%;
//   padding-inline-start: ${spacing.sp040};
// `;

// Changed this style because base-input wasn't present
export const Input = styled.input`
  width: 100%;
  padding-inline-start: ${spacing.sp040};
  padding-block: ${spacing.sp008};
  border: 1px solid ${colors.grey40};
  border-radius: 4px;
  font-size: 1rem;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  margin-inline-start: ${spacing.sp016};
`;

export const Description = styled(Text)`
  color: ${colors.grey60};
  margin: 0;
`;
