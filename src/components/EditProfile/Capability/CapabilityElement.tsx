import React from "react";
import "./CapabilityElement.css";
import DeleteModal from "../Modals/DeleteModal";

type Props = {
  capabilityId: string;
  capability: string;
};

function CapabilityElement({ capabilityId, capability }: Props) {
  return (
    <div className="capability-element">
      <div className="capability-element-content">
        <span>{capability}</span>
      </div>
      <div className="capability-element-button">
        <button
          className="capability-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#" + capabilityId}
        >
          <i className="bi bi-trash capability-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          deleteModalId={capabilityId}
          deleteModalTitle="yetkinliği"
        />
      </div>
    </div>
  );
}

export default CapabilityElement;
