import React from "react";
import "./Footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <a className="footer-logo-link" href="#">
        <img
          className="footer-logo"
          src={process.env.PUBLIC_URL + "/images/tobeto-footer-logo.png"}
        />
      </a>
      <a className="footer-contact-us-link" href="#">
        <span>
          Bize Ulaşın
        </span>
      </a>
    </div>
  );
};

export default Footer;
