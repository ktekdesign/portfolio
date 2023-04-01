import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import MainBanner from "../components/HomePages/ItAgency/MainBanner";
import OurServices from "../components/HomePages/ItAgency/OurServices";
import ServiceStyleTwo from "../components/HomePages/ItAgency/ServiceStyleTwo";
import WhyChooseUs from "../components/HomePages/ItAgency/WhyChooseUs";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import Feedback from "../components/Common/Feedback";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import LatestNewsSliderTwo from "../components/Common/LatestNewsSliderTwo";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/FooterDark";
import Partner from "../components/Common/Partner";

const ItAgency = () => {
  return (
    <>
      <NavbarDark />

      <MainBanner />

      <OurServices />

      <ServiceStyleTwo />

      <WhyChooseUs />

      <FunFactsTwo />

      <Partner />

      <Feedback />

      <TeamStyleTwo />

      <PricingStyleThree />

      <LatestNewsSliderTwo />

      <div className="pb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default ItAgency;
