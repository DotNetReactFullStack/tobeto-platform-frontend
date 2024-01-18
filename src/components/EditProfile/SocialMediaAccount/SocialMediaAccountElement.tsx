import React from "react";
import "./SocialMediaAccountElement.css";

type Props = {
  label: string;
  iconClass: string;
  iconColor: string;
  url: string;
};

const SocialMediaAccountElement = ({
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
          <button className="social-media-account-element-delete-button">
            <i className="bi bi-trash social-media-account-element-delete-button-icon"></i>
          </button>
          <button className="social-media-account-element-edit-button">
            <i className="bi bi-pencil-fill social-media-account-element-edit-button-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAccountElement;
