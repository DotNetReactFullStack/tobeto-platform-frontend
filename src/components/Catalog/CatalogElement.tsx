import React from "react";
import "./CatalogElement.css";

type Props = {
    imageUrl: string;
    name: string;
    instructor: string;
};

const CatalogElement = ({ imageUrl, name, instructor }: Props) => {
    return (
        <div className="catalog-element">
            <div className="catalog-element-cover-photo">
                <img
                    className="catalog-element-img"
                    src={process.env.PUBLIC_URL + imageUrl}
                />
            </div>
            <div className="catalog-element-body">
                <div className="catalog-element-title">{name}</div>
                <div className="catalog-element-publish-instructor">{instructor}</div>
            </div>
            <div className="catalog-element-footer">
                <button className="catalog-element-button">Eğitime Git</button>
            </div>
        </div>
    );
};

export default CatalogElement;