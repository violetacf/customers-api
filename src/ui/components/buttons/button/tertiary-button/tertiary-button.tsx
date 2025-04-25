import { FC } from "react";
import {
  BaseButton,
  ButtonOrLinkProps,
  CommonButtonProps,
} from "$/ui/components/buttons/button/base-button/base-button";

export type TertiaryButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const TertiaryButton: FC<TertiaryButtonProps> = (props) => {
  return <BaseButton actionType="tertiary" {...props} />;
};
