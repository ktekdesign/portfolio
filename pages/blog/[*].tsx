import React from "react"
import NavbarDark from "../../components/Layouts/NavbarDark"
import PageBanner from "../../components/Common/PageBanner"
import BlogGridThree from "../../components/Blog/BlogGridThree"
import Footer from "../../components/Layouts/FooterDark"
import Newsletter from "../../components/Common/Newsletter"
import Head from "next/head"

const Blog = () => (
  <>
    <Head>
      <title>Blog d&apos;actualités - KTEKDESIGN</title>
      <meta
        name="description"
        content="Suivez les dernières vidéos de formation en programmation web de KTEKDESIGN"
      />
    </Head>
    <NavbarDark />

    <PageBanner pageTitle="Blog" BGImage="/images/hero-banner5.jpg" />

    <BlogGridThree />

    <Newsletter />

    <Footer />
  </>
)

export default Blog
