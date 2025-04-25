import { FC, useState } from "react";
import { Dropdown as DefaultDropdown } from "react-overlays";
import { IconName } from "$/ui/components/icon/icon";
import { DropdownOption, Menu } from "./menu/menu";
import { Toggle } from "./toggle/toggle";
import { ToggleWithLabel } from "./toggle-with-label/toggle-with-label";

type BaseDropdownProps = {
  icon: IconName;
  className?: string;
  isDisabled?: boolean;
  ariaLabel?: string;
  isOpenByDefault?: boolean;
  testId?: string;
  label?: string;
};

export type DropdownProps =
  | (BaseDropdownProps & {
      children?: never;
      options?: DropdownOption[];
    })
  | (BaseDropdownProps & {
      children?: ({ onClose }: { onClose?: () => void }) => React.ReactNode;
      options?: never;
    });

export const Dropdown: FC<DropdownProps> = ({
  icon,
  options,
  className,
  isDisabled,
  ariaLabel,
  isOpenByDefault,
  testId,
  label,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault || false);

  return (
    <DefaultDropdown show={isOpen} onToggle={(): void => setIsOpen(!isOpen)}>
      {label ? (
        <ToggleWithLabel
          icon={icon}
          className={className}
          isDisabled={isDisabled}
          label={label}
          ariaLabel={ariaLabel}
          testId={testId}
        />
      ) : (
        <Toggle
          icon={icon}
          className={className}
          isDisabled={isDisabled}
          ariaLabel={ariaLabel}
          testId={testId}
        />
      )}
      {options ? <Menu options={options} /> : <Menu>{children}</Menu>}
    </DefaultDropdown>
  );
};
