import React from "react";
import { teamMemberData } from "../../data/team";

const TeamStyleTwo = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>All Team Members</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="team-card text-center">
                    <div className="team-img">
                      <img src={value.image} alt="Image" />

                      <div className="social-links">
                        <div className="d-table">
                          <div className="d-table-cell">
                            <ul>
                              {value.socialLinks.map((value, i) => (
                                <li key={i}>
                                  <a href={value.url} target="_blank">
                                    <i className={value.iconName}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
