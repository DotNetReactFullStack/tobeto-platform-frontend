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
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );
  const accountExperiences: GetListByAccountIdExperienceListItemDto[] =
    useSelector((state: RootState) => state.experience.accountExperiences);
  const accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[] =
    useSelector(
      (state: RootState) => state.accountCollegeMetadata.accountCollegeMetadatas
    );

  async function fetchAccountExperienceData() {
    try {
      const accountExperiencesResponse =
        await experienceService.getListByAccountId(accountId);
      const data = accountExperiencesResponse.data.items;
      dispatch(setAccountExperiences(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  async function fetchAccountCollegeMetadata() {
    try {
      const accountCollegeMetadatasResponse =
        await accountCollegeMetadataService.getListByAccountId(accountId);
      const data = accountCollegeMetadatasResponse.data.items;
      dispatch(setAccountCollegeMetadatas(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  const mergeData = (
    accountExperiences: GetListByAccountIdExperienceListItemDto[],
    accountCollegeMetadatas: GetListByAccountIdAccountCollegeMetadataListItemDto[]
  ) => {
    let historyExperienceData: ProfileHistoryElementExperienceModel[] = [];
    let historyEducationData: ProfileHistoryElementEducationModel[] = [];

    historyExperienceData = accountExperiences.map((experience) => {
      return {
        elementType: ProfileHistoryElementType.Experience,
        experienceData: experience,
      };
    });

    historyEducationData = accountCollegeMetadatas.map((education) => {
      return {
        elementType: ProfileHistoryElementType.Education,
        educationData: education,
      };
    });

    // historyExperienceData.sort(function (a: any, b: any) {
    //   // String olarak verilen tarihleri Date nesnelerine dönüştürüyoruz
    //   var dateA: any = new Date(a.experienceData.startingDate);
    //   var dateB: any = new Date(b.experienceData.startingDate);
    //   // Diziyi startingDate özelliğine göre azalan sırada sıralıyoruz
    //   return dateB - dateA;
    // })

    // historyEducationData.sort(function (a: any, b: any) {
    //   // String olarak verilen tarihleri Date nesnelerine dönüştürüyoruz
    //   var dateA: any = new Date(a.educationData.startingYear);
    //   var dateB: any = new Date(b.educationData.startingYear);
    //   // Diziyi startingDate özelliğine göre azalan sırada sıralıyoruz
    //   return dateB - dateA;
    // })

    return [...historyExperienceData, ...historyEducationData];
  };

  const educationAndExperienceData = mergeData(
    accountExperiences,
    accountCollegeMetadatas
  );

  const allStartingDates: string[] = [];
  educationAndExperienceData.forEach((item: any) => {
    if (item.elementType === "education") {
      allStartingDates.push(item.educationData.startingYear);
    } else {
      allStartingDates.push(item.experienceData.startingDate);
    }
  });

  // Başlangıç tarihlerine göre diziyi karmaşık bir şekilde sıralama
  educationAndExperienceData.sort((a: any, b: any) => {
    const dateA =
      a.elementType === "education"
        ? a.educationData.startingYear
        : a.experienceData.startingDate;
    const dateB =
      b.elementType === "education"
        ? b.educationData.startingYear
        : b.experienceData.startingDate;
    // Başlangıç tarihlerine göre sıralama
    if (dateA === dateB) {
      // Aynı başlangıç tarihine sahipler, elementType'e göre sıralama
      return a.elementType === "education" ? -1 : 1;
    } else {
      // Başlangıç tarihlerine göre sıralama
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
  });

  console.log(educationAndExperienceData);

  useEffect(() => {
    fetchAccountExperienceData();
    fetchAccountCollegeMetadata();
  }, []);

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
