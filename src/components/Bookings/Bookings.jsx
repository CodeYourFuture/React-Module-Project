import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
// import SearchResults from "@/componentsSearchResults.js";
import FakeBookings from "@/data/fakeBookings.json";
import { useState } from "react";


const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult results={bookings} />
    </main>
  );
};
export default Bookings;

