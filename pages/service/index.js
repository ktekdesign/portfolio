import React from "react";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/FooterDark";
import OurServices from "../../components/HomePages/ItAgency/OurServices";

const ServiceDetails = () => {
  
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Nos services" BGImage="/images/hero-banner2.jpg" />

      <OurServices notitle={true} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
