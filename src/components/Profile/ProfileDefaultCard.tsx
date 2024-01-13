import React from "react";
import "./ProfileDefaultCard.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ProfileDefaultCard = (props: Props) => {
  return (
    <div className="profile-default-card">
      <div className="profile-default-card-header">{props.title}</div>
      <div className="profile-default-card-body">
        {props.children}
      </div>
    </div>
  );
};

export default ProfileDefaultCard;
