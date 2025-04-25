import { FC } from "react";
import {
  CommonButtonProps,
  ButtonOrLinkProps,
  BaseButton,
} from "$/ui/components/buttons/button/base-button/base-button";

export type PrimaryButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const PrimaryButton: FC<PrimaryButtonProps> = (
  props: PrimaryButtonProps
) => {
  const { children, ...otherProps } = props;
  return (
    <BaseButton actionType="primary" {...otherProps}>
      {children}
    </BaseButton>
  );
};
