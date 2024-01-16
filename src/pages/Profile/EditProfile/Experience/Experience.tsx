import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import ExperienceForm from "../../../../components/EditProfile/Experience/ExperienceForm";
import ExperienceList from "../../../../components/EditProfile/Experience/ExperienceList";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <ExperienceForm />
        <ExperienceList />
      </div>
    </div>
  );
};

export default Experience;
