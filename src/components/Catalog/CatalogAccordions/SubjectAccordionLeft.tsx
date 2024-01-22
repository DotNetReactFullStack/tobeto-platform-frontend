import React from 'react';
import './Accordions.css';

type Props = {}

const SubjectAccordionLeft = (props: Props) => {
    return (
        <div id="subject" className="accordion-item main-accordion">
            <h2 className="accordion-header">
                <button className="accordion-button catalog-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Konu
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#subject">
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
                            <input className="form-check-input" type="radio" name="flexRadioSubject" id="flexRadioSubject1" />
                            <label className="form-check-label catalog-button-content">
                                C#
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioSubject" id="flexRadioSubject2" />
                            <label className="form-check-label catalog-button-content">
                                Java
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioSubject" id="flexRadioSubject3" />
                            <label className="form-check-label catalog-button-content">
                                Javascript
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubjectAccordionLeft