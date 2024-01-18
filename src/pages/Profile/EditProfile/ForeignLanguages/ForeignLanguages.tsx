import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import ForeignLanguageForm from "../../../../components/EditProfile/ForeignLanguage/ForeignLanguageForm";
import ForeignLanguageList from "../../../../components/EditProfile/ForeignLanguage/ForeignLanguageList";

type Props = {};

const ForeignLanguages = (props: Props) => {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <ForeignLanguageForm />
        <ForeignLanguageList />
      </div>
    </div>
  );
};

export default ForeignLanguages;
