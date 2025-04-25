import { CustomersHome } from "$/routes/CustomersHome";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App Component", () => {
  it("should render the app title in h1", () => {
    render(<CustomersHome />);
    const heading = screen.getByTestId("customersPageHeading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Customers$/);
    expect(heading.tagName).toBe("H1");
  });
});
