import React from "react";
import "./DeleteProfilePhotoModal.css";

type Props = {
  deleteModalId: string;
};

const DeleteProfilePhotoModal = ({ deleteModalId }: Props) => {
  return (
    <div
      className="modal fade"
      id={deleteModalId}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header delete-profile-photo-modal-header">
            Profil Fotoğrafı
          </div>
          <div className="modal-body delete-profile-photo-modal-body">
            <div className="delete-profile-photo-modal-body-content">
              Profil fotoğrafını kaldırmak istediğinize emin misiniz?
            </div>
          </div>
          <div className="modal-footer delete-profile-photo-modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="bi bi-x-lg"></i>
              Hayır
            </button>
            <button type="button" className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Evet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfilePhotoModal;
