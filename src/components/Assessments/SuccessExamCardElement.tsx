import React from "react";
import "./SuccessExamCardElement.css";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  redirectUrl: string;
};

const SuccessExamCardElement = ({ title, redirectUrl }: Props) => {
  return (
    <div className="success-exam-card-element d-flex">
      <div className="success-exam-card-element-left">
        <img
          className="success-exam-card-element-left-image"
          src={process.env.PUBLIC_URL + "/assets/images/platform-icon.png"}
          alt="Bootstrap"
        />
      </div>
      <div className="success-exam-card-element-middle">
        <div className="success-exam-card-element-title">{title}</div>
      </div>

      <div className="success-exam-card-element-right">
        <Link to={redirectUrl} className="success-exam-card-element-link">
          Başla
        </Link>
      </div>
    </div>
  );
};

export default SuccessExamCardElement;
