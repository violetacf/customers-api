// NOTE: This is a base, generic component we are not meant to use directly.
//       Please use the more specialized components (<PrimaryButton>, etc.)
//       instead.
import { FC, ReactNode, HTMLProps } from "react";
import { Button, ButtonContent } from "./base-button.styles";
import { Typography } from "$/ui/styles/tokens/tokens";
import { IconName, Icon } from "$/ui/components/icon/icon";
import { useNavigateToURL } from "$/hooks/use-navigate-to-url";
import { LoaderIcon } from "$/ui/components/buttons/button/base-button/loader-icon";

export type ButtonTypography = Extract<
  Typography,
  "headline3" | "headline4" | "body1Emphasis" | "body2Emphasis" | "body2"
>;

type ButtonElementProps = Pick<HTMLProps<HTMLButtonElement>, "onClick">;

export type ButtonOrLinkProps =
  // link buttons
  | {
      to: string | URL;
      target?: string;
      type?: "button";
      onClick?: never;
    }
  // regular buttons
  | ({
      to?: never;
      target?: never;
      type?: "button" | "reset" | "submit";
    } & ButtonElementProps);

export type ActionTypes =
  | "primary"
  | "secondary"
  | "secondaryEm"
  | "tertiary"
  | "destructive"
  | "tertiaryEm";

export type CommonButtonProps = {
  children?: ReactNode;
  className?: string;
  testId?: string;
  isDisabled?: boolean;
  typography?: ButtonTypography;
  actionType: ActionTypes;
  icon?: IconName;
  isLoading?: boolean;
};

export type BaseButtonProps = ButtonOrLinkProps & CommonButtonProps;

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  className,
  testId,
  type = "button",
  isDisabled,
  typography = "body1Emphasis",
  actionType,
  icon,
  onClick,
  target,
  to,
  isLoading = false,
}: BaseButtonProps) => {
  const navigateToURL = useNavigateToURL();

  const onButtonClick = to
    ? (): void => {
        navigateToURL(to, target);
      }
    : onClick;

  const role = to ? "link" : undefined;
  const iconContent = !isLoading ? (
    icon ? (
      <Icon name={icon} />
    ) : undefined
  ) : undefined;

  return (
    <Button
      className={className}
      type={type}
      disabled={isDisabled || isLoading}
      $typography={typography}
      $actionType={actionType}
      onClick={onButtonClick}
      role={role}
      data-testid={testId}
      $isLoading={isLoading}
    >
      {iconContent}
      <ButtonContent>{children}</ButtonContent>
      {isLoading ? <LoaderIcon /> : undefined}
    </Button>
  );
};
