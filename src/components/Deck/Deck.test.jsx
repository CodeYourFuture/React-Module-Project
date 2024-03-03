import Deck from "./Deck.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import cardsData from "@/data/fakeCards.json";

describe("Deck", () => {
  it("renders correct card contents", () => {
    render(<Deck />);

    const cards = screen.getAllByTestId("card");

    cardsData.forEach((cardData, index) => {
      const cardElement = cards[index];
      expect(cardElement).toHaveTextContent(cardData.title);
      expect(cardElement.querySelector("a")).toHaveAttribute("href", cardData.url);
      expect(cardElement.querySelector("img")).toHaveAttribute("src", cardData.image);
    });
  });
});
