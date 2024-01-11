import React from "react";
import "./AnnouncementDetailModal.css";

type Props = {};

const AnnouncementDetailModal = (props: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id="exampleModalAnnouncementId1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              30 Ocak Online Hoşgeldin Buluşması-5
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h4>Sevgili İstanbul Kodluyor'lu,</h4>
            <br />
            <br />
            30 Ocak salı günü saat 11.00'de aramıza yeni katılan adaylar ile
            online olarak bir araya geleceğimiz için heyecanlıyız.
            <br />
            <br />
            <br />
            İlk etapta tüm süreci birlikte konuşup, neler yapmanız gerektiğini
            adım adım anlatacağız. "Eğitimlerim" bölümündeki size tanımlanmış
            videoları izleyebilirsiniz. "Eğitime Git" butonuna tıklayarak online
            oturumların saatini ve içeriğini görebilirsiniz. Online oturumlara
            saati geldiğinde ilgili yerden tıklayarak katılabilirsiniz. Ayrıca
            bir mail gönderilmeyecektir. Hoşgeldin Buluşması-5 etkinliğine
            katılımınızı bekliyoruz. Platformu takip etmek adayların
            sorumluluğundadır.
            <br />
            <br />
            <br />
            Not: Eğer "Eğitimlerim" bölümünde size atanmış Hoşgeldin Buluşması-
            5 başlığını görmüyorsanız, 29 Ocak pazartesiye kadar beklemenizi
            rica ederiz. 29 Ocak günü hala göremiyorsanız
            istanbulkodluyor@tobeto.com adresine mail atabilirsiniz.
            <br />
            <br />
            <br />
            Sevgiler
          </div>

          <div className="modal-footer">TOBETO | İstanbulKodluyor</div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetailModal;
