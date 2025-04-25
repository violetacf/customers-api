import { FC } from "react";

import {
  BaseIconButton,
  IconButtonOrLinkProps,
  CommonIconButtonProps,
} from "$/ui/components/buttons/icon-button/base-icon-button/base-icon-button";

export type TertiaryIconButtonProps = IconButtonOrLinkProps &
  Omit<CommonIconButtonProps, "actionType">;

export const TertiaryIconButton: FC<TertiaryIconButtonProps> = (props) => {
  return <BaseIconButton actionType="tertiary" {...props} />;
};
