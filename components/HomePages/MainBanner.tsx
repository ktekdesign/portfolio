import React, { memo, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import LightBoxContext from "../../context/lightBoxContext"
import Heading from "../Common/Heading"
import Container from "../Common/Container"

const MainBanner = () => {
  const { toggler, setToggler, setVideo } = useContext(LightBoxContext)

  return (
    <Container
      className="hero-banner it-banner overly"
      background={{
        src: "/images/webagency-computer.jpg",
        alt: "laptop",
        priority: true,
      }}
    >
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="main-banner-content">
            <Heading
              type="h1"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Bienvenue à KTEKDESIGN
            </Heading>

            <p data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
              Agence Web Digitale - Vous imaginez, nous créons!
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Prendre Rendez-vous
            </Link>

            <button
              onClick={() => {
                setVideo(["https://www.youtube.com/embed/mVTeauSR0IA"])
                setToggler(!toggler)
              }}
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
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <Image
              src="/images/christian-kpanou.png"
              alt="Christian Kpanou"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default memo(MainBanner)
