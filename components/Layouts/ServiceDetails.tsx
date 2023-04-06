import React, { FC } from "react";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/FooterDark";
import CtaAreaThree from "../../components/Common/CtaAreaThree";
import { Service } from "../../data/interfaces/Service";

const ServiceDetails: FC<{service: Service}> = ({service}) =>
    <>
      <NavbarDark />

      <PageBanner {...service} />

      <ServiceDetailsContent {...service} />

      <CtaAreaThree />

      <Footer />
    </>

export default ServiceDetails;
