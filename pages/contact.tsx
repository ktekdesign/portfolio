import React from 'react'
import NavbarDark from '../components/Layouts/NavbarDark'
import PageBanner from '../components/Common/PageBanner'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Layouts/FooterDark'

const Contact = () =>
  <>
    <NavbarDark />

    <PageBanner pageTitle="Contact" BGImage="/images/hero-banner6.jpg" />

    <ContactInfo />

    <ContactForm />

    <Footer />
  </>

export default Contact
