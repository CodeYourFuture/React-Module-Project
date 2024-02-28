import Restaurant from "./Restaurant.jsx";
import { describe, it, expect } from "vitest";
import { getByDisplayValue, render, screen } from "@testing-library/react";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("checks Orders initial value is 0", () => {
    const { getByTestId } = render(<Restaurant />);
  const ordersDisplay = getByTestId("orders");
  expect(ordersDisplay.textContent).toBe("Pizzas: 0 Add");
  });
  
});
