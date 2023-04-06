import React from 'react'
import NavbarDark from '../components/Layouts/NavbarDark'
import PageBanner from '../components/Common/PageBanner'
import ErrorContent from '../components/Error/ErrorContent'
import Footer from '../components/Layouts/FooterDark'

const Error = () =>
  <>
    <NavbarDark />

    <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

    <ErrorContent />

    <Footer />
  </>

export default Error
