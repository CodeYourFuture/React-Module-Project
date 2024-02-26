import { render, screen } from '@testing-library/react'
import { describe, it, expect } from "vitest";
import data from "@/data/fakeBookings.json";
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

      it('should render a table with column for each booking attribute', () => {
        const { getByTestId, getByText } = render(<SearchResults results={data}/>);
    
        expect(getByText('ID')).toBeInTheDocument();
        expect(getByText('Title')).toBeInTheDocument();
        expect(getByText('First Name')).toBeInTheDocument();
        expect(getByText('Sur Name')).toBeInTheDocument();
        expect(getByText('Email')).toBeInTheDocument();
        expect(getByText('Room ID')).toBeInTheDocument();
        expect(getByText('Check In Date')).toBeInTheDocument();
        expect(getByText('Check Out Date')).toBeInTheDocument();
      });
  });
  