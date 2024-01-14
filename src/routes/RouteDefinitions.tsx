import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import Announcements from "../pages/Announcements/Announcements";
import LearningPaths from "../pages/LearningPaths/LearningPaths";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PersonalInformation from "../pages/Profile/EditProfile/PersonalInformation/PersonalInformation";

type Props = {};

const RouteDefinitions = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/my-learning-paths" element={<LearningPaths />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route
        path="/my-profile/edit-profile/my-personal-information"
        element={<PersonalInformation />}
      />
    </Routes>
  );
};

export default RouteDefinitions;
