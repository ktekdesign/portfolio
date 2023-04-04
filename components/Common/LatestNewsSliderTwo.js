import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { latestNewsData } from "../../data/news";
import FsLightbox from "fslightbox-react";

const LatestNewsSliderTwo = () => {
  const [video, setVideo] = useState([]);
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={video}
      />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Actualités</h2>
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
            {latestNewsData?.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      {value?.video ?
                        <>
                          <Image
                            src={value.image}
                            alt={value.title}
                            width={500}
                            height={300}
                            className="rounded-10"
                          />
                          <div className="video-box">
                            <div
                              className="video-btn"
                              onClick={() => {
                                setVideo([value.video]);
                                setToggler(!toggler);
                              }}
                            >
                              <i className="fa-solid fa-play"></i>
                            </div>
                          </div>
                        </>
                      :
                        <Link href={value.readMoreLink}>
                          <Image src={value.image} alt={value.title} width={300} height={250} />
                        </Link>
                      }
                      <div className="post-tag">
                        <Link href={value.readMoreLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.readMoreLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>
                      <Link href={value.readMoreLink} className="read-more-btn">
                        Voir la vidéo
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNewsSliderTwo;
