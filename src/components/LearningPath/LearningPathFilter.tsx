import React from "react";
import "./LearningPathFilter.css";

type Props = {};

const LearningPathFilter = (props: Props) => {
  return (
    <div className="container main-section learning-path-filter-component">
      <div className="learning-path-filter-element">
        <div className="learning-path-filter-search-box">
          <input
            className="learning-path-filter-search-box-input"
            placeholder="Arama"
          />
          <button className="learning-path-filter-search-box-button">
            <i className="bi bi-search learning-path-filter-search-box-icon"></i>
          </button>
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
                <button>Ada Göre (A - Z)</button>
              </li>
              <li>
                <button>Ada Göre (Z - A)</button>
              </li>
              <li>
                <button>Tarihe Göre (Y - E)</button>
              </li>
              <li>
                <button>Tarihe Göre (E - Y)</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathFilter;
