import React from "react";
import "./PersonalInformation.css";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import "../EditProfilePages.css";

type Props = {};

const PersonalInformation = (props: Props) => {
  return (
    <div className="container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <h1>right</h1>
      </div>
    </div>
  );
};

export default PersonalInformation;
