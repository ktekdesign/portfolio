import React from "react";
import ServiceDetails from "../../components/Layouts/ServiceDetails";
import { servicesData } from "../../data/services";

const ServicePage = () => 
  <ServiceDetails {...servicesData[2]} />

export default ServicePage;