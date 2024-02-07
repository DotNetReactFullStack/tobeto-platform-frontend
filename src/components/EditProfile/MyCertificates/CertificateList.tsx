import React from "react";
import "./CertificateList.css";
import DeleteModal from "../Modals/DeleteModal";

type Props = {};

const certificateListFakeData: any[] = [
  {
    certificateId: "certificate1",
    title: ".Net Sertifika.pdf",
    fileTypeIcon: "bi-file-earmark-pdf-fill",
    date: "01.01.2024",
  },
  {
    certificateId: "certificate2",
    title: ".React Sertifika.pdf",
    fileTypeIcon: "bi-file-earmark-pdf-fill",
    date: "02.01.2024",
  },
  {
    certificateId: "certificate3",
    title: ".TypeScript Sertifika.pdf",
    fileTypeIcon: "bi-file-earmark-pdf-fill",
    date: "03.01.2024",
  },
];

const CertificateList = (props: Props) => {
  return (
    <div className="certificate-list input-container-w-100">
      <table className="certificate-list-table input-container-w-100">
        <thead className="certificate-list-table-header">
          <tr>
            <th>Dosya Adı</th>
            <th className="text-center">Dosya Türü</th>
            <th>Dosya Tarih</th>
            <th>Dosya İşlem</th>
          </tr>
        </thead>
        <tbody className="certificate-list-table-body">
          {certificateListFakeData.map((value, index) => (
            <tr key={index}>
              <td className="certificate-list-title-td">{value.title}</td>
              <td className="certificate-list-file-icon-td">
                <i
                  className={
                    "bi certificate-list-file-icon " + value.fileTypeIcon
                  }
                ></i>
              </td>
              <td className="certificate-list-date-td">{value.date}</td>
              <td className="certificate-list-buttons-td">
                <div className="certificate-list-buttons">
                  <button className="certificate-file-button">
                    <i className="bi bi-file-earmark-break certificate-file-button-icon"></i>
                  </button>
                  <button
                    className="certificate-delete-button"
                    data-bs-toggle="modal"
                    data-bs-target={"#" + value.certificateId}
                  >
                    <i className="bi bi-trash3 certificate-delete-button-icon"></i>
                  </button>
                  <DeleteModal
                    deleteModalId={value.certificateId}
                    deleteModalTitle="sertifikayı"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateList;
