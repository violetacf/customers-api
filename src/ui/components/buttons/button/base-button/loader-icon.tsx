import { FC } from "react";
import {
  LoaderContainer,
  LoaderIconAnimated,
} from "$/ui/components/buttons/button/base-button/loader-icon.styles";

export const LoaderIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <LoaderContainer>
      <LoaderIconAnimated className={className} name="spinnerGap" />
    </LoaderContainer>
  );
};
