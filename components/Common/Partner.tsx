import React from "react";
import Image from "next/image";
import { partnersData } from "../../data/partners";

const Partner = () =>
  <div className="partner-area pt-100 pb-60">
    <div className="container">
      <div className="section-title">
        <h2>De grandes marques nous font confiance</h2>
        <p>
          Nous serons fiers d'exhiber votre marque dans notre liste de meilleurs clients.
        </p>
      </div>

      <div className="row align-items-center justify-content-center">
        {partnersData &&
          partnersData.map((partner, i) => (
            <div className="col-lg-2 col-6 col-sm-4" key={i}>
              <div
                className="single-partner"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={partner.aosDelay}
              >
                <a href={partner.link} target="_blank">
                  <Image src={partner.image} fill alt="Partner Image" />
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>

export default Partner;
