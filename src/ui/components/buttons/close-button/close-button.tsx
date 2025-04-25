import { FC, HTMLProps } from "react";
import { Container } from "$/ui/components/buttons/close-button/close-button.styles";
import { Icon } from "$/ui/components/icon/icon";

export const modalCloseButtonTestId = "MODAL_CLOSE_BUTTON";

export type CloseButtonProps = Pick<HTMLProps<HTMLButtonElement>, "onClick"> & {
  className?: string;
  isDisabled?: boolean;
  isTransparent?: boolean;
};

export const CloseButton: FC<CloseButtonProps> = ({
  className,
  isDisabled,
  onClick,
  isTransparent = false,
}: CloseButtonProps) => {
  return (
    <Container
      aria-label={"close"}
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      $isTransparent={isTransparent}
      data-testid={modalCloseButtonTestId}
    >
      <Icon name="cross" />
    </Container>
  );
};
