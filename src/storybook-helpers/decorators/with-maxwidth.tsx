import type { ComponentType, ReactElement } from "react";

export default function withMaxWidth(
  maxWidth = 400
): (Component: ComponentType) => ReactElement {
  return function ComponentWithMaxWidth(Component) {
    return (
      <div style={{ maxWidth: `${maxWidth}px` }}>
        <Component />
      </div>
    );
  };
}
