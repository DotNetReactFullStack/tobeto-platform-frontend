import React from "react";
import "./Banner.css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="container-fluid banner-compenent">
      <div className="banner-element">
        <div className="banner-title">
          <span className="banner-text">Duyurularım</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
