import React from "react";
import Image from "next/image";
import { teamMemberData } from "../../data/team";

const TeamStyleFour = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Creative Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="single-team"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="team-Image">
                      <Image src={value.image} alt="Team Image" />

                      <div className="overlay">
                        <p>
                          Email: <span>{value.email}</span>
                        </p>

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

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
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

export default TeamStyleFour;
