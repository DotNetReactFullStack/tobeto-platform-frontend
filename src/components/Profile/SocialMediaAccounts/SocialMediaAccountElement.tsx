import React from "react";
import "./SocialMediaAccountElement.css";

type Props = {
  iconClass: string;
  iconColor: string;
  link: string;
};

const SocialMediaAccountElement = ({ iconClass, iconColor, link }: Props) => {
  return (
    <div className="profile-social-media-account-element">
      <div className="account-element-icon">
        <a href={link} target="_blank">
          <i className={iconClass} style={{ color: iconColor }}></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaAccountElement;
