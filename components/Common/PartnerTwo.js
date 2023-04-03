import React from "react";
import { partnersData } from "../../data/partners";

const PartnerTwo = () => {
  return (
    <>
      <div className="partner-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Loving Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            {partnersData &&
              partnersData.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner border"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="d-table">
                      <div className="d-table-cell">
                        <a href={value.link} target="_blank">
                          <Image src={value.image} alt="Partner Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerTwo;
