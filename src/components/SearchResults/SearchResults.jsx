import Booking from "../Booking/Booking";
import "./SearchResults.scss"

const SearchResults = (props) => {
  const bookings = props.bookings;
  return (
    <table data-testid="search-results-component">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
        </tr>
      </thead>
      <tbody>
        <Booking bookings={bookings} />
      </tbody>
    </table>
  );
};

export default SearchResults;
