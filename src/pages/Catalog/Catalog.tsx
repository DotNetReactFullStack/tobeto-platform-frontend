import React from 'react'
import Banner from '../../components/Banner/Banner'
import "./Catalog.css";
import CatalogFilter from '../../components/Catalog/CatalogFilter'
import CatalogList from '../../components/Catalog/CatalogList';


type Props = {}

const Catalog = (props: Props) => {
  return (
    <>
      <Banner bannerTitle='Katalog' />
      <div className="container main-section container-page-body">
        <div className="catalog-page-left-col">
          <CatalogFilter />
        </div>
        <div className="catalog-page-right-col ">
          <CatalogList />
        </div>

      </div>
    </>
  )
}

export default Catalog;