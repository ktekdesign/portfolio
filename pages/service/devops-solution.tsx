import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => 
  <>
    <Head>
      <title>{servicesData.devops.pageTitle} - KTEKDESIGN</title>
      <meta
          name="description"
          content={servicesData.devops.shortText}
        />
    </Head>
    <ServiceDetails service={servicesData.devops} />
  </>
  
export default ServicePage
