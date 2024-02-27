import Footer from "./Footer.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("Renders Contact list items", () => {
    render(<Footer />);
    const contactList = screen.getByTestId("footerUlContactInfo");
    expect(contactList).toBeInTheDocument();
  });
});
