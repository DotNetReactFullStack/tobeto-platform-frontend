import React from "react";
import "./ExamDetailModal.css";

type Props = {};

const ExamDetailModal = (props: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Herkes için Kodlama 1B Değerlendirme Sınavı
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h4>Sevgili Adayımız,</h4>
            <br />
            Herkes için Kodlama Eğitimi'ni tamamladığınız için tebrik ederiz. Bu
            eğitim sonrası bir sonraki aşamaya geçiş için 25 sorudan oluşan bir
            değerlendirme sınavımız bulunmaktadır.
            <br />
            <br />
            Bu test her kullanıcı için sadece 1 kez sunulmakta olup 45 dakika
            içinde tamamlanması gerekmektedir.
            <br />
            <br />
            <br />
            Tüm değerlendirme kriterleri sonrası Mesleki Gelişim Eğitimlerine
            geçişiniz ile ilgili bilgilendirileceksiniz.
            <br />
            <br />
            <br />
            Sevgiler
            <br />
            TOBETO
          </div>
          <div className="modal-body exam-detail">
            <span>Sınav Süresi : 45 Dakika</span>
            <br />
            <span>Soru Sayısı : 25</span>
            <br />
            <span>Soru Tipi : Çoktan Seçmeli</span>
          </div>
          <div className="modal-footer exam-detail-modal-footer-buttons">
            <button
              type="button"
              className="exem-detail-modal-close-button"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button
              type="button"
              className="exem-detail-modal-view-report-button"
            >
              Raporu Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailModal;
