import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "$/ui/pages/customers/components/Divider";

describe("Divider", () => {
  it("renders the Divider component", () => {
    render(<Divider />);

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });
});
