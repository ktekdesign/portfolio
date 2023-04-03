import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceStyleTwo = () => {
  return (
    <>
      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-info pr-50">
                <div className="info-head">
                  <h2 className="title">Web & Mobile Development</h2>
                  <p>
                    Que vous faut-il pour avoir plus de chance de votre côté pour réussir sur internet? Sans hésiter, nous pouvons vous dire qu'avoir de la volonté et une équipe technique qualifiée pour vous accompagner fera une grande différence.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Responsive Design
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Mobile App Development
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      React Web Development
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      UI / UX Design
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      ReactNative Development
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Backend Development
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/contact" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="service-right-Image"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/services/it-service1.png"
                  alt="Service Image"
                  width={676}
                  height={511}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-style-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="service-left-Image"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/services/it-service2.png"
                  alt="Service Image"
                  width={676}
                  height={460}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-info pl-50">
                <div className="info-head">
                  <h2 className="title">Digital Marketing</h2>
                  <p>
                    Positionnez vous où se trouvent vos clients. Apparaîssez et vendez!
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      SEO Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Facebook Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Social Marketing
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Email Marketing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Data Scraping
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Youtube Marketing
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/contact" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-info pr-50">
                <div className="info-head">
                  <h2 className="title">Cloud Hosting Services</h2>
                  <p>
                    Prenez controle du Cloud pour fournir une haute disponibilité de vos applications.
                  </p>
                  <p>
                    Si vous etes une startup, vous devez passer au Cloud maintenant!
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Cloud Databases
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Email Servers
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      File Storage
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Hybrid Cloud
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Website Hosting
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Backup Systems
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  <Link href="/contact" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="service-right-Image"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/services/it-service3.png"
                  alt="Service Image"
                  width={676}
                  height={440}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyleTwo;
