import React from "react"
import NavbarDark from "../components/Layouts/NavbarDark"
import MainBanner from "../components/HomePages/MainBanner"
import OurServices from "../components/HomePages/OurServices"
import ServiceStyleTwo from "../components/HomePages/ServiceStyleTwo"
import WhyChooseUs from "../components/HomePages/WhyChooseUs"
import FunFactsTwo from "../components/Common/FunFactsTwo"
import LatestNewsSliderTwo from "../components/Common/LatestNewsSliderTwo"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/Layouts/FooterDark"
import Head from "next/head"

const Home = () => (
  <>
    <Head>
      <title>Agence Web Digitale - KTEKDESIGN</title>
      <meta
          name="description"
          content="Nous sommes spécialisés dans la création de sites web, de stratégies de marketing digital et de développement d'applications mobiles"
        />
    </Head>
    <NavbarDark />

    <MainBanner />

    <OurServices title={true} />

    <ServiceStyleTwo />

    <WhyChooseUs />

    <FunFactsTwo />

    <LatestNewsSliderTwo />

    <Newsletter />

    <Footer />
  </>
)

export default Home
