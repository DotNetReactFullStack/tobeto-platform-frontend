import React from "react";
import "./Announcement.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import AnnouncementElement from "./AnnouncementElement";
import AnnouncementDetailModal from "./AnnouncementDetailModal";

type Props = {};

const announcementFakeData: any[] = [
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "30 Ocak Online Hoşgeldin Buluşması-5",
    publishDate: "06-01-2024",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "Ocak Ayı Tercih Formu Bilgilendirmesi",
    publishDate: "12.01.2024",
  },
  {
    announcementType: "Duyuru",
    organizationType: "Sinop Kodluyor",
    title: "11 Ocak Kampüs Buluşması",
    publishDate: "06-01-2024",
  },
  {
    announcementType: "Duyuru",
    organizationType: "Sinop Kodluyor",
    title: "Yeni Grupların Discord'a Katılımı",
    publishDate: "07.12.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "4 Aralık Online Hoşgeldin Buluşması",
    publishDate: "29.11.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "Önemli Bilgilendirme",
    publishDate: "23.11.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "Yeni Gelenler için Bilgilendirme",
    publishDate: "17.11.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "Sinop Kodluyor",
    title: "25 Kasım Kampüs Buluşması",
    publishDate: "04.11.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "3. Gruplar için Bilgilendirme",
    publishDate: "30.10.2023",
  },
  {
    announcementType: "Duyuru",
    organizationType: "İstanbul Kodluyor",
    title: "İki Arada Bir Motivasyon :)",
    publishDate: "05.10.2023",
  },
];

const Announcement = (props: Props) => {
  return (
    <>
      <div className="announcement-component">
        {announcementFakeData.slice(0, 3).map((value, index) => (
          <AnnouncementElement
            key={index}
            announcementType={value.announcementType}
            organizationType={value.organizationType}
            title={value.title}
            publishDate={value.publishDate}
          />
        ))}
      </div>
      <ShowMoreButton redirectUrl="/announcements" />
      <AnnouncementDetailModal />
    </>
  );
};

export default Announcement;
