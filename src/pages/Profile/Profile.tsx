import React from "react";
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

type DayData = {
  date: string;
  count: number;
};

type Props = {};

const aboutMeFakeData: string = "Kendini kısaca anlat";

const capabilitiesFakeData: any[] = [
  "CSS",
  "Backend",
  "JavaScript",
  ".Net",
  "React",
  "Frontend",
];

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

// Eğitim Hayatım ve Deneyimlerim

const EducationAndExperienceFakeData: any[] = [
  {
    type: "Education",
    startYear: "2014",
    endYear: "2019",
    name: "Sinop Universitesi",
    content: "Yazılım Mühendisliği",
  },
  {
    type: "Experience",
    startYear: "2019",
    endYear: "2020",
    name: "Amazon",
    content: "Back-End Developer",
  },
  {
    type: "Education",
    startYear: "2019",
    endYear: "2022",
    name: "Uludağ Universitesi",
    content: "Yazılım Mühendisliği",
  },
  {
    type: "Experience",
    startYear: "2020",
    endYear: "2021",
    name: "Google",
    content: "Front-End Developer",
  },
  {
    type: "Experience",
    startYear: "2021",
    endYear: "...",
    name: "Microsoft",
    content: "Full-Stack Developer",
  },
];

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
            <AboutMe data={aboutMeFakeData} />
          </ProfileDefaultCard>

          <ProfileDefaultCard title="Yetkinliklerim">
            <Capabilities data={capabilitiesFakeData} />
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
            <EducationAndExperienceList data={EducationAndExperienceFakeData} />
          </ProfileDefaultCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
