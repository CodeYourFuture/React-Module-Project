import "./SearchResult.scss";
import FakeBookings from "@/data/fakeBookings.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
const Bookings = FakeBookings;
function SearchResult() {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {Bookings.map((book) => (
          <>
            <TableBody
              key={book.id}
              id={book.id}
              title={book.title}
              firstName={book.firstName}
              surName={book.surname}
              email={book.email}
              roomId={book.roomId}
              checkInDate={book.checkInDate}
              checkOutDate={book.checkOutDate}
            />
          </>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResult;
console.log(SearchResult());
