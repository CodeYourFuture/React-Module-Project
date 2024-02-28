// import FakeBookings from "@/data/fakeBookings.json";

function TableBody(props) {
  let { id, title, name, firstName, surName, email } = props;
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surName}</td>
        <td>{email}</td>
      </tr>
    </>
  );
}

export default TableBody;
