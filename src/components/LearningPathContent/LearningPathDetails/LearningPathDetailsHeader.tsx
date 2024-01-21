import React, { useState } from "react";
import "./LearningPathDetailsHeader.css";

type Props = {};

const LearningPathDetailsHeader = (props: Props) => {
  const [isLike, setIsLike] = useState(false);
  const [likeIcon, setLikeIcon] = useState("bi-heart");

  const handleLikeButtonClick = () => {
    const newIcon = isLike ? "bi-heart" : "bi-heart-fill";
    setLikeIcon(newIcon);
    setIsLike(!isLike);
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState("bi-bookmark");

  const handleFavoriteButtonClick = () => {
    const newIcon = isFavorite ? "bi-bookmark" : "bi-bookmark-fill";
    setFavoriteIcon(newIcon);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="learning-path-details-header">
      <div className="learning-path-details-header-left-col">
        <img
          className="learning-path-details-header-img"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/dotnet-react-full-stack.png"
          }
        />
      </div>
      <div className="learning-path-details-header-right-col">
        <div className="learning-path-details-header-right-col-body">
          <div className="learning-path-details-header-title-section">
            <h3 className="learning-path-details-header-title">
              .Net & React FullStack | Öğrenme Yolculuğu
            </h3>
            <span className="learning-path-details-date-info">
              29 Şubat 2024 tarihine kadar bitirebilirsin
            </span>
          </div>
          <div className="learning-path-details-header-activity-section">
            <span className="activity-score">100 Puan</span>
            <button
              className="activity-like-button"
              onClick={handleLikeButtonClick}
            >
              <i className={"bi activity-like-icon " + likeIcon}></i>
            </button>
            <button className="activity-like-count-button">
              <span className="activity-like-count">50</span>
            </button>
            <button
              className="activity-favorite-button"
              onClick={handleFavoriteButtonClick}
            >
              <i className={"bi activity-favorite-icon " + favoriteIcon}></i>
            </button>
          </div>
        </div>
        <div className="learning-path-details-header-right-col-footer ">
          <div className="progress learning-path-details-progress">
            <div
              className="progress-bar learning-path-details-progress-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="learning-path-details-progress-bar-value-text">
            <span>%75</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetailsHeader;
