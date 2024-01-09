import React from "react";
import "./Announcement.css";
import ShowMoreButton from "../../ShowMoreButton/ShowMoreButton";
import AnnouncementElement from "./AnnouncementElement";

type Props = {};

const Announcement = (props: Props) => {
  return (
    <>
      <div className="announcement-component">
        <AnnouncementElement />
        <AnnouncementElement />
        <AnnouncementElement />
      </div>
      <ShowMoreButton />
    </>
  );
};

export default Announcement;
