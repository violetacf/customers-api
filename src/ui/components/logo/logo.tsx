import { FC, useMemo } from "react";
import { LogoSVG, LogoImage } from "./logo.styles";
import LogoOnWhite from "$/ui/assets/svgs/brand/topi-logo-on-white.svg?react";
import LogoOnBlack from "$/ui/assets/svgs/brand/topi-logo-on-black.svg?react";
import LogoOnBlue from "$/ui/assets/svgs/brand/topi-logo-on-blue.svg?react";
import LogoOnPink from "$/ui/assets/svgs/brand/topi-logo-on-pink.svg?react";
import { isTopiBranding } from "$/ui/styles/tokens/utils";

export interface LogoProps {
  className?: string;
  variant?: "on-white" | "on-black" | "on-blue" | "on-pink";
  size?: "s" | "m";
  logoURL?: string;
}

export const Logo: FC<LogoProps> = ({
  className,
  variant = "on-white",
  size = "m",
  logoURL,
}) => {
  const logoVariant = useMemo(() => {
    switch (variant) {
      case "on-white":
        return LogoOnWhite;
      case "on-black":
        return LogoOnBlack;
      case "on-blue":
        return LogoOnBlue;
      case "on-pink":
        return LogoOnPink;
      default:
        return LogoOnWhite;
    }
  }, [variant]);

  if (logoURL) {
    return (
      <LogoImage
        className={className}
        $isTopiLogo={isTopiBranding(logoURL)}
        src={logoURL}
        $size={size}
        alt="Topi logo"
      />
    );
  }

  return <LogoSVG className={className} $size={size} as={logoVariant} />;
};
