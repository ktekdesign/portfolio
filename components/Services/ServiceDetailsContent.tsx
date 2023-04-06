import React, { Dispatch, SetStateAction, useState } from "react"
import Image from "next/image"
import FsLightbox from "fslightbox-react"
import parse from "html-react-parser"
import { saira } from "../../utils/fonts"
import { Service } from "../../data/interfaces/Service"

const ServiceDetailsContent = ({
  video,
  image,
  method,
  description,
}: Service) => {
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)

  return (
    <>
      {video && <FsLightbox toggler={toggler} sources={[video]} />}

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                {image && <Image src={image} alt="image" />}
                {video && (
                  <div className="video-box">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={`col-lg-${method ? "8" : "12"} col-md-12`}>
              <div className="services-details-desc">
                <h2 className={saira.className}>Description</h2>
                {parse(description)}
              </div>
            </div>
            {method && (
              <div className="col-lg-4 col-md-12">
                <div className="services-details-info">
                  <h2 className={saira.className}>Notre méthodologie</h2>
                  {parse(method)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetailsContent
