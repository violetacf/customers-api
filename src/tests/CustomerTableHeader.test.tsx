import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { CustomerTableHeader } from "$/ui/pages/customers/components/CustomerTableHeader";

vi.mock("$/ui/components/text/text", () => ({
  Text: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="customer-table-header-text">{children}</span>
  ),
}));

describe("CustomerTableHeader", () => {
  it("renders the CustomerTableHeader component", () => {
    render(<CustomerTableHeader />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Country")).toBeInTheDocument();

    const headers = screen.getAllByTestId("customer-table-header-text");
    expect(headers).toHaveLength(3);
  });
});
