import React from "react";
import "./AnnouncementElement.css";

type Props = {
  id: number;
  announcementTypeName: string;
  organizationName: string;
  name: string;
  publishedDate: string;
};

const AnnouncementElement = ({
  id,
  announcementTypeName,
  organizationName,
  name,
  publishedDate,
}: Props) => {
  return (
    <div className="announcement-element">
      <div className="announcement-header">
        <div className="announcement-header-left-side">
          <span>{announcementTypeName}</span>
        </div>
        <div className="announcement-header-right-side">
          <span>{organizationName}</span>
        </div>
      </div>
      <div className="announcement-content">
        <span className="announcement-title">{name}</span>
      </div>
      <div className="announcement-footer">
        <div className="announcement-footer-left-side">
          <i className="bi bi-calendar3 calendar-color"></i>
          <span className="announcement-publish-date">{publishedDate}</span>
        </div>
        <div className="announcement-footer-right-side">
          <button
            className="btn announcement-read-more-button"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#announcementId" + id}
          >
            Devamını oku
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementElement;
