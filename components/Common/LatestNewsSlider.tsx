import React, { FC, memo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import BlogPost from "../Blog/BlogPost"
import { Post } from "../../data/interfaces/Post"
import Heading from "./Heading"

const blog: Post = {
  title:
    "Découvrez toute notre actualité et vidéos de formation sur notre blog",
  image: "/images/code.jpg",
  date: "01 Mars 2023",
  category: { name: "Blog" },
  shortText:
    "Toutes nos vidéos de formations et nos astuces pour apprendre à programmer comme de vrais professionnels.",
  readMoreLink: "/blog/",
}

const LatestNewsSlider: FC<{ posts: Post[] }> = ({ posts }) => (
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
        {posts.map((post, key) => (
          <SwiperSlide key={key}>
            <BlogPost {...post} />
          </SwiperSlide>
        ))}
        <SwiperSlide key="blog">
          <BlogPost {...blog} />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
)

export default memo(LatestNewsSlider)
