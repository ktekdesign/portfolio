import React from "react";
import { servicesData } from "../../data/services";
import ServiceDetails from "../../components/Layouts/ServiceDetails";

const ServicePage = () => 
  <ServiceDetails {...servicesData[4]} />

export default ServicePage;
