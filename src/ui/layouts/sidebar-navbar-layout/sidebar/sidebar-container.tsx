import { FC, ReactNode } from "react";

import { SidebarAside } from "./sidebar-container.styles";

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const SidebarContainer: FC<SidebarProps> = ({ className, children }) => {
  return <SidebarAside className={className}>{children}</SidebarAside>;
};
