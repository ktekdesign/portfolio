import React, { FC, memo } from "react"
import Link from "next/link"
import { FunFact } from "../../data/interfaces/FunFact"
import Heading from "./Heading"
import Container from "./Container"

const FunFacts: FC<{ funFacts: FunFact[] }> = ({ funFacts }) => (
  <Container
    className="funfacts-area ptb-100 bg-fcfbfb"
    background={{ src: "/images/map.png", alt: "map" }}
  >
    <Heading type="h2" isSectionHeader>
      Quelles sont vos attentes?
    </Heading>
    <p className="text-center pb-100">
      Nous vous faisons des recommandations en accord avec vos attentes et votre
      capacité d&apos;investissement. Peu importe la taille de votre projet,
      prenez la peine d&apos;échanger avec nous. Parfois, il est très difficile
      de savoir où commencer. Nous avons une large expérience pour vous apporter
      quelques conseils utiles.
    </p>

    <div className="row justify-content-center">
      {funFacts.map(({ iconName, number, shortText }, key) => (
        <div className="col-lg-3 col-sm-6" key={key}>
          <div className="funfact" data-aos="fade-up" data-aos-duration="1200">
            <i className={iconName}></i>
            <Heading type="h3">{number}</Heading>
            <p>{shortText}</p>
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
      <Heading type="h3">Avez-vous des questions?</Heading>
      <p>N&apos;hésitez à nous contacter</p>
      <Link href="/contact" className="btn btn-primary">
        Contact
      </Link>
    </div>
  </Container>
)

export default memo(FunFacts)
