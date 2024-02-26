import React from "react";
import "./Footer.scss"

export default function Footer(props) {
  return (
    <>
      <footer>
        <ul>
          {props.details.map((detail, id) => (
            <li key={id}>{detail}</li>
          ))}
        </ul>
      </footer>
    </>
  );
}
