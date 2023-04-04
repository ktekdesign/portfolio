import React, { useEffect } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "animate.css";
import "../styles/all.min.css";
import "../styles/pe-icon-7-stroke.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    (import('react-gtm-module')).then(TagManager => TagManager.initialize({ gtmId: 'GTM-P29VFML' }));
  }, []);
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="KTEKDESIGN SARL" />
        <meta name='description' content="Nous sommes spécialisés dans la création de sites web, de stratégies de marketing digital et de développement d'applications mobiles" />
        <link rel="preconnect" href="https://connect.facebook.net"></link>
        <link rel="preconnect" href="https://www.googletagmanager.com"></link>
        <title>
          KTEKDESIGN - Agence Web Digitale
        </title>
      </Head>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
      <GoTop />
    </>
  );
}

export default MyApp;
