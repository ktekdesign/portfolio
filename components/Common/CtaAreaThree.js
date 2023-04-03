import React from "react";
import Link from "next/link";

const CtaAreaThree = () => {
  return (
    <>
      <div className="cta-area-two dark-style ptb-100">
        <div className="container">
          <div 
            className="cta-content"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span>Quelle est la prochaîne étape?</span>
            <h3>Êtes-vous prêt? Réalisons ensemble votre projet!</h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Link href="/contact" className="default-btn-two">
              Solliciter une réunion <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaThree;
