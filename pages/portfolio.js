import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import WorksStyleOne from "../components/Portfolio/WorksStyleOne";
import WorksStyleTwo from "../components/Portfolio/WorksStyleTwo";
import Footer from "../components/Layouts/FooterDark";
import Newsletter from "../components/Common/Newsletter";

const Portfolio = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Portfolio" BGImage="/images/page-banner3.jpg" />

      <WorksStyleOne />

      <WorksStyleTwo />

      <Newsletter />

      <Footer />
    </>
  );
};

export default Portfolio;
