import React from "react";
import './CatalogFilter.css';
import CategoryLeft from './CatalogAccordions/CategoryAccordionLeft';
import LearningLeft from './CatalogAccordions/LearningAccordionLeft';
import LevelLeft from './CatalogAccordions/LevelAccordionLeft';
import SubjectLeft from './CatalogAccordions/SubjectAccordionLeft';
import InstructorLeft from "./CatalogAccordions/InstructorAccordionLeft";

type Props = {}

const CatalogFilter = (props: Props) => {
    return (
        <div className="catalog-filter">
            <div className="catalog-filter-title">
                <h4>Filtrele</h4>
            </div>

            <div className="catalog-for-me">
                <button className="catalog-for-me-button">Bana Özel</button>
            </div>
            {/* ------------ */}

            {/* ------------ */}
            <div className="accordion">
                <CategoryLeft />
                <LearningLeft />
                <LevelLeft />
                <SubjectLeft />
                <InstructorLeft />
            </div>
        </div>
    )
}

export default CatalogFilter