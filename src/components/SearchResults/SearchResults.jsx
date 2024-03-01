import React from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import ResultsTable from "@/components/ResultsTable/ResultsTable.jsx";
import CustomerProfile from "@/components/CustomerProfile/CustomerProfile.jsx";
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

   const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const showProfile = (customerId) => {
    setSelectedCustomerId(customerId);
  };


  if (!props.results || !Array.isArray(props.results)) {
    return <table>No results found</table>;
  }

  return (
  <div>
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
            <th>Show Profile</th>
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
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{nightData[index]}</td>
                <td>
                  <button onClick={() => showProfile(id)}>Show Profile</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <CustomerProfile selectedCustomerId={selectedCustomerId} />
    </div>
  );
};

export default SearchResults;
