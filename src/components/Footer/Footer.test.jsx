import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the addresses", () => {
    const addresses = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789",
    ];
    render(<Footer addresses={addresses} />);
    const addressElements = screen.getAllByRole("listitem");
    expect(addressElements.length).toBe(3);
  });
});
