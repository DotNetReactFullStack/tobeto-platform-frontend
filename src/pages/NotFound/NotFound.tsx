import React from "react";
import "./NotFound.css";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <span>404</span>
        <span>Not Found</span>
      </div>
    </div>
  );
};

export default NotFound;
