import dayjs from "dayjs";

function SearchResults({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          const startDate = dayjs(item.checkInDate);
          const endDate = dayjs(item.checkOutDate);
          const daysDifference = endDate.diff(startDate, "day");
          return (
            <tr
              style={{
                textAlign: "center",
              }}
              key={index}
            >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{daysDifference}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
