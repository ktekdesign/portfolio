import React from "react"
import { getService } from "../../data/services"
import Head from "next/head"
import { Service } from "../../data/interfaces/Service"
import { GetStaticProps } from "next"
import NavbarDark from "../../components/Layouts/NavbarDark"
import PageBanner from "../../components/Common/PageBanner"
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent"
import CtaAreaThree from "../../components/Common/CtaAreaThree"
import Footer from "../../components/Layouts/FooterDark"

type Props = {
  service: Service
}

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const slug = ctx?.params?.slug || ""
  const key = (Array.isArray(slug) ? slug[0] : slug).replaceAll("-", "_")
  const service = getService(key)

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
      <title>{`${service.pageTitle} - KTEKDESIGN`}</title>
      <meta name="description" content={service.shortText} />
    </Head>

    <NavbarDark />

    <PageBanner {...service} />

    <ServiceDetailsContent {...service} />

    <CtaAreaThree />

    <Footer />
  </>
)

export default ServicePage
