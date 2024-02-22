import React, { useEffect } from "react";
import "./Profile.css";
import ProfileDefaultCard from "../../components/Profile/ProfileDefaultCard";
import SocialMediaAccounts from "../../components/Profile/SocialMediaAccounts/SocialMediaAccounts";
import UserInformationCard from "../../components/Profile/UserInformationCard/UserInformationCard";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import AboutMe from "../../components/Profile/AboutMe/AboutMe";
import Capabilities from "../../components/Profile/Capabilities/Capabilities";
import ForeignLanguages from "../../components/Profile/ForeignLanguages/ForeignLanguages";
import Exams from "../../components/Profile/Exams/Exams";
import AccountCertificates from "../../components/Profile/AccountCertificates/AccountCertificates";
import ActivityMap from "../../components/Profile/ActivityMap/ActivityMap";
import EducationAndExperienceList from "../../components/Profile/EducationAndExperience/EducationAndExperienceList";
import experienceService from "../../services/experienceService";
import { setAccountExperiences } from "../../store/experience/experienceSlice";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdExperienceListItemDto } from "../../models/experiences/getListByAccountIdExperienceListItemDto";
import { RootState } from "../../store/configureStore";
import { GetListByAccountIdAccountCollegeMetadataListItemDto } from "../../models/accountCollegeMetadatas/getListByAccountIdAccountCollegeMetadataListItemDto";
import { setAccountCollegeMetadatas } from "../../store/accountCollegeMetadata/accountCollegeMetadataSlice";
import accountCollegeMetadataService from "../../services/accountCollegeMetadataService";
import { ProfileHistoryElementExperienceModel } from "../../models/profileHistoryElement/profileHistoryElementExperienceModel";
import { ProfileHistoryElementEducationModel } from "../../models/profileHistoryElement/profileHistoryElementEducationModel";
import { ProfileHistoryElementType } from "../../models/profileHistoryElement/profileHistoryElementType";

type DayData = {
  date: string;
  count: number;
};

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="container main-section d-flex flex-column">
      <div className="profile-page-header">
        <ProfileHeader />
      </div>
      <div className="profile-page-body">
        <div className="profile-page-left-col">
          <UserInformationCard />

          <ProfileDefaultCard title="Hakkımda">
            <AboutMe />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Yetkinliklerim">
            <Capabilities />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Yabancı Dillerim">
            <ForeignLanguages />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Sertifikalarım">
            <AccountCertificates />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Medya Hesaplarım">
            <SocialMediaAccounts />
          </ProfileDefaultCard>
        </div>

        <div className="profile-page-right-col">
          <ProfileDefaultCard title="Sınav Sonuçlarım">
            <Exams />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Aktivite Haritam">
            <ActivityMap />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Eğitim Hayatım ve Deneyimlerim">
            <EducationAndExperienceList />
          </ProfileDefaultCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
