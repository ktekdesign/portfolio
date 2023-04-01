import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

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
                {props?.image && <img src={props.image} alt="image" />}
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

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Description</h2>
                {props.description}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Notre méthodologie</h3>
                {props.method}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
