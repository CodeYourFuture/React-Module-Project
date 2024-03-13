import React from "react";
import dayjs from "dayjs";

const TableBody = ({ booking, handleShowProfile }) => {
  const testid = "showProfileButton" + booking.id;
  return (
    <tr>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>
        {dayjs(booking.checkOutDate)
          .diff(dayjs(booking.checkInDate), "days")
          .toString()
          .padStart(2, "0")}
      </td>
      <td>{booking.email}</td>
      <td>
        <button data-testid={testid} value={booking.id} onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
