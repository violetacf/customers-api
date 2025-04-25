import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyleCheckout } from "$/ui/styles/global-style/global-style-checkout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyleCheckout />
    <App />
  </StrictMode>
);
