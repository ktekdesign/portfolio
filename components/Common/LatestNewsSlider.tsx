import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { getPosts } from "../../data/news"
import BlogPost from "../Blog/BlogPost"
import { Post } from "../../data/interfaces/Post"
import Heading from "./Heading"

const blog: Post = {
  title:
    "Découvrez toute notre actualité et vidéos de formation sur notre blog",
  image: "/images/code.jpg",
  date: "01 Mars 2023",
  category: "Blog",
  shortText:
    "Toutes nos vidéos de formations et nos astuces pour apprendre à programmer comme de vrais professionnels.",
  readMoreLink: "/blog/",
}

const LatestNewsSlider = () => (
  <div className="blog-area ptb-100">
    <div className="container">
      <div className="section-title">
        <Heading type="h2">Actualités</Heading>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="blog-slides"
      >
        {getPosts(0, 3)?.map((post, i) => (
          <SwiperSlide key={i}>
            <BlogPost post={post} />
          </SwiperSlide>
        ))}
        <SwiperSlide key="blog">
          <BlogPost post={blog} />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
)

export default React.memo(LatestNewsSlider)
