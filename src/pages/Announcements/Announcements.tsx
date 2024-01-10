import React from "react";
import Banner from "../../components/Banner/Banner";
import AnnouncementFilter from "../../components/Announcement/AnnouncementFilter";
import AnnouncementList from "../../components/Announcement/AnnouncementList";

type Props = {};

const Announcements = (props: Props) => {
  return (
    <div>
      <Banner />
      <AnnouncementFilter />
      <AnnouncementList />
    </div>
  );
};

export default Announcements;
