import React from "react";
import "./AnnouncementFilter.css";

type Props = {};

const AnnouncementFilter = (props: Props) => {
  return (
    <div className="announcement-filter-component">
      <div className="announcement-filter-element">
        <div className="announcement-filter-search-box">
          <input
            className="announcement-filter-search-box-input"
            placeholder="Arama"
          />
          <button className="announcement-filter-search-box-button">
            <i className="bi bi-search announcement-filter-search-box-icon"></i>
          </button>
        </div>

        <div className="filter-by-announcement-type">
          <div className="dropdown">
            <button
              className="filter-by-announcement-type-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Tür</span>
              <i className="bi bi-chevron-down filter-by-announcement-type-icon"></i>
            </button>
            <ul className="dropdown-menu filter-by-announcement-type-menu">
              <li>
                <input
                  className="filter-by-announcement-type-menu-checkbox"
                  type="checkbox"
                ></input>
                <label className="filter-by-announcement-type-menu-content">
                  Haber
                </label>
              </li>
              <li>
                <input
                  className="filter-by-announcement-type-menu-checkbox"
                  type="checkbox"
                ></input>
                <label className="filter-by-announcement-type-menu-content">
                  Duyuru
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-by-organization-type">
          <div
            className="dropdown filter-by-organization-type-element"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <input
              className="filter-by-organization-type-input "
              placeholder="Organizasyon"
            ></input>
            <div className="filter-by-organization-type-icons">
              <i className="bi bi-three-dots-vertical filter-by-organization-type-icon"></i>
              <i className="bi bi-chevron-down filter-by-organization-type-icon"></i>
            </div>
          </div>

          <ul className="dropdown-menu filter-by-organization-type-menu">
            <li>
              <button className="filter-by-organization-type-menu-button">
                İstanbul Kodluyor
              </button>
            </li>
            <li>
              <button className="filter-by-organization-type-menu-button">
                Sinop Kodluyor
              </button>
            </li>
            <li>
              <button className="filter-by-organization-type-menu-button">
                Bursa Kodluyor
              </button>
            </li>
          </ul>
        </div>

        <div className="sorting-bar">
          <div className="dropdown">
            <button
              className="sorting-bar-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Sıralama</span>
              <i className="bi bi-chevron-down sorting-bar-icon"></i>
            </button>
            <ul className="dropdown-menu sorting-bar-menu">
              <li>
                <button>Tarihe Göre (Y - E)</button>
              </li>
              <li>
                <button>Tarihe Göre (E - Y)</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-by-read">
          <button className="read-toggle-button">
            <i className="bi bi-eye"></i>
            {/* <i className="bi bi-eye-slash-fill"></i> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementFilter;
