import React from "react";
import "./AnnouncementDetailModal.css";

type Props = {
  id: string;
  title: string;
  content: string;
  organization: string;
};

const AnnouncementDetailModal = ({
  id,
  title,
  content,
  organization,
}: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id={id}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">{organization}</div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetailModal;
