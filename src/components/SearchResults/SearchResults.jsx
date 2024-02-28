import React from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import ResultsTable from "@/components/ResultsTable/ResultsTable.jsx";
import "./SearchResults.scss";

const SearchResults = (props) => {
  const [nightData, setNightData] = useState([]);

  useEffect(() => {
    const calculateNights = () => {
      if (props.results) {
        const nightsArray = props.results.map(
          ({ checkInDate, checkOutDate }) => {
            const checkInDayjs = dayjs(checkInDate);
            const checkOutDayjs = dayjs(checkOutDate);
            return checkOutDayjs.diff(checkInDayjs, "day");
          }
        );
        setNightData(nightsArray);
      }
    };

    calculateNights();
  }, [props.results]);

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
          <th>Nights</th>
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
              nights,
            },
            index
          ) => {
            return (
              <ResultsTable
                key={id}
                id={id}
                title={title}
                firstName={firstName}
                surName={surname}
                email={email}
                roomId={roomId}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                nights={nightData[index]}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
