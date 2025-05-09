import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { PaginationControls } from "$/ui/pages/customers/components/PaginationControls";

vi.mock(
  "$/ui/components/buttons/button/secondary-button/secondary-button",
  () => ({
    SecondaryButton: ({
      children,
      onClick,
    }: {
      children: React.ReactNode;
      onClick: () => void;
    }) => (
      <button onClick={onClick} data-testid="secondary-button">
        {children}
      </button>
    ),
  })
);

vi.mock("$/ui/components/dropdown/dropdown", () => ({
  Dropdown: ({
    label,
    options,
  }: {
    label: string;
    options: Array<{ label: string; onClick: () => void }>;
  }) => (
    <div>
      <span>{label}</span>
      {options.map((option, index) => (
        <button key={index} onClick={option.onClick}>
          {option.label}
        </button>
      ))}
    </div>
  ),
}));

describe("PaginationControls", () => {
  it("renders the PaginationControls component", () => {
    const setPerPage = vi.fn();
    const setCurrentPage = vi.fn();

    render(
      <PaginationControls
        perPage={10}
        currentPage={2}
        isLastPage={false}
        setPerPage={setPerPage}
        setCurrentPage={setCurrentPage}
      />
    );

    expect(screen.getByText("Items per page: 10")).toBeInTheDocument();

    expect(screen.getByText("2")).toBeInTheDocument();

    expect(screen.getAllByTestId("secondary-button")).toHaveLength(2);

    const prevButton = screen.getAllByTestId("secondary-button")[0];
    fireEvent.click(prevButton);
    expect(setCurrentPage).toHaveBeenCalledWith(1);

    const nextButton = screen.getAllByTestId("secondary-button")[1];
    fireEvent.click(nextButton);
    expect(setCurrentPage).toHaveBeenCalledWith(3);

    const optionButton = screen.getByText("5");
    fireEvent.click(optionButton);
    expect(setPerPage).toHaveBeenCalledWith(5);
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });
});
