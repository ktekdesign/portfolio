import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => (
  <>
    <Head>
      <title>{servicesData.app_dev.pageTitle} - KTEKDESIGN</title>
      <meta name="description" content={servicesData.app_dev.shortText} />
    </Head>
    <ServiceDetails service={servicesData.app_dev} />
  </>
)

export default ServicePage
