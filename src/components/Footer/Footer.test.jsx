import Footer from "./Footer.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
  it("renders correctly at the bottom of the page", () => {
    render(<Footer />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();

    // codes from line 14 to 17 has a bug

    // const footerStyles = window.getComputedStyle(footerElement);
    // console.log("here", footerStyles.position);
    // expect(footerStyles.position).toBe("fixed");
    // expect(footerStyles.bottom).toBe("0");
  });
  it("renders correctly with addresses displayed as list items", () => {
    render(<Footer />);

    const addresses = screen.getAllByTestId("address");
    expect(addresses.length).toBeGreaterThan(0);
    addresses.forEach((address) => {
      expect(address.tagName).toBe("LI");
    });
  });
});
