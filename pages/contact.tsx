import React from "react"
import NavbarDark from "../components/Layouts/NavbarDark"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/Layouts/FooterDark"
import Head from "next/head"

const Contact = () => (
  <>
    <Head>
      <title>Contact - KTEKDESIGN</title>
      <meta
        name="description"
        content="Contactez l'agence web digitale KTEKDESIGN pour créer vos sites web"
      />
    </Head>
    <NavbarDark />

    <PageBanner pageTitle="Contact" BGImage="/images/hero-banner6.jpg" />

    <ContactInfo />

    <ContactForm />

    <Footer />
  </>
)

export default Contact
