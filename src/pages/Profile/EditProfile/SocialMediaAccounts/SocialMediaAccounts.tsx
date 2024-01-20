import React from "react";
import SocialMediaAccountFrom from "../../../../components/EditProfile/SocialMediaAccount/SocialMediaAccountForm";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import SocialMediaAccountList from "../../../../components/EditProfile/SocialMediaAccount/SocialMediaAccountList";

type Props = {};

const SocialMediaAccounts = (props: Props) => {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <SocialMediaAccountFrom />
        <SocialMediaAccountList />
        <div className="" style={{ marginTop: "15px" }}>
          <span style={{ color: "rgb(153, 51, 255)" }}>
            En fazla 3 adet medya seçimi yapılabilir.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
