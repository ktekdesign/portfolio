import React, { memo, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import BlogPost from "../Post/BlogPost"
import Heading from "./Heading"
import Container from "./Container"
import LatestPostsContext from "../../context/latestPostsContext"

const LatestNewsSlider = () => {
  const { posts } = useContext(LatestPostsContext)
  
  return (
    <Container className="blog-area ptb-100">
      <Heading type="h2" isSectionHeader>
        Actualités
      </Heading>
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
      </Swiper>
    </Container>
  )
}

export default memo(LatestNewsSlider)
