import React from "react";
import Link from "next/link";
import { servicesData } from "../../data/services";
import { saira } from "../../utils/fonts";

const OurServices = (props) => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          {props?.title &&
            <div className="section-title">
              <h2 className={saira.className}>Nos Services</h2>
              <p>
                Première iniciative de notre groupe lancée en Octobre 2015, notre objectif est d’offrir une alternative crédible aux porteurs de projets numériques qui n’ont pas le savoir-faire technique requis pour en assurer l’exécution.
              </p>
            </div>
          }
          <div className="row justify-content-center">
            {servicesData?.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb">
                    <i className={value.iconName}></i>
                    <h3 className={saira.className}>
                      <Link href={value.viewDetails}>{value.pageTitle}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;