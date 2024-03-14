// SearchResults.jsx
import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "../CustomerProfile/CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [selectedProfileId, setSelectedProfile] = useState(null);

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
      {selectedProfileId ? <CustomerProfile id={selectedProfileId} /> : null}
    </>
  );
};

export default SearchResults;
