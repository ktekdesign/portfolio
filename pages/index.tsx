import React from "react"
import Navbar from "../components/Layouts/Navbar"
import MainBanner from "../components/HomePages/MainBanner"
import OurServices from "../components/HomePages/OurServices"
import ServiceStyle from "../components/HomePages/ServiceStyle"
import WhyChooseUs from "../components/HomePages/WhyChooseUs"
import FunFacts from "../components/Common/FunFacts"
import LatestNewsSlider from "../components/Common/LatestNewsSlider"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/Layouts/Footer"
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

    <Navbar />

    <MainBanner />

    <OurServices title />

    <ServiceStyle />

    <WhyChooseUs />

    <FunFacts />

    <LatestNewsSlider />

    <Newsletter />

    <Footer />
  </>
)

export default Home
