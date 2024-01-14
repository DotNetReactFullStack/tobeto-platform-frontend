import React from "react";
import "./Banner.css";

type Props = {
  bannerTitle: string;
};

const Banner = ({ bannerTitle }: Props) => {
  return (
    <div className="container-fluid banner-compenent">
      <div className="banner-element">
        <div className="banner-title">
          <span className="banner-text">
            {bannerTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
