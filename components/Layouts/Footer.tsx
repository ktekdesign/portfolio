import React, { memo } from "react"
import Link from "next/link"
import Logo from "../Common/Logo"
import SocialLinks from "./SocialLinks"
import Heading from "../Common/Heading"
import Container from "../Common/Container"
import LatestNewsList from "../Common/LatestNewsList"

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container className="footer-area footer-dark" as="footer">
    <div className="row justify-content-center ptb-100">
      <div className="col-lg-3 col-sm-6">
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="logo">
            <Logo />
          </div>

          <p>
            Vous êtes indépendant, petite, moyenne ou grande entreprise ? Vous
            êtes au bon endroit. Laissez nous vous émerveiller avec la qualité
            de nos services en facilitant la croissance de votre entreprise.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div
          className="single-footer-widget ml-4 pl-5"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <Heading type="h3">Nos Entreprises</Heading>

          <ul className="list">
            <li>
              <Link href="/">KTEKDESIGN</Link>
            </li>
            <li>
              <Link href="https://ktekhosting.com">HÉBERGEMENT WEB</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@christiankpanou">
                FORMATIONS
              </Link>
            </li>
            <li>
              <Link href="#">IMPORT-EXPORT</Link>
            </li>
            <li>
              <Link href="#">ACTIONS SOCIALES</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div
          className="single-footer-widget ml-4"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <Heading type="h3">Publications Récentes</Heading>
          <LatestNewsList />
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div
          className="single-footer-widget"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <Heading type="h3">Contact</Heading>

          <ul className="get-in-touch">
            <li className="pt-2">
              <i className="fa-solid fa-headset"></i>
              <Link href="https://api.whatsapp.com/send?phone=5541997527702">
                +55 (41) 997-527-702
              </Link>
            </li>
            <li className="pt-2">
              <i className="fa-solid fa-envelope"></i>
              <Link href="mailto:contact@ktekdesign.com">
                contact@ktekdesign.com
              </Link>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    </div>

    <div className="copyright-area">
      <p>
        Tous Droits Réservés. Copyright &copy; 2015 - {currentYear} | Développé
        par :&nbsp;
        <Link href="https://ktekdesign.com">KTEKDESIGN</Link>
      </p>
    </div>
  </Container>
)

export default memo(Footer)
