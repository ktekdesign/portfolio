import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => (
  <>
    <Head>
      <title>{servicesData.digital_marketing.pageTitle} - KTEKDESIGN</title>
      <meta
          name="description"
          content={servicesData.digital_marketing.shortText}
        />
    </Head>
    <ServiceDetails service={servicesData.digital_marketing} />
  </>
)

export default ServicePage
