import { useState } from "react";
import "./ResultsTable.scss";
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
          <td>{props.nights}</td> 
        </tr>
      </>
    );

  const [selectedRows, setSelectedRows] = useState([]);
  const handleRowClick = (rowId) => {
    const isSelected = selectedRows.includes(rowId);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }

  };

  return (
    <>
      <tr
        role="row"
        onClick={() => handleRowClick()}
        className={selectedRows.includes() ? "selected-row" : ""}
      >
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
