import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults.jsx";

describe("SearchResults Component", () => {
  it("renders a main element", () => {
    render(<SearchResults />);
    const searchResultsElement = screen.getByTestId("search-results-element");
    expect(searchResultsElement).toBeInTheDocument();
  });
});