import React from "react";
import "./GoBackButton.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const GoBackButton = (props: Props) => {
  const navigate = useNavigate();

  const handleGoBackButtonClick = () => {
    navigate(-1); // go to previous page
  };

  return (
    <div className="go-back-button-container">
      <button className="go-back-button" onClick={handleGoBackButtonClick}>
        <i className="bi bi-chevron-left go-back-button-icon"></i>
      </button>
    </div>
  );
};

export default GoBackButton;
