import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/FooterDark";
import { servicesData } from "../../data/services";

const ServiceDetails = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [service, setService] = useState(servicesData);
  const router = useRouter();
  // console.log(router.asPath)
  const isCurrentPath = (item) => {
    return item.viewDetails == currentPath;
  }
  useEffect(() => {
    setCurrentPath(router.asPath);
    setService(servicesData.find(isCurrentPath));
  }, [router]);
  
  return (
    <>
      <NavbarDark />

      <PageBanner {...service} />

      <ServiceDetailsContent {...service} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
