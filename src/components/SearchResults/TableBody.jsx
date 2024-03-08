import React from "react";

const TableBody = ({ id, title, firstName, surName, email, nights }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surName}</td>
      <td>{nights}</td>
      <td>{email}</td>
    </tr>
  );
};

export default TableBody;
