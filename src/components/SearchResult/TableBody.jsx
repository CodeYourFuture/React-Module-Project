// import FakeBookings from "@/data/fakeBookings.json";

function TableBody(props) {
  let {
    id,
    title,
    name,
    firstName,
    surName,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  } = props;
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surName}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
      </tr>
    </>
  );
}

export default TableBody;
