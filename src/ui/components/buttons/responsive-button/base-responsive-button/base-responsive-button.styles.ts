import styled from "styled-components";

import { getMediaQuery } from "$/ui/styles/media-queries";
import { BaseButton } from "$/ui/components/buttons/button/base-button/base-button";
import { BaseIconButton } from "$/ui/components/buttons/icon-button/base-icon-button/base-icon-button";
import { ResponsiveButtonProps } from "$/ui/components/buttons/responsive-button/base-responsive-button/base-responsive-button";

type ResponsiveFullButtonProps = Pick<ResponsiveButtonProps, "fullButtonFrom">;

export const TextButton = styled(BaseButton)<{
  fullButtonFrom: ResponsiveFullButtonProps["fullButtonFrom"];
}>`
  display: none;

  ${({ fullButtonFrom }) => getMediaQuery(fullButtonFrom)} {
    display: inline-flex;
  }
`;
export const IconButton = styled(BaseIconButton)<{
  fullButtonFrom: ResponsiveFullButtonProps["fullButtonFrom"];
}>`
  display: inline-flex;

  ${({ fullButtonFrom }) => getMediaQuery(fullButtonFrom)} {
    display: none;
  }
`;
