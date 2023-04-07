import React from "react"
import { servicesData } from "../../data/services"
import ServiceDetails from "../../components/Layouts/ServiceDetails"
import Head from "next/head"

const ServicePage = () => (
  <>
    <Head>
      <title>{servicesData.e_commerce.pageTitle} - KTEKDESIGN</title>
      <meta name="description" content={servicesData.e_commerce.shortText} />
    </Head>
    <ServiceDetails service={servicesData.e_commerce} />
  </>
)
export default ServicePage
