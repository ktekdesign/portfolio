import Link from "next/link"
import React, { memo } from "react"
import Container from "../Common/Container"
import Heading from "../Common/Heading"
import SocialLinks from "../Layouts/SocialLinks"

const ContactInfo = () => (
  <Container className="contact-info-area pt-100 pb-70">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div className="contact-info-box">
          <div className="icon">
            <i className="pe-7s-mail"></i>
          </div>
          <Heading type="h3">Envoyez un email à</Heading>
          <p>
            <Link href="mailto:contact@ktekdesign.com">
              contact@ktekdesign.com
            </Link>
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="contact-info-box">
          <div className="icon">
            <i className="pe-7s-map-2"></i>
          </div>
          <Heading type="h3">Nos Réseaux sociaux</Heading>
          <div className="single-footer-widget">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="contact-info-box">
          <div className="icon">
            <i className="pe-7s-call"></i>
          </div>
          <Heading type="h3">Whatsapp</Heading>
          <p>
            <Link href="https://api.whatsapp.com/send?phone=5541997527702">
              +55 (41) 997-527-702
            </Link>
          </p>
        </div>
      </div>
    </div>
  </Container>
)

export default memo(ContactInfo)
