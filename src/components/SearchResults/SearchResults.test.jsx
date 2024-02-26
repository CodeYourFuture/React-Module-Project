import { render, screen } from '@testing-library/react'
import { describe, it, expect } from "vitest";
import SearchResults from '@/components/SearchResults/SearchResults.jsx';

describe("Search Results", () => {
    it("should have a test, please write one", () => {
      return true;
    });
    
     test("renders a search Results Table", () => {
        render(<SearchResults/>);
        const searchResults = screen.getByRole("table");
        expect(searchResults).toBeInTheDocument();
      });
  });
  