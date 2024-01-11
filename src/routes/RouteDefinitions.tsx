import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import Announcements from "../pages/Announcements/Announcements";
import LearningPaths from "../pages/LearningPaths/LearningPaths";
import Login from "../pages/Login/Login";

type Props = {};

const RouteDefinitions = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/duyurular" element={<Announcements />} />
      <Route path="/egitimlerim" element={<LearningPaths />} />
      <Route path="/giris" element={<Login />} />
    </Routes>
  );
};

export default RouteDefinitions;
