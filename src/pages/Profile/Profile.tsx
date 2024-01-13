import React from "react";
import "./Profile.css";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="container main-section d-flex flex-column ">
      <div className="profile-page-header">header</div>
      <div className="profile-page-body">
        <div className="profile-page-left-col">left</div>
        <div className="profile-page-right-col">right</div>
      </div>
    </div>
  );
};

export default Profile;
