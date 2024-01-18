import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import AccountSettingForm from "../../../../components/EditProfile/AccountSettings/AccountSettingForm";

type Props = {};

const AccountSettings = (props: Props) => {
  return (
    <div className="account-settings-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <AccountSettingForm />
      </div>
    </div>
  );
};

export default AccountSettings;
