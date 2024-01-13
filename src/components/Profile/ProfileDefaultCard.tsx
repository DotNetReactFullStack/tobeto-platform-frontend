import React from "react";
import "./ProfileDefaultCard.css";
import { title } from "process";

type Props = {
  title: string;
  childComponent: React.FC;
};

const ProfileDefaultCard = (props: Props) => {
  return (
    <div className="profile-default-card">
      <div className="profile-default-card-header">{props.title}</div>
      <div className="profile-default-card-body">
        <props.childComponent />
      </div>
    </div>
  );
};

export default ProfileDefaultCard;
