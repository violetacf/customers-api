import { FC } from "react";
import { useDropdownToggle } from "react-overlays";

import { Icon, IconName } from "$/ui/components/icon/icon";
import { Button, Text } from "./toggle-with-label.styles";

export interface ToggleWithLabelProps {
  icon: IconName;
  className?: string;
  isDisabled?: boolean;
  label: string;
  ariaLabel?: string;
  testId?: string;
}

/**
 * Note: Because of the way react-overlays works, it's more complicated
 * to use our design system's Button component than to style a plain <button>
 * to work as the toggle. Therefore, don't refactor unless a real pain arises.
 */
export const ToggleWithLabel: FC<ToggleWithLabelProps> = ({
  icon,
  className,
  isDisabled,
  label,
  ariaLabel,
  testId,
}: ToggleWithLabelProps) => {
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
      <Text $typography="body1Emphasis">{label}</Text>
      <Icon name={icon} />
    </Button>
  );
};
