import type { ComponentType } from "react";

export default function withPadding(
  padding = 16
): (Component: ComponentType) => JSX.Element {
  return function ComponentWithPadding(Component) {
    return (
      <div style={{ padding: `${padding}px` }}>
        <Component />
      </div>
    );
  };
}
