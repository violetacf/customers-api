import { FC } from "react";
import {
  BaseButton,
  CommonButtonProps,
  ButtonOrLinkProps,
} from "$/ui/components/buttons/button/base-button/base-button";

export type SecondaryButtonProps = ButtonOrLinkProps &
  Omit<CommonButtonProps, "actionType">;

export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <BaseButton actionType="secondary" {...otherProps}>
      {children}
    </BaseButton>
  );
};
