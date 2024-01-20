import React, { useRef, ChangeEvent } from "react";
import "./UploadCertificate.css";

type Props = {};

const UploadCertificate = (props: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /*   handleFileChange fonksiyonunun parametre tipini ChangeEvent<HTMLInputElement> olarak belirttik. Bu, onChange olayının bir input elemanında gerçekleştiğini belirtir ve tip güvenliği sağlar.*/

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      // Burada dosya işlemleri yapılacak.
      console.log("Selected File:", selectedFile.name);
    }
  };
  return (
    <div className="upload-certificate input-container-w-100">
      <div className="upload-certificate-header">
        <span>Sertifikalarım</span>
      </div>
      <div className="upload-certificate-body"
        onClick={handleImageClick}>
        <div className="upload-certificate-file-input">
          <img
            className="upload-file-image"
            src={process.env.PUBLIC_URL + "/assets/images/upload.svg"}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <span className="upload-file-text">Dosya Yükle</span>
        </div>
      </div>
    </div>
  );
};

export default UploadCertificate;
