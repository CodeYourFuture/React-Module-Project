import Restaurant from "./Restaurant.jsx";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Restaurant Component", () => {
  it("displays initial number of pizza 0", () => {
    render(<Restaurant />);
    const pizzaText = screen.getByText("Orders: 0");
    expect(pizzaText).toBeInTheDocument();
  });

  it("increase number of pizzas when 'Add' button is clicked", () => {
    render(<Restaurant />);

    const addButton = screen.getByText("Add");

    fireEvent.click(addButton);

    const updatedPizzaText = screen.getByText("Orders: 1");

    expect(updatedPizzaText).toBeInTheDocument();
  });
});
