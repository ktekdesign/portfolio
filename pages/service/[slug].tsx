import React from "react"
import Head from "next/head"
import Navbar from "../../components/Layouts/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent"
import CtaArea from "../../components/Common/CtaArea"
import Footer from "../../components/Layouts/Footer"
import { Service } from "../../data/interfaces/Service"
import { GetStaticProps } from "next"
import { getService } from "../../data/services"

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
      service,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "creation-site-web" } },
      { params: { slug: "application-android-et-ios" } },
      { params: { slug: "e-commerce" } },
      { params: { slug: "marketing-digital" } },
      { params: { slug: "devops-solution" } },
      { params: { slug: "hebergement-web" } },
    ],
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

    <PageBanner {...service} />

    <ServiceDetailsContent {...service} />

    <CtaArea />

    <Footer />
  </>
)

export default ServicePage
