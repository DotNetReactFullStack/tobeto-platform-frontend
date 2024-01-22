import React from 'react';
import './Accordions.css';
type Props = {}

const LevelAccordionLeft = (props: Props) => {
    return (
        <div id="level" className="accordion-item main-accordion">
            <h2 className="accordion-header">
                <button className="accordion-button catalog-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    Seviye
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#level">
                <div className="accordion-body">
                    <div className="dropdown-item catalog-filter-search-box">
                        <input
                            className="catalog-filter-search-box-input"
                            placeholder="Arama"
                        />
                        <button className="catalog-filter-search-box-button">
                            <i className="bi bi-search catalog-filter-search-box-icon"></i>
                        </button>
                    </div>
                    <ul className="accordion-list">
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLevel" id="flexRadioLevel1" />
                            <label className="form-check-label catalog-button-content">
                                Tüm Seviyeler
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLevel" id="flexRadioLevel2" />
                            <label className="form-check-label catalog-button-content">
                                Başlangıç
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLevel" id="flexRadioLevel3" />
                            <label className="form-check-label catalog-button-content">
                                Orta
                            </label>
                        </li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLevel" id="flexRadioLevel4" />
                            <label className="form-check-label catalog-button-content">
                                İleri
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LevelAccordionLeft