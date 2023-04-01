import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import WorksStyleOne from "../components/Portfolio/WorksStyleOne";
import WorksStyleTwo from "../components/Portfolio/WorksStyleTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/FooterDark";

const Portfolio = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Our Portfolio" BGImage="/images/page-banner3.jpg" />

      <WorksStyleOne />

      <WorksStyleTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Portfolio;
