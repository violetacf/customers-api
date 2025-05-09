import { FC, useCallback } from "react";
import { DropdownOption } from "$/ui/components/dropdown/menu/menu";
import { Container, Text } from "./option.styles";
import { Icon } from "$/ui/components/icon/icon";
import { TextTypography } from "$/ui/components/text/text";

export interface OptionProps {
  option: DropdownOption;
  onClose: () => void;
  isLast: boolean;
  typography?: TextTypography;
}

export const Option: FC<OptionProps> = ({
  option: { label, onClick, icon },
  onClose,
  isLast,
  typography,
}: OptionProps) => {
  const onOptionClick = useCallback(() => {
    onClose();
    onClick();
  }, [onClick, onClose]);
  return (
    <Container type="button" onClick={onOptionClick} $isLast={isLast}>
      {icon ? <Icon name={icon} /> : undefined}
      <Text typography={typography ?? "body1Emphasis"}>{label}</Text>
    </Container>
  );
};
