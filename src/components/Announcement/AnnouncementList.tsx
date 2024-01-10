import React from "react";
import AnnouncementElement from "./AnnouncementElement";
import "./AnnouncementList.css";

type Props = {};

function AnnouncementList({}: Props) {
  return (
    <div className="container main-section announcement-list-container">
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
      <div className="announcement-list-announcement-element">
        <AnnouncementElement />
      </div>
    </div>
  );
}

export default AnnouncementList;
