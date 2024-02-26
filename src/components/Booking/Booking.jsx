const Booking = (props) => {
  const {
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  } = props.booking;
  return (
    <tr data-testid="booking-component">
      <td>
        {title} {firstName} {surname}
      </td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
    </tr>
  );
};

export default Booking;
