import React from "react"
import Head from "next/head"
import Navbar from "../../components/Layouts/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent"
import CtaArea from "../../components/Common/CtaArea"
import Footer from "../../components/Layouts/Footer"
import { Service } from "../../data/interfaces/Service"
import { GetStaticProps } from "next"
import { getService, getServicesRoutes } from "../../data/services"

type Props = {
  service: Service
}

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const slug = ctx?.params?.slug || ""
  const key = (Array.isArray(slug) ? slug[0] : slug).replaceAll("-", "_")
  const service = getService(key)

  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      service
    },
  }
}

export async function getStaticPaths() {
  const paths = getServicesRoutes()

  return {
    paths,
    fallback: true,
  }
}

const ServicePage = ({ service }: Props) => (
  <>
    <Head>
      <title>{`${service?.pageTitle} - KTEKDESIGN`}</title>
      <meta name="description" content={service?.shortText} />
    </Head>

    <Navbar />

    <PageBanner pageTitle={service?.pageTitle} BGImage={service?.BGImage} />

    <ServiceDetailsContent {...service} />

    <CtaArea />

    <Footer />
  </>
)

export default ServicePage
