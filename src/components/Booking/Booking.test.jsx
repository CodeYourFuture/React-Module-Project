import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Booking from "./Booking.jsx";
import FakeBookings from "../../data/fakeBookings.json";

console.log(FakeBookings);

describe("Booking Component", () => {
  it("renders a booking component", () => {
    const booking = FakeBookings[0];
    render(<Booking booking={booking} />);
    const bookingComponent = screen.getByTestId("booking-component");
    expect(bookingComponent).toBeInTheDocument();
  });
});
