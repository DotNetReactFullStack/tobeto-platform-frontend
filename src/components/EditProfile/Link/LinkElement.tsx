import React from "react";
import { Link } from "react-router-dom";
import "./LinkElement.css";

type Props = {
  iconClass: string;
  title: string;
  redirectUrl: string;
};

const LinkElement = ({ iconClass, title, redirectUrl }: Props) => {
  return (
    <div className="link-element">
      <Link className="link-element-link" to={redirectUrl}>
        <i className={iconClass + " link-element-icon"} />
        <span className="link-element-title">{title}</span>
      </Link>
    </div>
  );
};

export default LinkElement;
