import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader.jsx";


test('renders AppHeader component', () => {
  render(<AppHeader />);
  
  // Check if the heading and image are present in the rendered component
  expect(screen.getByText('CYF Hotel')).toBeInTheDocument();
  expect(screen.getByAltText('main image')).toBeInTheDocument();
});
