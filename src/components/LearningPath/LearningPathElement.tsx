import React from "react";
import "./LearningPathElement.css";
import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  name: string;
  datetime: string;
};

const LearningPathElement = ({ imageUrl, name, datetime }: Props) => {
  return (
    <div className="learning-path-element">
      <div className="learning-path-cover-photo">
        <img
          className="learning-path-img"
          src={process.env.PUBLIC_URL + imageUrl}
        />
      </div>
      <div className="learning-path-body">
        <div className="learning-path-title">{name}</div>
        <div className="learning-path-publish-datetime">{datetime}</div>
      </div>
      <div className="learning-path-footer">
        <Link to={"/my-learning-paths/net-react-fullstack"}>
          <button className="learning-path-button">Eğitime Git</button>
        </Link>
      </div>
    </div>
  );
};

export default LearningPathElement;
