import React from "react";
import "./Footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-component">
      <a className="footer-logo-link" href="#">
        <img
          className="footer-logo"
          src={process.env.PUBLIC_URL + "/tobeto-footer-logo.png"}
        />
      </a>
      <a className="footer-contact-us-link" href="#">
        <button type="button" className="footer-contact-us-button">
          Bize Ulaşın
        </button>
      </a>
    </div>
  );
};

export default Footer;
