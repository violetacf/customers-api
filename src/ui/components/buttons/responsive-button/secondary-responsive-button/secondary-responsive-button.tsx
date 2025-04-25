import { FC } from "react";

import {
  BaseResponsiveButton,
  BaseResponsiveButtonProps,
} from "$/ui/components/buttons/responsive-button/base-responsive-button/base-responsive-button";
import { ButtonOrLinkProps } from "$/ui/components/buttons/button/base-button/base-button";

export type SecondaryResponsiveButtonProps = ButtonOrLinkProps &
  Omit<BaseResponsiveButtonProps, "actionType">;

export const SecondaryResponsiveButton: FC<SecondaryResponsiveButtonProps> = (
  props
) => {
  return <BaseResponsiveButton actionType="secondary" {...props} />;
};
