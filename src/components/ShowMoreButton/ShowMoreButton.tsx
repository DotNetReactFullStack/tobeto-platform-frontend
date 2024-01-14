import React from "react";
import "./ShowMoreButton.css";
import { Link } from "react-router-dom";

type Props = {
  redirectUrl: string;
};

const ShowMoreButton = ({ redirectUrl }: Props) => {
  return (
    <Link className="show-more-button-link" to={redirectUrl}>
      <div className="show-more-block">
        <div className="show-more-icon">
          <i className="bi bi-arrow-right-circle"></i>
        </div>
        <div className="show-more-text">Daha Fazla Göster</div>
      </div>
    </Link>
  );
};

export default ShowMoreButton;
