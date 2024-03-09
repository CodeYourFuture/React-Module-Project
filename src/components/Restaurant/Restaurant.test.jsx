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
    const text1 = screen.getByText("Pizzas: 0");
    const text2 = screen.getByText("Salads: 0");
    const text3 = screen.getByText("Chocolate cake: 0");

    expect(text1, text2, text3).toBeInTheDocument();
  });

  it("increase number of pizzas when 'Add' button is clicked", () => {
    render(<Restaurant />);

    const addButtons = screen.getAllByTestId("addButton");
    addButtons.map((addButton) => fireEvent.click(addButton));

    const updatedText1 = screen.getByText("Pizzas: 1");
    const updatedText2 = screen.getByText("Salads: 1");
    const updatedText3 = screen.getByText("Chocolate cake: 1");

    expect(updatedText1, updatedText2, updatedText3).toBeInTheDocument();
  });
});
