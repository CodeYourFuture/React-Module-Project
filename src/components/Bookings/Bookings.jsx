import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import FakeBookings from "@/data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult results={bookings} />
    </main>
  );
};
export default Bookings;
