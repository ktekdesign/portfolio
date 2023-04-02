import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/FooterDark";

const Contact = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Contact" BGImage="/images/page-banner3.jpg" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
