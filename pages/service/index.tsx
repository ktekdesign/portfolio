import React from "react";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/FooterDark";
import OurServices from "../../components/HomePages/OurServices";
import Newsletter from "../../components/Common/Newsletter";

const ServicesPage = () =>
  <>
    <NavbarDark />

    <PageBanner pageTitle="Nos services" BGImage="/images/hero-banner2.jpg" />

    <OurServices />

    <Newsletter />

    <Footer />
  </>

export default ServicesPage;
