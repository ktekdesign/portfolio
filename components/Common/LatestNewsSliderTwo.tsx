import React, { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { latestNewsData } from "../../data/news";
import FsLightbox from "fslightbox-react";
import { saira } from "../../utils/fonts";
import BlogPost from "../Blog/BlogPost";

const LatestNewsSliderTwo = () => {
  const [video, setVideo]: [string[], Dispatch<SetStateAction<string[]>>] = useState(['']);
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={video}
      />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2 className={saira.className}>Actualités</h2>
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
            modules={[Autoplay, Pagination]}
            className="blog-slides"
          >
            {latestNewsData?.slice(0, 5).map((post, i) => (
              <SwiperSlide key={i}>
                <BlogPost toggler={toggler} setToggler={setToggler} setVideo={setVideo} post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNewsSliderTwo;
