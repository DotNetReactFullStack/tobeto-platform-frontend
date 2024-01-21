import "./SuccessModelCard.css";
import { Link } from "react-router-dom";

type Props = {};

const SuccessModelCard = (props: Props) => {
  return (
    <div className="success-model-card">
      <div className="success-model-card-header">
        <h3 className="text-center">
          <span className="success-model-card-text">
            Tobeto İşte Başarı Modeli
          </span>
        </h3>
      </div>
      <div className="success-model-card-body">
        <h4 className="text-center">
          80 soru ile yetkinliklerini
          <span className="success-model-card-text"> ölç, </span>
          önerilen eğitimleri
          <span className="success-model-card-text"> tamamla, </span>
          rozetini
          <span className="success-model-card-text"> kazan. </span>
        </h4>
      </div>
      <div className="success-model-card-footer">
        <Link to="/my-profile" className="success-model-card-footer-link">
          Raporu Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default SuccessModelCard;
