import React from "react";
import './Accordions.css';
type Props = {}

const LearningAccordionLeft = (props: Props) => {
    return (
        <div id="learning" className="accordion-item main-accordion">
            <h2 className="accordion-header">
                <button className="accordion-button catalog-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Eğitimler
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#learning">
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
                            <input className="form-check-input" type="radio" name="flexRadioLearning" id="flexRadioLearning1" />
                            <label className="form-check-label catalog-button-content">
                                Tüm Eğitimler
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLearning" id="flexRadioLearning2" />
                            <label className="form-check-label catalog-button-content">
                                Dijital Gelişim
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioLearning" id="flexRadioLearning3" />
                            <label className="form-check-label catalog-button-content">
                                Profesyonel Gelişim
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LearningAccordionLeft