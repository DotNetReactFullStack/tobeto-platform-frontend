import React from 'react';
import './Accordions.css';
type Props = {}

const InstructorAccordionLeft = (props: Props) => {
    return (
        <div id="instructor" className="accordion-item main-accordion">
            <h2 className="accordion-header">
                <button className="accordion-button catalog-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    Eğitmenler
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#instructor">
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
                            <input className="form-check-input" type="radio" name="flexRadioInstructor" id="flexRadioInstructor1" />
                            <label className="form-check-label catalog-button-content">
                                Engin Demiroğ
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioInstructor" id="flexRadioInstructor2" />
                            <label className="form-check-label catalog-button-content">
                                İrem Balcı
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioInstructor" id="flexRadioInstructor3" />
                            <label className="form-check-label catalog-button-content">
                                Gürkan İlişen
                            </label>
                        </li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioInstructor" id="flexRadioInstructor4" />
                            <label className="form-check-label catalog-button-content">
                                Halit Enes Kalaycı
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InstructorAccordionLeft