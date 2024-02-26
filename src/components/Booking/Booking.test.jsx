import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Booking from "./Booking.jsx";

describe("Booking Component", () => {
  it("renders a booking component", () => {
    render(<Booking />);
    const bookingComponent = screen.getByTestId("booking-component");
    expect(bookingComponent).toBeInTheDocument();
  });
});
