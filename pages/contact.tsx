import React from "react"
import Navbar from "../components/Layouts/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import Footer from "../components/Layouts/Footer"
import Head from "next/head"
import { GetStaticProps } from "next"
import { getLatestPosts } from "../data/news"
import { Post } from "../data/interfaces/Post"

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = getLatestPosts()

  return {
    props: {
      posts,
    },
  }
}

const Contact = ({ posts }: Props) => (
  <>
    <Head>
      <title>Contact - KTEKDESIGN</title>
      <meta
        name="description"
        content="Contactez l'agence web digitale KTEKDESIGN pour créer vos sites web"
      />
    </Head>

    <Navbar />

    <PageBanner pageTitle="Contact" BGImage="/images/hero-banner6.jpg" />

    <ContactInfo />

    <ContactForm />

    <Footer posts={posts} />
  </>
)

export default Contact
