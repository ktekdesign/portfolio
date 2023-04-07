import React from "react"
import NavbarDark from "../components/Layouts/NavbarDark"
import PageBanner from "../components/Common/PageBanner"
import ErrorContent from "../components/Error/ErrorContent"
import Footer from "../components/Layouts/FooterDark"
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
    <NavbarDark />

    <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

    <ErrorContent />

    <Footer />
  </>
)

export default Error
