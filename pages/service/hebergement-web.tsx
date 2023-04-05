import React from "react";
import { servicesData } from "../../data/services";
import ServiceDetails from "../../components/Layouts/ServiceDetails";

const ServicePage = () => 
  <ServiceDetails {...servicesData[5]} />

export default ServicePage;