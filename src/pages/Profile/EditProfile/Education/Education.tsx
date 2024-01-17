import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import EducationForm from "../../../../components/EditProfile/Education/EducationForm";
import EducationList from "../../../../components/EditProfile/Education/EducationList";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <EducationForm />
        <EducationList />
      </div>
    </div>
  );
};

export default Education;
