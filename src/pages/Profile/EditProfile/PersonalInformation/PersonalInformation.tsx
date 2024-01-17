import React from "react";
import "../EditProfilePages.css";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import PersonalInformationComponent from "../../../../components/EditProfile/PersonalInformation/PersonalInformation";

type Props = {};

const PersonalInformation = (props: Props) => {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <PersonalInformationComponent />
      </div>
    </div>
  );
};

export default PersonalInformation;
