import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import data from "@/data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [filtered, setFiltered] = useState(data);

  const search = (searchVal) => {
    setFiltered(
      data.filter((item) => item.firstName.toLowerCase().includes(searchVal))
    );
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults results={filtered} />
    </main>
  );
};

export default Bookings;
