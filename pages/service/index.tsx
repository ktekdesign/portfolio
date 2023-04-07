import React from "react"
import NavbarDark from "../../components/Layouts/NavbarDark"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/FooterDark"
import OurServices from "../../components/HomePages/OurServices"
import Newsletter from "../../components/Common/Newsletter"
import Head from "next/head"

const ServicesPage = () => (
  <>
    <Head>
      <title>Nos Services - KTEKDESIGN</title>
      <meta
          name="description"
          content="Notre objectif est d&apos;offrir une alternative crédible aux porteurs de
          projets numériques qui n&apos;ont pas le savoir-faire technique requis
          pour en assurer l&apos;exécution."
        />
    </Head>
    <NavbarDark />

    <PageBanner pageTitle="Nos services" BGImage="/images/hero-banner2.jpg" />

    <OurServices />

    <Newsletter />

    <Footer />
  </>
)

export default ServicesPage
