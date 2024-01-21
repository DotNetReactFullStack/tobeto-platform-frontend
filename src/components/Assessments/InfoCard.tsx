import React from "react";
import "./InfoCard.css";

type Props = {};

const InfoCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="info-card">
        <div className="info-card-header">
          <h3 className="text-center">
            <span className="info-card-text">Yazılımda Başarı Testi</span>
          </h3>
        </div>
        <div className="info-card-body">
          <h4 className="info-card-body-title">
            Çoktan seçmeli sorular ile teknik bilgini
            <span className="info-card-text"> test et. </span>
          </h4>
        </div>
        <div className="info-card-footer">
          <label className="text-white">{">>>"}</label>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
