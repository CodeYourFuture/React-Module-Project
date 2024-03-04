import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Restaurant from "./Restaurant.jsx";

describe("Restaurant", () => {
  it("renders an Orders heading", () => {
    render(<Restaurant />);
    const titleElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("increments the number of ordered pizzas when 'Add' button is clicked", () => {
    render(<Restaurant />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    const pizzasElement = screen.getByText("Pizzas: 1");
    expect(pizzasElement).toBeInTheDocument();
  });
});
