import React from "react";
import "./ProfileHeader.css";
import { Link } from "react-router-dom";

type Props = {};

const ProfileHeader = (props: Props) => {
  return (
    <div className="profile-header">
      <div className="profile-header-buttons">
        <Link
          className="profile-header-edit-link"
          to="/my-profile/edit-profile/my-personal-information"
        >
          <i className="bi bi-pencil-square profile-header-edit-icon"></i>
        </Link>
        <a className="profile-header-share-link" href="#">
          <i className="bi bi-share profile-header-share-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
