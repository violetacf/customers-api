import { FC } from "react";
import {
  BaseButton,
  ButtonOrLinkProps,
  CommonButtonProps,
} from "$/ui/components/buttons/button/base-button/base-button";

export type DestructiveButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const DestructiveButton: FC<DestructiveButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <BaseButton actionType="destructive" {...otherProps}>
      {children}
    </BaseButton>
  );
};
