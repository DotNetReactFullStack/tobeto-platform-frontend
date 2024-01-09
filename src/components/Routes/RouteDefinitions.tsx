import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/NotFound/NotFound";
import Announcements from "../../pages/Announcements/Announcements";

type Props = {};

const RouteDefinitions = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/duyurular" element={<Announcements />} />
    </Routes>
  );
};

export default RouteDefinitions;
