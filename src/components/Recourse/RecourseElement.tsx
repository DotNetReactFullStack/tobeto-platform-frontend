import React from "react";
import "./RecourseElement.css";

type Props = {
  name: string;
  type: string;
  step: string;
  description1: string;
  description2: string;
};

const RecourseElement = ({
  name,
  type,
  step,
  description1,
  description2,
}: Props) => {
  return (
    <div className="recourse-element">
      <div className="recourse-header">
        <div className="recourse-header-left-side">
          <div className="recourse-organization-name number-of-lines-1 text-length-30ch">
            {name}
          </div>
          <div className="recourse-type-info-title number-of-lines-1 text-length-30ch">
            {type}
          </div>
        </div>

        <div className="recourse-header-right-side">
          <div className="recourse-step number-of-lines-1 text-length-15ch">
            {step}
          </div>
        </div>
      </div>
      <div className="recourse-content">
        <div className="recourse-detail-step number-of-lines-1 text-length-35ch">
          <span className="recourse-detail-step-icon">
            <i className="bi bi-check-lg"></i>
          </span>
          <span className="recourse-detail-step-description">
            {description1}
          </span>
        </div>
        <div className="recourse-detail-step number-of-lines-1 text-length-35ch">
          <span className="recourse-detail-step-icon">
            <i className="bi bi-check-lg"></i>
          </span>
          <span className="recourse-detail-step-description">
            {description2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecourseElement;
