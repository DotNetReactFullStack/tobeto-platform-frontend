import React from "react";
import "./GoBackButton.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const GoBackButton = (props: Props) => {
  const navigate = useNavigate();

  const handleGeriButtonClick = () => {
    // Bir önceki sayfaya git
    navigate(-1);
  };

  return (
    <div className="go-back-button-container">
      <button className="go-back-button" onClick={handleGeriButtonClick}>
        <i className="bi bi-chevron-left go-back-button-icon"></i>
      </button>
    </div>
  );
};

export default GoBackButton;
