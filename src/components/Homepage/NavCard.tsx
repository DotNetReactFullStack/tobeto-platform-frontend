import React from "react";
import "./NavCard.css";
import NavCardElement from "./NavCardElement";

type Props = {};

const NavCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="nav-card-component">
        <NavCardElement />
        <NavCardElement />
        <NavCardElement />
      </div>
    </div>
  );
};

export default NavCard;
