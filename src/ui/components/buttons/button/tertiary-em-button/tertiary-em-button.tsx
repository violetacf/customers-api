import { FC } from "react";
import {
  BaseButton,
  ButtonOrLinkProps,
  CommonButtonProps,
} from "$/ui/components/buttons/button/base-button/base-button";

export type TertiaryEmButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const TertiaryEmButton: FC<TertiaryEmButtonProps> = (props) => {
  return <BaseButton actionType="tertiaryEm" {...props} />;
};
