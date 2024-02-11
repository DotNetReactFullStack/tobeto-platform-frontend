import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import Announcements from "../pages/Announcements/Announcements";
import LearningPaths from "../pages/LearningPaths/LearningPaths";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PersonalInformation from "../pages/Profile/EditProfile/PersonalInformation/PersonalInformation";
import Experience from "../pages/Profile/EditProfile/Experience/Experience";
import Education from "../pages/Profile/EditProfile/Education/Education";
import Capabilities from "../pages/Profile/EditProfile/Capabilities/Capabilities";
import Exams from "../pages/Exams/Exams";
import MyCertificates from "../pages/Profile/EditProfile/MyCertificates/MyCertificates";
import SocialMediaAccounts from "../pages/Profile/EditProfile/SocialMediaAccounts/SocialMediaAccounts";
import ForeignLanguages from "../pages/Profile/EditProfile/ForeignLanguages/ForeignLanguages";
import AccountSettings from "../pages/Profile/EditProfile/AccountSettings/AccountSettings";
import LearningPathContent from "../pages/LearningPathContent/LearningPathContent";
import Assessments from "../pages/Assessments/Assessments";
import Calendar from "../pages/Calendar/CalendarPage";
import Catalog from "../pages/Catalog/Catalog";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";

type Props = {};

const RouteDefinitions = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={Homepage} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/announcements" element={<PrivateRoute component={Announcements} />} />
      <Route path="/my-learning-paths" element={<PrivateRoute component={LearningPaths} />} />
      <Route path="/my-profile" element={<PrivateRoute component={Profile} />} />
      <Route path="/my-profile/edit-profile/my-personal-information" element={<PrivateRoute component={PersonalInformation} />} />
      <Route path="/my-profile/edit-profile/my-experience" element={<PrivateRoute component={Experience} />} />
      <Route path="/my-profile/edit-profile/education" element={<PrivateRoute component={Education} />} />
      <Route path="/my-profile/edit-profile/capabilities" element={<PrivateRoute component={Capabilities} />} />
      <Route path="/my-profile/edit-profile/certificates" element={<PrivateRoute component={MyCertificates} />} />
      <Route path="/my-profile/edit-profile/social-media-accounts" element={<PrivateRoute component={SocialMediaAccounts} />} />
      <Route path="/my-profile/edit-profile/foreing-languages" element={<PrivateRoute component={ForeignLanguages} />} />
      <Route path="/my-profile/edit-profile/settings" element={<PrivateRoute component={AccountSettings} />} />
      <Route path="/my-learning-paths/net-react-fullstack" element={<PrivateRoute component={LearningPathContent} />} />
      <Route path="/my-exams" element={<PrivateRoute component={Exams} />} />
      <Route path="/my-assessments" element={<PrivateRoute component={Assessments} />} />
      <Route path="/calendar" element={<PrivateRoute component={Calendar} />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
};

export default RouteDefinitions;
