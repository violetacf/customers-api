import { FC, MouseEventHandler } from "react";
import { SecondaryIconButton } from "$/ui/components/buttons/icon-button/secondary-icon-button/secondary-icon-button";
import { LocationState } from "$/ui/components/global-types";

export type BackButtonProps = {
  to?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  testId?: string;
  locationState?: LocationState;
};

export const BackButton: FC<BackButtonProps> = ({
  to,
  className,
  onClick,
  testId,
  locationState,
}) => {
  return to ? (
    <SecondaryIconButton
      aria-label={"Back"}
      to={to}
      icon="arrowLeft"
      className={className}
      testId={testId}
      locationState={locationState}
    />
  ) : (
    <SecondaryIconButton
      aria-label={"Back"}
      onClick={onClick}
      icon="arrowLeft"
      className={className}
      testId={testId}
    />
  );
};
