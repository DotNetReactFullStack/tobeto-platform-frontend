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
      <Route
        path="/my-profile/edit-profile/my-experience"
        element={<Experience />}
      />
      <Route
        path="/my-profile/edit-profile/education"
        element={<Education />}
      />
      <Route
        path="/my-profile/edit-profile/capabilities"
        element={<Capabilities />}
      />
      <Route
        path="/my-profile/edit-profile/certificates"
        element={<MyCertificates />}
      />
      <Route
        path="/my-profile/edit-profile/social-media-accounts"
        element={<SocialMediaAccounts />}
      />
      <Route
        path="/my-profile/edit-profile/foreing-languages"
        element={<ForeignLanguages />}
      />
      <Route
        path="/my-profile/edit-profile/settings"
        element={<AccountSettings />}
      />
      <Route
        path="/my-learning-paths/net-react-fullstack"
        element={<LearningPathContent />}
      />
      <Route path="/my-exams" element={<Exams />} />
      <Route path="/my-assessments" element={<Assessments />} />
    </Routes>
  );
};

export default RouteDefinitions;
