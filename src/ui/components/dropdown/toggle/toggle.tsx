import { FC } from "react";
import { useDropdownToggle } from "react-overlays";

import { Icon, IconName } from "$/ui/components/icon/icon";
import { Button } from "./toggle.styles";

export interface ToggleProps {
  icon: IconName;
  className?: string;
  isDisabled?: boolean;
  ariaLabel?: string;
  testId?: string;
}

export const Toggle: FC<ToggleProps> = ({
  icon,
  className,
  isDisabled,
  ariaLabel,
  testId,
}: ToggleProps) => {
  const [props, { toggle, show }] = useDropdownToggle();
  return (
    <Button
      {...props}
      type="button"
      className={className}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={(): void => toggle(!show)}
      data-testid={testId}
    >
      <Icon name={icon} />
    </Button>
  );
};
