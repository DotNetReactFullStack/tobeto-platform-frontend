import React from "react";
import "./Announcement.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import AnnouncementElement from "./AnnouncementElement";
import AnnouncementDetailModal from "./AnnouncementDetailModal";

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
      <AnnouncementDetailModal />
    </>
  );
};

export default Announcement;
