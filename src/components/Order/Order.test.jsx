import { describe, expect, it } from "vitest";
import Order from "./Order";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Order", () => {
  it("is still rendered on the page", () => {
    render(<Order />);

    const ordersText = screen.getByText("Orders: 0");

    expect(ordersText).toBeInTheDocument();
  });

  it("button still increases the number of orders", () => {
    render(<Order />);

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    const updatedPizzaText = screen.getByText("Orders: 1");

    expect(updatedPizzaText).toBeInTheDocument();
  });
});
