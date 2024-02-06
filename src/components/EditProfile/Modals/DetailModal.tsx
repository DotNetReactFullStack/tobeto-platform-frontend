import React from "react";
import "./DetailModal.css";

type Props = {
  detailModalId: string;
  detailModalTitle: string;
  detailModalContent: string;
};

const DetailModal = ({
  detailModalId,
  detailModalTitle,
  detailModalContent,
}: Props) => {
  return (
    <div
      className="modal fade"
      id={"detail-" + detailModalId}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header detail-modal-header">
            {detailModalTitle}
          </div>
          <div className="modal-body detail-modal-body">
            <div className="detail-modal-body-title">{detailModalContent}</div>
          </div>
          <div className="modal-footer detail-modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
