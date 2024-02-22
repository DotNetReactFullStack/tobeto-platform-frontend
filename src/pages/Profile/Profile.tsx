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
import { ProfileHistoryElementModel } from "../../models/profileHistoryElement/profileHistoryElementModel";
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

const aboutMeFakeData: string = "Kendini kısaca anlat";

const foreignLanguagesFakeData: any[] = [
  { name: "İngilizce", level: "Orta Seviye (B1, B2)" },
  { name: "Korece", level: "Temel Seviye (A1, A2)" },
  { name: "Japonca", level: "Anadil" },
];

const accountCertificatesFakeData: any[] = [
  { name: "CSS sertifika" },
  { name: "JavaScript sertifika" },
  { name: ".Net sertifika" },
  { name: "React sertifika" },
  { name: "İstanbul Kodluyor kurs sertifikası" },
];

const socialMediaAccountsFakeData: any[] = [
  {
    iconClass: "bi bi-linkedin",
    iconColor: "#0077b5",
    link: "https://pair4.tobetoplatform.ersinkaya.dev",
  },
  {
    iconClass: "bi bi-instagram",
    iconColor: "#e03780",
    link: "https://pair4.tobetoplatform.ersinkaya.dev",
  },
  {
    iconClass: "bi bi-github",
    iconColor: "#181717",
    link: "https://pair4.tobetoplatform.ersinkaya.dev",
  },
  {
    iconClass: "bi bi-twitter-x",
    iconColor: "#181717",
    link: "https://pair4.tobetoplatform.ersinkaya.dev",
  },
];

const examsFakeData: any[] = [
  {
    name: "Frontend",
    date: "13-01-2024",
    points: "100.00",
  },
  {
    name: "Herkes İçin Kodlama 1A Değerlendirme Sınavı",
    date: "11-10-2023",
    points: "100.00",
  },
  {
    name: "Microsoft SQL Server",
    date: "05-09-2023",
    points: "68.00",
  },
  {
    name: "Masaüstü Programlama",
    date: "06-09-2023",
    points: "76.00",
  },
];

// Aktivite haritası için

const generateActivityData = () => {
  const today = new Date();

  //Son 7*53=371 gün için başlangıç tarihi;
  const StartDate = new Date(today);
  StartDate.setDate(today.getDate() - 370);

  const data: DayData[] = [];

  //Tarih ve o tarihe ait aktivite sayısı üretildi;
  while (StartDate <= today) {
    const dateStr = StartDate.toISOString().split("T")[0];
    const count = Math.floor(Math.random() * 40); //0-41 arası (4 dahil) bir tam sayı elde edildi.
    data.push({ date: dateStr, count });
    StartDate.setDate(StartDate.getDate() + 1);
  }

  return data;
};

// generateActivityData fonksiyonu ile rastgele veri oluşturduk.
const activityData = generateActivityData();

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

  //console.log(educationAndExperienceData)

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
            <AboutMe data={aboutMeFakeData} />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Yetkinliklerim">
            <Capabilities />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Yabancı Dillerim">
            <ForeignLanguages data={foreignLanguagesFakeData} />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Sertifikalarım">
            <AccountCertificates data={accountCertificatesFakeData} />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Medya Hesaplarım">
            <SocialMediaAccounts data={socialMediaAccountsFakeData} />
          </ProfileDefaultCard>
        </div>

        <div className="profile-page-right-col">
          <ProfileDefaultCard title="Sınav Sonuçlarım">
            <Exams data={examsFakeData}></Exams>
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Aktivite Haritam">
            <ActivityMap data={activityData} />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Eğitim Hayatım ve Deneyimlerim">
            <EducationAndExperienceList data={educationAndExperienceData} />
          </ProfileDefaultCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
