import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
// import SearchResults from "@/componentsSearchResults.js";
// import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult />
    </main>
  );
};

export default Bookings;
