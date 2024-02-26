const Booking = (props) => {
  const { bookings } = props;
  return (
    <>
      {bookings.map((booking) => {
        {
          const {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate,
          } = booking;

          return (
            <tr key={id}>
              <td>
                {title} {firstName} {surname}
              </td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
            </tr>
          );
        }
      })}
    </>
  );
};

export default Booking;
