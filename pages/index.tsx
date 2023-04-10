import React from "react"
import Navbar from "../components/Layouts/Navbar"
import MainBanner from "../components/HomePages/MainBanner"
import OurServices from "../components/HomePages/OurServices"
import ServiceStyle from "../components/HomePages/ServiceStyle"
import WhyChooseUs from "../components/HomePages/WhyChooseUs"
import FunFacts from "../components/Common/FunFacts"
import LatestNewsSlider from "../components/Common/LatestNewsSlider"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/Layouts/Footer"
import Head from "next/head"
import { GetStaticProps } from "next"
import { Service } from "../data/interfaces/Service"
import { getServices } from "../data/services"
import { FunFact } from "../data/interfaces/FunFact"
import { getFunFacts } from "../data/funfacts"
import { Post } from "../data/interfaces/Post"
import { getLatestPosts } from "../data/news"

type Props = {
  services: Service[]
  funFacts: FunFact[]
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const services = getServices()
  const funFacts = getFunFacts()
  const posts = getLatestPosts()

  return {
    props: {
      services,
      funFacts,
      posts,
    },
  }
}

const Home = ({ services, funFacts, posts }: Props) => (
  <>
    <Head>
      <title>Agence Web Digitale - KTEKDESIGN</title>
      <meta
        name="description"
        content="Nous sommes spécialisés dans la création de sites web, de stratégies de marketing digital et de développement d'applications mobiles"
      />
    </Head>

    <Navbar />

    <MainBanner />

    <OurServices title services={services} />

    <ServiceStyle />

    <WhyChooseUs />

    <FunFacts funFacts={funFacts} />

    <LatestNewsSlider posts={posts} />

    <Newsletter />

    <Footer posts={posts} />
  </>
)

export default Home
