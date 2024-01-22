import React from "react";
import "./CatalogList.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import CatalogElement from "./CatalogElement";


type Props = {};

const catalogElementFakeData: any[] = [
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: ".NET & React Fullstack - 1A",
        instructor: "Engin Demiroğ",
        isContinue: false,
        isComplete: false,
    },
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: "Java & React Fullstack - 1A",
        instructor: "Halit Enes Kalaycı",
        isContinue: false,
        isComplete: false,
    },
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: ".NET & React Fullstack - 1B",
        instructor: "Engin Demiroğ",
        isContinue: true,
        isComplete: false,
    },
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: "Java & React Fullstack - 1B",
        instructor: "Halit Enes Kalaycı",
        isContinue: true,
        isComplete: false,
    },
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: "Yazılım Test - 1A",
        instructor: "İrem Balcı",
        isContinue: true,
        isComplete: true,
    },
    {
        imageUrl: "/assets/images/catalog-img.jpg",
        name: "Yazılım Test - 1B",
        instructor: "Gürkan İlişen",
        isContinue: true,
        isComplete: true,
    }
];

const Catalog = (props: Props) => {
    return (
        <>
            <div className="catalog-component">
                {catalogElementFakeData.slice(0, 12).map((value, index) => (
                    <CatalogElement
                        key={index}
                        imageUrl={value.imageUrl}
                        name={value.name}
                        instructor={value.instructor}
                    />
                ))}
            </div>
            {
                (catalogElementFakeData.length > 3)
                    ? <ShowMoreButton redirectUrl="/my-catalogs" />
                    : <></>
            }
        </>
    );
};

export default Catalog;