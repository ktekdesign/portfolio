import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Image from "next/image";
import { saira } from "../../../utils/fonts";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=mVTeauSR0IA"]}
      />

			<div className="hero-banner it-banner overly">
        <Image src="/images/webagency-computer.jpg"
          alt="laptop"
          className="hero-banner-img"
          width={1000}
          height={500}
          priority />
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                      className={saira.className}
                    >
                      Bienvenue à KTEKDESIGN
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      Agence Web Digitale
                    </p>

                    <Link 
                      href="/contact" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      Prendre Rendez-vous
                    </Link>

                    <button
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                    >
                      <i className="fa-solid fa-play me-1"></i> Youtube
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <Image
                      src="/images/christian-kpanou.png"
                      alt="Christian Kpanou"
                      width={636}
                      height={635}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;