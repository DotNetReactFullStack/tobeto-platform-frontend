import React from "react";
import "./SocialMediaAccountElement.css";
import DeleteModal from "../Modals/DeleteModal";
import EditSocialMediaAccountModal from "./EditSocialMediaAccountModal";
import { BaseService } from "../../../core/services/baseService";
import accountSocialMediaPlatformService from "../../../services/accountSocialMediaPlatformService";
import { refreshData } from "../../../store/accountSocialMediaPlatform/accountSocialMediaPlatformSlice";

type Props = {
  id: number;
  socialMediaPlatformName: string;
  iconPath: string;
  iconColor: string;
  link: string;
};

const SocialMediaAccountElement = ({
  id,
  socialMediaPlatformName,
  iconPath,
  iconColor,
  link,
}: Props) => {
  return (
    <div className="social-media-account-element">
      <div className="social-media-account-header">
        <label>{socialMediaPlatformName}</label>
      </div>
      <div className="social-media-account-body">
        <div className="social-media-account-content">
          <i
            className={"social-media-account-icon " + iconPath}
            style={{ color: iconColor }}
          ></i>
          <span className="social-media-account-url-text">{link}</span>
        </div>
        <div className="social-media-account-element-buttons">
          <button
            className="social-media-account-element-delete-button"
            data-bs-toggle="modal"

            data-bs-target={"#socialMediaPlatformElement-" + id}
          >
            <i className="bi bi-trash social-media-account-element-delete-button-icon"></i>
          </button>
          <DeleteModal
            entityService={accountSocialMediaPlatformService}
            refreshData={refreshData}
            entityId={"socialMediaPlatformElement-" + id}
            deleteModalTitle="sosyal medya hesabını"
          />
          <button
            className="social-media-account-element-edit-button"
            data-bs-toggle="modal"

            data-bs-target={"#edit-" + id}

          >
            <i className="bi bi-pencil-fill social-media-account-element-edit-button-icon"></i>
          </button>
          {/* <EditSocialMediaAccountModal editSocialMediaAccountModalId={id} /> */}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAccountElement;
