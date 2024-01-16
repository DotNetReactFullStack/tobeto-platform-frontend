import React from "react";
import "./CapabilityElement.css";

type Props = {
  capability: string;
};

function CapabilityElement({ capability }: Props) {
  return (
    <div className="capability-element">
      <div className="capability-element-content">
        <span>{capability}</span>
      </div>
      <div className="capability-element-button">
        <button className="capability-element-delete-button">
          <i className="bi bi-trash capability-element-delete-button-icon"></i>
        </button>
      </div>
    </div>
  );
}

export default CapabilityElement;
