import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"

const ServicePage = () => <ServiceDetails service={servicesData.app_dev} />

export default ServicePage
