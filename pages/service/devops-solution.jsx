import React from "react";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/FooterDark";
import { servicesData } from "../../data/services";
import CtaAreaThree from "../../components/Common/CtaAreaThree";

const ServiceDetails = () => {
  const [,,,,service,] = servicesData;
  
  return (
    <>
      <NavbarDark />

      <PageBanner {...service} />

      <ServiceDetailsContent {...service} />

      <CtaAreaThree />

      <Footer />
    </>
  );
};

export default ServiceDetails;
