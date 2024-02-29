import React from "react";
import "./Footer.scss";

const Footer = ({ addresses }) => (
  <footer className="footer">
    <ul className="footer__list">
      {addresses.map((address, index) => (
        <li key={index}>{address}</li>
      ))}
    </ul>
  </footer>
);

export default Footer;
