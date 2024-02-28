import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "../../data/fakeBookings.json";

describe("SearchResults Component", () => {
  it("renders a table element", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const searchResultsElement = screen.getByTestId("search-results-component");
    expect(searchResultsElement).toBeInTheDocument();
  });

  it("renders booking components for each booking", () => {
    render(<SearchResults bookings={FakeBookings} />);
    const bookingComponents = screen.getAllByTestId("booking-component");
    expect(bookingComponents.length).toBe(FakeBookings.length);
  });
});