import React from "react";
import Banner from "../../components/Banner/Banner";
import LearningPathFilter from "../../components/LearningPath/LearningPathFilter";
import LearningPathNav from "../../components/LearningPath/LearningPathNav";
import Pagination from "../../components/Pagination/Pagination";

type Props = {};

const LearningPaths = (props: Props) => {
  return (
    <>
      <Banner bannerTitle="Eğitimlerim" />
      <div className="container main-section">
        <LearningPathFilter />
        <LearningPathNav />
        <Pagination />
      </div>
    </>
  );
};

export default LearningPaths;
