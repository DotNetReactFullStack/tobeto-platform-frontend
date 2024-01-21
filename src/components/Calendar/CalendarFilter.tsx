
import "./CalendarFilter.css";
import React, { useState } from "react";

type Props = {};

const CalendarFilter = (props: Props) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className="container main-section calendar-filter-component">
                <div className="calendar-filter-search-element">
                    <div className="calendar-filter-search-box">
                        <input
                            className="calendar-filter-search-box-input"
                            placeholder="Eğitim Arama"
                        />
                        <button
                            className="calendar-filter-search-box-button"
                            onClick={handleDropdownClick}
                        >
                            <i className="bi bi-search calendar-filter-search-box-icon"></i>
                        </button>
                    </div>
                </div>

                <div className="calendar-filter-select-instructor-element">
                    <div className="sorting-bar select-instructor">
                        <div className="dropdown">
                            <button
                                className="sorting-bar-button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div className="sorting-bar-calender-filter-title">
                                    Eğitmen Seçiniz
                                </div>
                                <i className="bi bi-chevron-down sorting-bar-icon"></i>
                            </button>
                            <ul className="dropdown-menu sorting-bar-menu">
                                <li>
                                    <button>Engin Demiroğ</button>
                                </li>
                                <li>
                                    <button>Halit Enes Kalaycı</button>
                                </li>
                                <li>
                                    <button>İrem Balcı</button>
                                </li>
                                <li>
                                    <button>Gürkan İlişen</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="calendar-filter-situation-of-education">
                    <div className="sorting-bar situation-of-education">
                        <div className="dropdown">
                            <button
                                className="sorting-bar-button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div className="sorting-bar-calender-filter-title">
                                    Eğitim Durumu
                                </div>
                                <i className="bi bi-chevron-down sorting-bar-icon"></i>
                            </button>
                            <ul className="dropdown-menu sorting-bar-menu">
                                <li>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck1"
                                        />
                                        <label className="form-check-label">Bitmiş Dersler</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck2"
                                        />
                                        <label className="form-check-label">
                                            Devam Eden Dersler
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck3"
                                        />
                                        <label className="form-check-label">
                                            Satın Alınmış Dersler
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck4"
                                        />
                                        <label className="form-check-label">
                                            Başlamamış Dersler
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarFilter;