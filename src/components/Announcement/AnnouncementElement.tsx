import React from "react";
import "./AnnouncementElement.css";

type Props = {
  id: string;
  announcementType: string;
  organizationType: string;
  title: string;
  publishDate: string;
};

const AnnouncementElement = ({
  id,
  announcementType,
  organizationType,
  title,
  publishDate,
}: Props) => {
  return (
    <div className="announcement-element">
      <div className="announcement-header">
        <div className="announcement-header-left-side">
          <span>{announcementType}</span>
        </div>
        <div className="announcement-header-right-side">
          <span>{organizationType}</span>
        </div>
      </div>
      <div className="announcement-content">
        <span className="announcement-title">{title}</span>
      </div>
      <div className="announcement-footer">
        <div className="announcement-footer-left-side">
          <i className="bi bi-calendar3 calendar-color"></i>
          <span className="announcement-publish-date">{publishDate}</span>
        </div>
        <div className="announcement-footer-right-side">
          <button
            className="btn announcement-read-more-button"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#" + id}
          >
            Devamını oku
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementElement;
