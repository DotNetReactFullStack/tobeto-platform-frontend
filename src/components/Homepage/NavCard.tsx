import React from "react";
import "./NavCard.css";

type Props = {};

const NavCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="nav-card-component">
        <div className="nav-card-element">
          <div className="nav-card-element-body">
            <span className="nav-card-element-title">Profilini oluştur</span>
          </div>
          <div className="nav-card-element-footer">
            <button type="button" className="nav-card-element-footer-button">
              Başla
            </button>
          </div>
        </div>

        <div className="nav-card-element">
          <div className="nav-card-element-body">
            <span className="nav-card-element-title">Kendini değerlendir</span>
          </div>
          <div className="nav-card-element-footer">
            <button type="button" className="nav-card-element-footer-button">
              Başla
            </button>
          </div>
        </div>

        <div className="nav-card-element">
          <div className="nav-card-element-body">
            <span className="nav-card-element-title">Öğrenmeye başla</span>
          </div>
          <div className="nav-card-element-footer">
            <button type="button" className="nav-card-element-footer-button">
              Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
