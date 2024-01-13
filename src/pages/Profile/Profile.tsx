import React from "react";
import "./Profile.css";
import ProfileDefaultCard from "../../components/Profile/ProfileDefaultCard";
import SocialMediaAccounts from "../../components/Profile/SocialMediaAccounts/SocialMediaAccounts";
import UserInformationCard from "../../components/Profile/UserInformationCard/UserInformationCard";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import Exams from "../../components/Profile/Exams/Exams";

type Props = {};

const socialMediaAccountsFakeData: any[] = [
  {
    iconClass: "bi bi-linkedin",
    iconColor: "#0077b5",
    link: "https://pair4.tobetoplatform.ersinkaya.dev"
  },
  {
    iconClass: "bi bi-instagram",
    iconColor: "#e03780",
    link: "https://pair4.tobetoplatform.ersinkaya.dev"
  },
  {
    iconClass: "bi bi-github",
    iconColor: "#181717",
    link: "https://pair4.tobetoplatform.ersinkaya.dev"
  },
  {
    iconClass: "bi bi-twitter-x",
    iconColor: "#181717",
    link: "https://pair4.tobetoplatform.ersinkaya.dev"
  }
];

const examsFakeData: any[] = [
  {
    name: "Frontend",
    date: "13-01-2024",
    points: "100.00"
  },
  {
    name: "Herkes İçin Kodlama 1A Değerlendirme Sınavı",
    date: "11-10-2023",
    points: "100.00"
  },
  {
    name: "Microsoft SQL Server",
    date: "05-09-2023",
    points: "68.00"
  },
  {
    name: "Masaüstü Programlama",
    date: "06-09-2023",
    points: "76.00"
  }
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
          <ProfileDefaultCard title="Medya Hesaplarım">
            <SocialMediaAccounts data={socialMediaAccountsFakeData} />
          </ProfileDefaultCard>
        </div>
        <div className="profile-page-right-col">
          <ProfileDefaultCard title="Sınav Sonuçlarım">
            <Exams data={examsFakeData}></Exams>
          </ProfileDefaultCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
