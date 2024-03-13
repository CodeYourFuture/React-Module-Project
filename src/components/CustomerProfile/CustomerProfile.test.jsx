import { describe, expect, it } from "vitest";
import Bookings from "../Bookings/Bookings";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Customer Profile card", () => {
  it("shouldn't be displayed at the beginning", () => {
    render(<Bookings />);
    const profileCard = screen.queryByTestId("profileCard");
    expect(profileCard).toBeNull();
  });
  it("should be displayed after clicking showProfile button", () => {
    render(<Bookings />);
    const showProfileButton = screen.getByTestId("showProfileButton1");
    fireEvent.click(showProfileButton);
    const profileCard = screen.getByTestId("profileId");
    expect(profileCard.innerHTML).toBe("Customer Id: 1");
  });
  it("should be displayed after clicking second showProfile button", () => {
    render(<Bookings />);
    const showProfileButton = screen.getByTestId("showProfileButton2");
    fireEvent.click(showProfileButton);
    const profileCard = screen.getByTestId("profileId");
    expect(profileCard.innerHTML).toBe("Customer Id: 2");
  });
});
