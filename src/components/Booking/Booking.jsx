import dayjs from "dayjs";

import "./Booking.scss";

const Booking = (props) => {
  // prettier-ignore
  const { title, firstName, surname, email, roomId, checkInDate, checkOutDate } = props.booking;
  const stayNights = dayjs(checkOutDate).diff(dayjs(checkInDate), "d");

  return (
    <tr data-testid="booking-component">
      <td className="customer-name">
        {title} {firstName} {surname}
      </td>
      <td className="customer-email">{email}</td>
      <td className="customer-room">{roomId}</td>
      <td className="customer-checkin">{checkInDate}</td>
      <td className="customer-checkout">{checkOutDate}</td>
      <td className="customer-stay">
        {stayNights} {stayNights > 1 ? "nights" : "night"}
      </td>
    </tr>
  );
};

export default Booking;
