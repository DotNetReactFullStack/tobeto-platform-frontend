import React from "react";
import "./NavCardElement.css";

type Props = {};

const NavCardElement = (props: Props) => {
  return (
    <div className="nav-card-element">
      <div></div>
      <div className="nav-card-element-body">
        <div className="nav-card-element-title">Profilini Oluştur</div>
      </div>
      <div className="nav-card-element-footer">
        <a href="#" className="nav-card-element-footer-link">
          Başla
        </a>
      </div>
    </div>
  );
};

export default NavCardElement;
