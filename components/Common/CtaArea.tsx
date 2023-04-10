import React, { memo } from "react"
import Link from "next/link"
import Heading from "./Heading"
import Container from "./Container"

const CtaAreaThree = () => (
  <Container
    className="cta-area-two dark-style ptb-100"
    background={{ src: "/images/cta-bg.jpg", alt: "CTA Background Image" }}
  >
    <div
      className="cta-content"
      data-aos="fade-in"
      data-aos-duration="1200"
      data-aos-delay="200"
    >
      <span>Quelle est la prochaîne étape?</span>
      <Heading type="h3">
        Êtes-vous prêt? Réalisons ensemble votre projet!
      </Heading>
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
  </Container>
)

export default memo(CtaAreaThree)
