import "./Assessments.css";
import Banner from "../../components/Banner/Banner";
import SuccessModelCard from "../../components/Assessments/SuccessModelCard";
import InfoCard from "../../components/Assessments/InfoCard";
import SuccessExamCard from "../../components/Assessments/SuccessExamCard";

type Props = {};

const Assessments = (props: Props) => {
  return (
    <>
      <Banner bannerTitle="Değerlendirmeler" />
      <div className="container main-section">
        <div className="container assessments-font-properties">
          <h1 className="text-center">
            <span className="assessments-text">Yetkinlik</span>lerini ücretsiz
            ölç,
            <span className="assessments-text"> bilgi</span>lerini test et.
          </h1>
        </div>
        <div className="container assessments-font-properties">
          <SuccessModelCard />
        </div>
        <div className="assessments-page-body">
          <div className="assessments-page-left-col">
            <InfoCard></InfoCard>
          </div>
          <div className="assessments-page-right-col">
            <SuccessExamCard></SuccessExamCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessments;
