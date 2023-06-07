import React from "react"
import Navbar from "../components/Layouts/Navbar"
import PageBanner from "../components/Common/PageBanner"
import ErrorContent from "../components/Error/ErrorContent"
import Footer from "../components/Layouts/Footer"
import Head from "next/head"

const Error = () => (
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

    <Footer />
  </>
)

export default Error
