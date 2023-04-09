import React, { useContext } from "react"
import Image from "next/image"
import parse from "html-react-parser"
import { Service } from "../../data/interfaces/Service"
import LightBoxContext from "../../context/lightBoxContext"
import Heading from "../Common/Heading"

const ServiceDetailsContent = ({
  video,
  image,
  method,
  description,
}: Service) => {
  const { toggler, setToggler, setVideo } = useContext(LightBoxContext)

  if (!description) return <></>

  return (
    <div className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="services-details-image">
              {image && <Image src={image} alt="image" />}
              {video && (
                <div className="video-box">
                  <div
                    onClick={() => {
                      setVideo([video])
                      setToggler(!toggler)
                    }}
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
              <Heading type="h2">Description</Heading>
              {parse(description)}
            </div>
          </div>
          {method && (
            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <Heading type="h2">Notre méthodologie</Heading>
                {parse(method)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ServiceDetailsContent)
