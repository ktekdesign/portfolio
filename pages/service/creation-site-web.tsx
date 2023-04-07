import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => 
  <>
    <Head>
      <title>{servicesData.site_web.pageTitle} - KTEKDESIGN</title>
      <meta
          name="description"
          content={servicesData.site_web.shortText}
        />
    </Head>
    <ServiceDetails service={servicesData.site_web} />
  </>

export default ServicePage
