import React from "react"
import Navbar from "../components/Layouts/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ErrorContent from "../components/Error/ErrorContent"
import Footer from "../components/Layouts/Footer"
import Head from "next/head"
import { Post } from "../data/interfaces/Post"
import { GetStaticProps } from "next"
import { getLatestPosts } from "../data/news"

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

const Error = ({ posts }: Props) => (
  <>
    <Head>
      <title>Page introuvable - KTEKDESIGN</title>
      <meta
        name="description"
        content="Page introuvable sur le site web de l'agence digitale KTEKDESIGN"
      />
    </Head>

    <Navbar />

    <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

    <ErrorContent />

    <Footer posts={posts} />
  </>
)

export default Error
