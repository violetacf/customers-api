import { useCallback } from "react";
import { useNavigate } from "react-router";
import { LocationState } from "$/ui/components/global-types";

export function useNavigateToURL(): (
  to?: string | URL,
  target?: string,
  state?: LocationState
) => void {
  const navigate = useNavigate();

  const navigateToURL = useCallback(
    (to?: string | URL, target?: string, state?: LocationState) => {
      if (!to) {
        return;
      }
      if (target && target !== "_self") {
        window.open(to, target);
        return;
      }

      const currentLocation = window.location.origin;
      const destination = new URL(to, currentLocation);

      if (destination.origin !== currentLocation) {
        window.open(to, target ?? "_self");
      } else if (state) {
        navigate(to, { state });
      } else {
        navigate(to);
      }
    },
    [navigate]
  );

  return navigateToURL;
}
