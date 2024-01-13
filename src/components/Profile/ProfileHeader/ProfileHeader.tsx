import React from "react";
import "./ProfileHeader.css";

type Props = {};

const ProfileHeader = (props: Props) => {
  return (
    <div className="profile-header">
      <div className="profile-header-buttons">
        <a className="profile-header-edit-link" href="#">
          <i className="bi bi-pencil-square profile-header-edit-icon"></i>
        </a>
        <a className="profile-header-share-link" href="#">
          <i className="bi bi-share profile-header-share-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
