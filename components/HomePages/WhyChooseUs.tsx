import React, { Dispatch, SetStateAction, useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { saira } from "../../utils/fonts";

const WhyChooseUs = () => {
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=mVTeauSR0IA"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two pl-0 mt-0"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="section-title">
                  <h2 className={saira.className}>Pourquoi nous choisir?</h2>
                  <p>
                    Nous pouvons vous dire que si vous n'êtes pas satisfait vous serez automatiquement remboursé mais tous nos clients ont toujours été satisfaits alors nous allons vous énumerez d'autres raisons.
                  </p>
                </div>

                <div className="about-text">
                  <h3 className={saira.className}>Qui sommes-nous?</h3>
                  <p>
                    Nous avons contribué à la croissance de plusieurs entreprises au plan continental ainsi qu'à l'international. Notre équipe est lidérée par <a href="https://www.linkedin.com/in/christian-kpanou/" target="_blank"><b>Christian Kpanou</b></a> qui collabore à l'international avec plusieurs startups dont la capitalisation surpasse le milliard de dollars. 
                  </p>
                </div>

                <div className="about-text">
                  <h3 className={saira.className}>Notre Histoire</h3>
                  <p>
                    En 8 ans d’activité, nous avons developpé plusieurs grands projets en Afrique dont les applications web et Android TchadCarriere qui totalisent plus 25.000 téléchargements dans la PlayStore et plus de 500.000 visites par mois sur le site. Notre savoir-faire et notre réputation ne sont plus à démontrer auprès de nos clients qui sont satisfaits de nos services.
                  </p>
                  <p> 
                    Et vous? Quel est votre projet? En terceriser le développement pourrait être plus avantageux aussi bien techniquement que financièrement que de recruter des developpeurs à temps plein.
                  </p>
                </div>

                <div className="about-text">
                  <h3 className={saira.className}>Nos Ambitions</h3>
                  <p>
                    Commencer un business en ligne est souvent beaucoup plus compliqué que ce qui est décrit par les influenceurs. Vous avez besoin d'une main d'oeuvre qualifiée.
                  </p>
                  <p>
                    Notre ambition est de donner à tous les porteurs de projets l'opportunité de débuter ou continuer l'aventure du web avec des professionnels réellement qualifiés pour soutenir la croissance de leurs projets.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image right-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Image
                  src="/images/formation.jpg"
                  alt="image"
                  className="rounded-10"
                  width={526}
                  height={316}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
