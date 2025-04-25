// NOTE: This is a base, generic component we are not meant to use directly.
//       Please use the more specialized components (<SecondaryResponsiveButton>, etc.)
//       instead.
import { FC } from "react";

import { IconButton, TextButton } from "./base-responsive-button.styles";
import { Breakpoint } from "$/ui/styles/tokens/tokens";
import { BaseButtonProps } from "$/ui/components/buttons/button/base-button/base-button";
import { BaseIconButtonProps } from "$/ui/components/buttons/icon-button/base-icon-button/base-icon-button";

export type ResponsiveButtonProps = {
  fullButtonFrom: Breakpoint;
};

export type BaseResponsiveButtonProps = BaseButtonProps &
  BaseIconButtonProps &
  ResponsiveButtonProps;

export const BaseResponsiveButton: FC<BaseResponsiveButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <TextButton {...props}>{children}</TextButton>
      <IconButton {...props} />
    </>
  );
};
