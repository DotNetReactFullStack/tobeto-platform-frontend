import React from "react";
import "./UserInformationCardElement.css";

type Props = {
  iconName: string;
  iconColor: string;
  contentHeaderText: string;
  contentText: string;
};

const UserInformationCardElement = (props: Props) => {
  const iconStyle = {
    color: props.iconColor,
  };
  return (
    <div className="user-information-card-element">
      <div className="user-information-card-element-icon">
        <i className={props.iconName} style={iconStyle} />
      </div>
      <div className="user-information-card-element-content">
        <div className="user-information-card-element-content-header">
          <span>{props.contentHeaderText}</span>
        </div>
        <div className="user-information-card-element-content-text">
          <span>{props.contentText}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInformationCardElement;
