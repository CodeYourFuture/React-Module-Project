// SearchResults.jsx
import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import dayjs from "dayjs";

const SearchResults = ({ results }) => {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {results.map((booking) => (
          <TableBody
            key={booking.id}
            id={booking.id}
            title={booking.title}
            firstName={booking.firstName}
            surName={booking.surname}
            nights={dayjs(booking.checkOutDate)
              .diff(dayjs(booking.checkInDate), "days")
              .toString()
              .padStart(2, "0")}
            email={booking.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
