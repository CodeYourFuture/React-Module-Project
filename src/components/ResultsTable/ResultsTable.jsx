const ResultsTable = (props) => {
    return (
      <>
        <tr>
          <td>{props.id}</td>
          <td>{props.title}</td>
          <td>{props.firstName}</td>
          <td>{props.surName}</td>
          <td>{props.email}</td>
          <td>{props.roomId}</td>
          <td>{props.checkInDate}</td>
          <td>{props.checkOutDate}</td>
        </tr>
      </>
    );
  };
  
  export default ResultsTable;
  