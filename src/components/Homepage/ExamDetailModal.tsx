import React from "react";

type Props = {};

const ExamDetailModal = (props: Props) => {
  return (
    <div
      className="modal fade"
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button type="button" className="btn btn-primary">
              Raporu Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailModal;
