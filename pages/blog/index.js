import React from "react";
import NavbarDark from "../../components/Layouts/NavbarDark";
import PageBanner from "../../components/Common/PageBanner";
import BlogGridThree from "../../components/Blog/BlogGridThree";
import Footer from "../../components/Layouts/FooterDark";
import Newsletter from "../../components/Common/Newsletter";

const Blog = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Blog" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree />

      <Newsletter />

      <Footer />
    </>
  );
};

export default Blog;
