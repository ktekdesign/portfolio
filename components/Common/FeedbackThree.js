import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { feedbacskData } from "../../data/feedbacks";

const FeedbackThree = () => {
  return (
    <>
      <div className="feedback-area feedback-style-3 ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <h2>Trusted by Users</h2>
          </div>

          <div className="feedback-list">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              className="feedback-slides"
            >
              {feedbacskData &&
                feedbacskData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-feedback">
                      <div className="rating">
                        {value.rating.map((value, i) => (
                          <i className={value.iconName} key={i}></i>
                        ))}
                      </div>

                      <p><q>{value.feedbackText}</q></p>

                      <div className="bar"></div>

                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <Image
            src="/images/clients/client1.png"
            className="client1"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
          />
          <Image
            src="/images/clients/client2.png"
            className="client2"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          />
          <Image
            src="/images/clients/client3.png"
            className="client3"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          />
          <Image
            src="/images/clients/client4.png"
            className="client4"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
          <Image
            src="/images/clients/client5.png"
            className="client5"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
          <Image
            src="/images/clients/client6.png"
            className="client6"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="600"
          />
          <Image
            src="/images/clients/client7.png"
            className="client7"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="700"
          />
          <Image
            src="/images/clients/client8.png"
            className="client8"
            alt="client"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="800"
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackThree;
