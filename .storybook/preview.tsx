import type { Preview } from "@storybook/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalStyleCheckout } from "../src/ui/styles/global-style/global-style-checkout";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyleCheckout />
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Story />} />
            </Routes>
          </BrowserRouter>
        </>
      );
    },
  ],
};

export default preview;
