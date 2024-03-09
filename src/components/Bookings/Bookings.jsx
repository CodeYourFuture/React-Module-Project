import React, { useState } from "react";
import Search from "../Search/Search";
import FakeBookings from "../../data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";

const Bookings = () => {
  
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />

      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
