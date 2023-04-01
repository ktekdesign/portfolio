import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import BlogGridThree from "../components/Blog/BlogGridThree";
import Footer from "../components/Layouts/FooterDark";

const Blog = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Blog" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree />

      <Footer />
    </>
  );
};

export default Blog;
