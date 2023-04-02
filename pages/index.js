import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import MainBanner from "../components/HomePages/ItAgency/MainBanner";
import OurServices from "../components/HomePages/ItAgency/OurServices";
import ServiceStyleTwo from "../components/HomePages/ItAgency/ServiceStyleTwo";
import WhyChooseUs from "../components/HomePages/ItAgency/WhyChooseUs";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import LatestNewsSliderTwo from "../components/Common/LatestNewsSliderTwo";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/FooterDark";

const ItAgency = () => {
  return (
    <>
      <NavbarDark />

      <MainBanner />

      <OurServices />

      <ServiceStyleTwo />

      <WhyChooseUs />

      <FunFactsTwo />

      <LatestNewsSliderTwo />

      <Newsletter />

      <Footer />
    </>
  );
};

export default ItAgency;
