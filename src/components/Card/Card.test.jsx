import Card from "./Card.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";


describe("Card", () => {
  it("renders Card component with provided props", () => {
    const testData = {
      title: "Test Title",
      url: "https://example.com",
      image: "https://example.com/image.jpg",
    };

    render(<Card {...testData} />);

    const titleElement = screen.getByText(testData.title);
    const imageElement = screen.getByAltText(testData.title);
    const linkElement = screen.getByRole("link", { name: "Visit website" });

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", testData.url);
  });
});
