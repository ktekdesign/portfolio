import React from "react"
import Link from "next/link"
import Image from "next/image"
import { funFactsData } from "../../data/funfacts"
import { saira } from "../../utils/fonts"

const FunFacts = () => (
  <div className="funfacts-area ptb-100 bg-fcfbfb">
    <Image src="/images/map.png" alt="map" fill />
    <div className="container">
      <div className="section-title">
        <h2 className={saira.className}>Quelles sont vos attentes?</h2>
        <p>
          Nous vous faisons des recommandations en accord avec vos attentes et
          votre capacité d&apos;investissement. Peu importe la taille de votre
          projet, prenez la peine d&apos;échanger avec nous. Parfois, il est
          très difficile de savoir où commencer. Nous avons une large expérience
          pour vous apporter quelques conseils utiles.
        </p>
      </div>

      <div className="row justify-content-center">
        {funFactsData?.slice(0, 4).map((funFact, i) => (
          <div className="col-lg-3 col-sm-6" key={i}>
            <div
              className="funfact"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={funFact.aosDelay}
            >
              <i className={funFact.iconName}></i>
              <h3 className={saira.className}>{funFact.number}</h3>
              <p>{funFact.shortText}</p>
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
        <h3 className={saira.className}>Avez-vous des questions?</h3>
        <p>N&apos;hésitez à nous contacter</p>
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default React.memo(FunFacts)
