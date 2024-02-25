import React from "react";
import "./LearningPathElement.css";
import { Link } from "react-router-dom";

type Props = {
  learningPathId: number;
  learningPathName: string;
  startingTime: string;
  imageUrl: string;
};

const LearningPathElement = ({
  learningPathId,
  learningPathName,
  startingTime,
  imageUrl,
}: Props) => {
  function formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = date.toLocaleString("tr-TR", options);
    return formattedDate.replace(".", ""); // Remove the dot after the month name
  }

  const formattedStartingTime = formatDateString(startingTime);

  return (
    <div className="learning-path-element">
      <div className="learning-path-cover-photo">
        <img
          className="learning-path-img"
          src={process.env.PUBLIC_URL + imageUrl}
        />
        <div className="learning-path-body">
          <div className="learning-path-title">{learningPathName}</div>
          <div className="learning-path-publish-datetime">
            {formattedStartingTime}
          </div>
        </div>
      </div>

      <div className="learning-path-footer">
        <Link to={`/learning-paths/learning-path/${learningPathId}`}>
          <button className="learning-path-button">Eğitime Git</button>
        </Link>
      </div>
    </div>
  );
};

export default LearningPathElement;
