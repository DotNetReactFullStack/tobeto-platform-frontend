import React from "react";
import "./AnnouncementDetailModal.css";

type Props = {
  id: string;
  name: string;
  content: string;
  organizationName: string;
};

const AnnouncementDetailModal = ({
  id,
  name,
  content,
  organizationName,
}: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id={"announcementId" + id}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">{organizationName}</div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetailModal;
