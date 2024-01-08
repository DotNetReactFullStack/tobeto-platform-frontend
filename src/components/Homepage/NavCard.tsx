import React from "react";
import "./NavCard.css";

type Props = {};

const NavCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="nav-card-component">

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

        <div className="nav-card-element">
          <div></div>
          <div className="nav-card-element-body">
            <span className="nav-card-element-title">Kendini Değerlendir</span>
          </div>
          <div className="nav-card-element-footer">
            <a href="#" className="nav-card-element-footer-link">
              Başla
            </a>
          </div>
        </div>

        <div className="nav-card-element">
          <div></div>
          <div className="nav-card-element-body">
            <span className="nav-card-element-title">Öğrenmeye Başla</span>
          </div>
          <div className="nav-card-element-footer">
            <a href="#" className="nav-card-element-footer-link">
              Başla
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
