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
import { Post } from "../../data/interfaces/Post"
import { getLatestPosts } from "../../data/news"

type Props = {
  service: Service
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const slug = ctx?.params?.slug || ""
  const key = (Array.isArray(slug) ? slug[0] : slug).replaceAll("-", "_")
  const service = getService(key)
  const posts = getLatestPosts()

  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      service,
      posts,
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

const ServicePage = ({ service, posts }: Props) => (
  <>
    <Head>
      <title>{`${service?.pageTitle} - KTEKDESIGN`}</title>
      <meta name="description" content={service?.shortText} />
    </Head>

    <Navbar />

    <PageBanner pageTitle={service?.pageTitle} BGImage={service?.BGImage} />

    <ServiceDetailsContent {...service} />

    <CtaArea />

    <Footer posts={posts} />
  </>
)

export default ServicePage
