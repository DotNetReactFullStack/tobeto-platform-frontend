import React from "react";
import "./Profile.css";
import ProfileDefaultCard from "../../components/Profile/ProfileDefaultCard";
import UserInformationCard from "../../components/Profile/UserInformationCard/UserInformationCard";

type Props = {};
const TestElement: React.FC = () => {
  return <div>C#</div>;
};

const Profile = (props: Props) => {
  return (
    <div className="container main-section d-flex flex-column ">
      <div className="profile-page-header">header</div>
      <div className="profile-page-body">
        <div className="profile-page-left-col">
          <ProfileDefaultCard
            title="Yetkinlerim"
            childComponent={TestElement}
          />
        </div>
        <div className="profile-page-right-col">right</div>
      </div>
    </div>
  );
};

export default Profile;
