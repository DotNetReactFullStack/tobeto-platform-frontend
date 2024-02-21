import React from "react";
import "./DeleteModal.css";
import { BaseService } from "../../../core/services/baseService";
import toastr from "toastr";
import { useDispatch } from "react-redux";

type Props = {
  entityService: BaseService<any, any, any, any, any, any>;
  refreshData: any | null;
  entityId: string;
  deleteModalTitle: string;
};

const DeleteModal = ({ entityService, refreshData, entityId, deleteModalTitle }: Props) => {

  const dispatch = useDispatch();

  const handleDeleteEntity = async (entityService: BaseService<any, any, any, any, any, any>, refreshData: any | null, id: number) => {
    try {
      const response = await entityService.delete(id);
      toastr.success("Kayıt başarıyla silindi.");
      dispatch(refreshData())
    } catch (error: any) {
      toastr.error(error.response.data.message);
    }
  }

  return (
    <div
      className="modal fade"
      id={entityId}
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
              onClick={() => handleDeleteEntity(entityService, refreshData, Number(entityId.replace(/.*-/, "")))} className="btn btn-primary">
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
