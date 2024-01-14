import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <Link className="footer-logo-link" to="/">
        <img
          className="footer-logo"
          src={process.env.PUBLIC_URL + "/assets/images/tobeto-footer-logo.png"}
        />
      </Link>
      <a className="footer-contact-us-link" href="#">
        <span>Bize Ulaşın</span>
      </a>
    </div>
  );
};

export default Footer;
