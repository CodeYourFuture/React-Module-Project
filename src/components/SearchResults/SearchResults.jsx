// SearchResults.jsx
import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "../CustomerProfile/CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  function handleShowProfile(e) {
    setSelectedProfile(Number(e.target.value));
  }
  return (
    <>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <TableBody key={booking.id} booking={booking} handleShowProfile={handleShowProfile} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedProfile} bookings={bookings} />
    </>
  );
};

export default SearchResults;
