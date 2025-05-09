import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { CustomerCard } from "$/ui/pages/customers/components/CustomerCard";

vi.mock(
  "$/ui/components/buttons/button/secondary-button/secondary-button",
  () => ({
    SecondaryButton: ({ children }: { children: React.ReactNode }) => (
      <button data-testid="customer-view-button">{children}</button>
    ),
  })
);
describe("CustomerCard", () => {
  it("renders the CustomerCard component", () => {
    render(
      <CustomerCard
        customer={{
          id: 1,
          name: "TechCorp Solutions",
          email: "contact@techcorp.com",
          country: "United States",
          address: {
            street: "Silicon Valley Boulevard",
            number: "1500",
            postalCode: "94025",
            city: "Menlo Park",
            country: "United States",
          },
        }}
      />
    );

    expect(screen.getByText("TechCorp Solutions")).toBeInTheDocument();

    expect(screen.getByText("contact@techcorp.com")).toBeInTheDocument();

    expect(screen.getByText("United States")).toBeInTheDocument();

    expect(screen.getByTestId("customer-view-button")).toBeInTheDocument();
  });
});
