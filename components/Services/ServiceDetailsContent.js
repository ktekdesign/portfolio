import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import parse from 'html-react-parser';

const ServiceDetailsContent = (props) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {props?.video && 
        <FsLightbox
          toggler={toggler}
          sources={props?.video}
        />
      }

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                {props?.image && <Image src={props.image} alt="image" />}
                {props?.video &&
                  <div className="video-box">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className={`col-lg-${props.method ? "8" : "12"} col-md-12`}>
              <div className="services-details-desc">
                <h2>Description</h2>
                {parse(props.description)}
              </div>
            </div>
            {props?.method &&
              <div className="col-lg-4 col-md-12">
                <div className="services-details-info">
                  <h3>Notre méthodologie</h3>
                  {parse(props.method)}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
