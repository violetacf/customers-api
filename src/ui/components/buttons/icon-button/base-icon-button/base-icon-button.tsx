// NOTE: This is a base, generic component we are not meant to use directly.
//       Please use the more specialized components (<SecondaryIconButton>, etc.)
//       instead.
import { FC, HTMLProps } from "react";
import type { IconName } from "$/ui/components/icon/icon";
import { IconButton, Icon } from "./base-icon-button.styles";
import { useNavigateToURL } from "$/hooks/use-navigate-to-url";
import { ActionTypes } from "$/ui/components/buttons/button/base-button/base-button";
import { LocationState } from "$/ui/components/global-types";

type ButtonElementProps = Pick<HTMLProps<HTMLButtonElement>, "onClick">;

type IconLinkProps = {
  to: string | URL;
  target?: string;
  type?: "button";
  onClick?: never;
};

type RegularIconButtonProps = {
  to?: never;
  target?: never;
  type?: "button" | "reset" | "submit";
} & ButtonElementProps;

export type IconButtonOrLinkProps = IconLinkProps | RegularIconButtonProps;

export type CommonIconButtonProps = {
  className?: string;
  testId?: string;
  isDisabled?: boolean;
  actionType: ActionTypes;
  icon: IconName;
  "aria-label"?: string;
};

export type BaseIconButtonProps = CommonIconButtonProps &
  IconButtonOrLinkProps & { locationState?: LocationState };

export const BaseIconButton: FC<BaseIconButtonProps> = ({
  className,
  type = "button",
  isDisabled,
  "aria-label": ariaLabel,
  testId,
  icon,
  actionType,
  target,
  to,
  onClick,
  locationState,
}) => {
  if (
    [
      "primary",
      "secondary",
      "secondaryEm",
      "tertiary",
      "destructive",
      "tertiaryEm",
    ].includes(actionType) === false
  ) {
    throw new Error("Action type not yet implemented");
  }

  const navigateToURL = useNavigateToURL();

  const onButtonClick = to
    ? (): void => {
        navigateToURL(to, target, locationState);
      }
    : onClick;

  const buttonRole = to ? "link" : undefined;

  return (
    <IconButton
      type={type}
      className={className}
      data-testid={testId}
      aria-label={ariaLabel}
      disabled={isDisabled}
      $actionType={actionType}
      onClick={onButtonClick}
      role={buttonRole}
    >
      <Icon name={icon} />
    </IconButton>
  );
};
