import React from "react";
import Image from "next/image";
import { saira } from "../../utils/fonts";

const PageBanner = ({ pageTitle, BGImage }) => {
  return (
    <>
      <div className="page-title-area">
        <Image src={BGImage} className="page-title-img" fill />
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h1 className={`page-title ${saira.className}`}>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
