import React from "react";
import "./Announcement.css";
import AnnouncementDetailModal from "./AnnouncementDetailModal";
import ShowMoreButton from "../../ShowMoreButton/ShowMoreButton";

type Props = {};

const Announcement = (props: Props) => {
  return (
    <>
      <div className="announcement-component">
        <div className="announcement-element">
          <div className="announcement-header">
            <div className="announcement-header-left-side">
              <span>Duyuru</span>
            </div>
            <div className="announcement-header-right-side">
              <span>İstanbul Kodluyor</span>
            </div>
          </div>
          <div className="announcement-content">
            <span className="announcement-title">
              30 Ocak Online Hoşgeldin Buluşması-5
            </span>
          </div>
          <div className="announcement-footer">
            <div className="announcement-footer-left-side">
              <i className="bi bi-calendar3 calendar-color"></i>
              <span className="announcement-publish-date">06-01-2024</span>
            </div>
            <div className="announcement-footer-right-side">
              <button
                className="btn announcement-read-more-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Devamını oku
              </button>
            </div>
          </div>
          <AnnouncementDetailModal />
        </div>

        <div className="announcement-element">
          <div className="announcement-header">
            <div className="announcement-header-left-side">
              <span>Duyuru</span>
            </div>
            <div className="announcement-header-right-side">
              <span>İstanbul Kodluyor</span>
            </div>
          </div>
          <div className="announcement-content">
            <span className="announcement-title">
              30 Ocak Online Hoşgeldin Buluşması-5
            </span>
          </div>
          <div className="announcement-footer">
            <div className="announcement-footer-left-side">
              <i className="bi bi-calendar3 calendar-color"></i>
              <span className="announcement-publish-date">06-01-2024</span>
            </div>
            <div className="announcement-footer-right-side">
              <button
                className="btn announcement-read-more-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Devamını oku
              </button>
            </div>
          </div>
          <AnnouncementDetailModal />
        </div>

        <div className="announcement-element">
          <div className="announcement-header">
            <div className="announcement-header-left-side">
              <span>Duyuru</span>
            </div>
            <div className="announcement-header-right-side">
              <span>İstanbul Kodluyor</span>
            </div>
          </div>
          <div className="announcement-content">
            <span className="announcement-title">
              30 Ocak Online Hoşgeldin Buluşması-5
            </span>
          </div>
          <div className="announcement-footer">
            <div className="announcement-footer-left-side">
              <i className="bi bi-calendar3 calendar-color"></i>
              <span className="announcement-publish-date">06-01-2024</span>
            </div>
            <div className="announcement-footer-right-side">
              <button
                className="btn announcement-read-more-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Devamını oku
              </button>
            </div>
          </div>
          <AnnouncementDetailModal />
        </div>
      </div>

      <ShowMoreButton />
    </>
  );
};

export default Announcement;
