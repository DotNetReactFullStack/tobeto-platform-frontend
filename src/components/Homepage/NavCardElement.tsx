import React from "react";
import "./NavCardElement.css";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  redirectUrl: string;
};

const NavCardElement = ({ title, redirectUrl }: Props) => {
  return (
    <div className="nav-card-element">
      <div></div>
      <div className="nav-card-element-body">
        <div className="nav-card-element-title">{title}</div>
      </div>
      <div className="nav-card-element-footer">
        <Link to={redirectUrl} className="nav-card-element-footer-link">
          Başla
        </Link>
      </div>
    </div>
  );
};

export default NavCardElement;
