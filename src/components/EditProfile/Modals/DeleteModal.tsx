import React from "react";
import "./DeleteModal.css";
import accountCapabilityService from "../../../services/accountCapabilityService";

type Props = {
  deleteModalId: string;
  deleteModalTitle: string;
};

const handleDeleteAcccountCapability = (id: number) => {
  accountCapabilityService.delete(id)
}

const DeleteModal = ({ deleteModalId, deleteModalTitle }: Props) => {
  return (
    <div
      className="modal fade"
      id={deleteModalId}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header delete-modal-header">
            <img
              className="image-delete-modal"
              src={
                process.env.PUBLIC_URL + "/assets/images/delete-modal-alert.svg"
              }
            />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body delete-modal-body">
            <div className="delete-modal-body-title">
              {"Seçilen " +
                deleteModalTitle +
                " silmek istediğinize emin misiniz?"}
            </div>
            <div className="delete-modal-body-content">
              Bu işlem geri alınamaz.
            </div>
          </div>
          <div className="modal-footer delete-modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="bi bi-x-lg"></i>
              Hayır
            </button>
            <button type="button"
              data-bs-dismiss="modal"
              onClick={() => handleDeleteAcccountCapability(Number(deleteModalId.replace("accountCapabilityId", "")))} className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Evet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
