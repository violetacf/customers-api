import { FC } from "react";
import {
  BaseIconButton,
  IconButtonOrLinkProps,
  CommonIconButtonProps,
} from "$/ui/components/buttons/icon-button/base-icon-button/base-icon-button";
import { LocationState } from "$/ui/components/global-types";

export type SecondaryIconButtonProps = IconButtonOrLinkProps &
  Omit<CommonIconButtonProps, "actionType"> & { locationState?: LocationState };

export const SecondaryIconButton: FC<SecondaryIconButtonProps> = (props) => {
  return <BaseIconButton actionType="secondary" {...props} />;
};
