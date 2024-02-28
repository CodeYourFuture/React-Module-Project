import { useState } from "react";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;
