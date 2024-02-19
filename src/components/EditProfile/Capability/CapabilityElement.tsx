import React from "react";
import "./CapabilityElement.css";
import DeleteModal from "../Modals/DeleteModal";
import accountCapabilityService from "../../../services/accountCapabilityService";

type Props = {
  id: string;
  capabilityName: string;
};

function CapabilityElement({ id, capabilityName }: Props) {
  return (
    <div className="capability-element">
      <div className="capability-element-content">
        <span>{capabilityName}</span>
      </div>
      <div className="capability-element-button">
        <button
          className="capability-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#id-" + id}
        >
          <i className="bi bi-trash capability-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          entityService={accountCapabilityService}
          entityId={"id-" + id}
          deleteModalTitle="yetkinliği"
        />
      </div>
    </div>
  );
}

export default CapabilityElement;
