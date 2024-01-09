import React from "react";
import Banner from "../../components/Banner/Banner";
import AnnouncementFilter from "../../components/Announcement/AnnouncementFilter";

type Props = {};

const Announcements = (props: Props) => {
  return (
    <div>
      <Banner />
      <AnnouncementFilter />
    </div>
  );
};

export default Announcements;
