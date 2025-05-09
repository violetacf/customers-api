import { FC, useCallback } from "react";
import { useDropdownMenu } from "react-overlays";
import { MenuContainer } from "./menu.styles";
import { IconName } from "$/ui/components/icon/icon";
import { Option } from "./option/option";
import { TextTypography } from "../../text/text";

export interface DropdownOption {
  label: string;
  onClick: () => void;
  icon?: IconName;
  name?: string;
}

export type MenuProps =
  | {
      children?: never;
      options: DropdownOption[];
      typography?: TextTypography;
    }
  | {
      children?: ({ onClose }: { onClose?: () => void }) => React.ReactNode;
      options?: never;
      typography?: TextTypography;
    };

export const Menu: FC<MenuProps> = ({
  options,
  children,
  typography,
}: MenuProps) => {
  const [props, metadata] = useDropdownMenu({
    flip: true,
    offset: [0, 8],
  });

  const { toggle } = metadata;

  const onClose = useCallback(() => {
    if (toggle) {
      toggle(false);
    }
  }, [toggle]);

  return (
    <MenuContainer {...props} role="menu">
      {children?.({ onClose }) ||
        options?.map((option, index) => (
          <Option
            option={option}
            onClose={onClose}
            isLast={index === options.length - 1}
            typography={typography}
            key={`${option}_${index}`}
          />
        ))}
    </MenuContainer>
  );
};
