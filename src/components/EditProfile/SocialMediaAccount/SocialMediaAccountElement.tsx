import React from "react";
import "./SocialMediaAccountElement.css";
import DeleteModal from "../Modals/DeleteModal";
import EditSocialMediaAccountModal from "./EditSocialMediaAccountModal";

type Props = {
  socialMediaId: string;
  label: string;
  iconClass: string;
  iconColor: string;
  url: string;
};

const SocialMediaAccountElement = ({
  socialMediaId,
  label,
  iconClass,
  iconColor,
  url,
}: Props) => {
  return (
    <div className="social-media-account-element">
      <div className="social-media-account-header">
        <label>{label}</label>
      </div>
      <div className="social-media-account-body">
        <div className="social-media-account-content">
          <i
            className={"social-media-account-icon " + iconClass}
            style={{ color: iconColor }}
          ></i>
          <span className="social-media-account-url-text">{url}</span>
        </div>
        <div className="social-media-account-element-buttons">
          <button
            className="social-media-account-element-delete-button"
            data-bs-toggle="modal"
            data-bs-target={"#" + socialMediaId}
          >
            <i className="bi bi-trash social-media-account-element-delete-button-icon"></i>
            <DeleteModal
              deleteModalId={socialMediaId}
              deleteModalTitle="sosyal medya hesabını"
            />
          </button>
          <button
            className="social-media-account-element-edit-button"
            data-bs-toggle="modal"
            data-bs-target={"#edit-" + socialMediaId}
          >
            <i className="bi bi-pencil-fill social-media-account-element-edit-button-icon"></i>
          </button>
          <EditSocialMediaAccountModal
            editSocialMediaAccountModalId={socialMediaId}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAccountElement;
