import React, { useState } from "react";
import Search from "../Search/Search";
import FakeBookings from "../../data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import AddBookingForm from "../AddBookingForm/AddBookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />

      <SearchResults results={bookings} />
      <AddBookingForm bookings={bookings} setBookings={setBookings} />
    </main>
  );
};

export default Bookings;
