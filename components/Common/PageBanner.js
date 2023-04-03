import React from "react";
import Image from "next/image";

const PageBanner = ({ pageTitle, BGImage }) => {
  return (
    <>
      <div className="page-title-area">
        <Image src={BGImage} className="page-title-img" width={1024} height={300} />
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
