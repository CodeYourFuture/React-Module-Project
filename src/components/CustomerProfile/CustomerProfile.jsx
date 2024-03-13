export default function CustomerProfile({ id, bookings }) {
  const booking = bookings.find((booking) => booking.id === id);

  if (booking)
    return (
      <div data-testid="profileCard" className="card">
        <h3 data-testid="profileId">Customer Id: {booking.id}</h3>
        <p>Name: {booking.firstName}</p>
        <p>Surname: {booking.surname}</p>
      </div>
    );
}
