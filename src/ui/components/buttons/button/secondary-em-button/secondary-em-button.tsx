import { FC } from "react";
import {
  BaseButton,
  ButtonOrLinkProps,
  CommonButtonProps,
} from "$/ui/components/buttons/button/base-button/base-button";

export type SecondaryEmButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const SecondaryEmButton: FC<SecondaryEmButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <BaseButton actionType="secondaryEm" {...otherProps}>
      {children}
    </BaseButton>
  );
};
