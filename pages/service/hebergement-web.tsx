import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => (
  <>
    <Head>
      <title>{servicesData.web_hosting.pageTitle} - KTEKDESIGN</title>
      <meta name="description" content={servicesData.web_hosting.shortText} />
    </Head>
    <ServiceDetails service={servicesData.web_hosting} />
  </>
)

export default ServicePage
