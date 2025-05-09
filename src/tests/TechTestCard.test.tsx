import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechTestCard } from "$/ui/pages/tech-test-notes/components/TechTestCard";

describe("TechTestCard", () => {
  it("renders the title and children", () => {
    render(
      <TechTestCard title="Test Title">This is the test content.</TechTestCard>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("This is the test content.")).toBeInTheDocument();
  });
});
