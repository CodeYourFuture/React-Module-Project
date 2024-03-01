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
    render(<Restaurant />);

    const orderElements = document.querySelectorAll('[data-testid="orders"]');
    const pizzaOrders = Array.from(orderElements).filter(element => element.textContent.trim() === 'Pizza');
    
    pizzaOrders.forEach(order => {
      expect(order.textContent).toContain('0');
    });
  });
 
});
