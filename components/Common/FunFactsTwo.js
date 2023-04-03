import React from "react";
import Link from "next/link";
import Image from "next/image";
import { funFactsData } from "../../data/funfacts";

const FunFactsTwo = () => {
  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Quelles sont vos attentes?</h2>
            <p>
              Nous vous faisons des recommandations en accord avec vos attentes et votre capacité d'investissement. Peu importe la taille de votre projet, prenez la peine d'échanger avec nous. Parfois, il est très difficile de savoir où commencer. Nous avons une large expérience pour vous apporter quelques conseils utiles.
            </p>
          </div>

          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="funfact"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      {value.number}
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>

          <div 
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <h3>Avez-vous des questions?</h3>
            <p>N'hésitez à nous contacter</p>

            <Link href="/contact" className="btn btn-primary">
              Contact
            </Link>
          </div>

          <div className="map-bg">
            <Image src="/images/map.png" alt="map" width={910} height={443} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;
