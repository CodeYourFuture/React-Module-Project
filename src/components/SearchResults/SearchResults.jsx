import React from "react";
import ResultsTable from "@/components/ResultsTable/ResultsTable.jsx";

const SearchResults = (props) => {
  if (!props.results || !Array.isArray(props.results)) {
    return <table>No results found</table>;
  }

  return (
    <table role="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Sur Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          (
            {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate,
            },
            index
          ) => (
            <ResultsTable
              key={index}
              id={id}
              title={title}
              firstName={firstName}
              surName={surname}
              email={email}
              roomId={roomId}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
