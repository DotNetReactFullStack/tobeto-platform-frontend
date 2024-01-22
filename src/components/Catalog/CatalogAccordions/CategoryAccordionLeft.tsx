import React from "react";


import './Accordions.css';


type Props = {}

const CategoryAccordionLeft = (props: Props) => {
    return (

        <div id="categoy" className="accordion-item main-accordion">
            <h2 className="accordion-header">
                <button className="accordion-button catalog-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Kategori
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#categoy">
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
                            <input className="form-check-input" type="radio" name="flexRadioCategory" id="flexRadioCategory1" />
                            <label className="form-check-label catalog-button-content">
                                Tüm Eğitimler
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioCategory" id="flexRadioCategory2" />
                            <label className="form-check-label catalog-button-content">
                                Ücretli Eğitimler
                            </label></li>
                        <li>
                            <input className="form-check-input" type="radio" name="flexRadioCategory" id="flexRadioCategory3" />
                            <label className="form-check-label catalog-button-content">
                                Ücretsiz Eğitimler
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default CategoryAccordionLeft