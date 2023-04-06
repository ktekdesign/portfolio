import React from 'react'
import NavbarDark from '../components/Layouts/NavbarDark'
import MainBanner from '../components/HomePages/MainBanner'
import OurServices from '../components/HomePages/OurServices'
import ServiceStyleTwo from '../components/HomePages/ServiceStyleTwo'
import WhyChooseUs from '../components/HomePages/WhyChooseUs'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo'
import Newsletter from '../components/Common/Newsletter'
import Footer from '../components/Layouts/FooterDark'

const Home = () => (
  <>
    <NavbarDark />

    <MainBanner />

    <OurServices title={true} />

    <ServiceStyleTwo />

    <WhyChooseUs />

    <FunFactsTwo />

    <LatestNewsSliderTwo />

    <Newsletter />

    <Footer />
  </>
)

export default Home
