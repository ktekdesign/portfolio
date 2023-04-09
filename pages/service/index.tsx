import React from "react"
import Navbar from "../../components/Layouts/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import OurServices from "../../components/HomePages/OurServices"
import Newsletter from "../../components/Common/Newsletter"
import Head from "next/head"

const ServicesPage = () => (
  <>
    <Head>
      <title>Nos Services - KTEKDESIGN</title>
      <meta
        name="description"
        content="Notre objectif est d'offrir une alternative crédible aux porteurs de
          projets numériques qui n'ont pas le savoir-faire technique requis
          pour en assurer l'exécution."
      />
    </Head>
    
    <Navbar />

    <PageBanner pageTitle="Nos services" BGImage="/images/hero-banner2.jpg" />

    <OurServices />

    <Newsletter />

    <Footer />
  </>
)

export default ServicesPage
