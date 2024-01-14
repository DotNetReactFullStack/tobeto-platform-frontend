import React from "react";
import Banner from "../../components/Banner/Banner";
import AnnouncementFilter from "../../components/Announcement/AnnouncementFilter";
import AnnouncementList from "../../components/Announcement/AnnouncementList";
import Pagination from "../../components/Pagination/Pagination";

type Props = {};

const Announcements = (props: Props) => {
  return (
    <>
      <Banner bannerTitle="Duyurularım" />
      <div className="container main-section">
        <AnnouncementFilter />
        <AnnouncementList />
        <Pagination />
      </div>
    </>
  );
};

export default Announcements;
