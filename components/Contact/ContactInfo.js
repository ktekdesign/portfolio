import React from "react";
import { saira } from "../../utils/fonts";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3 className={saira.className}>Envoyez un email à</h3>
                <p>
                  <a href="mailto:contact@ktekdesign.com">contact@ktekdesign.com</a>
                </p>
                
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3 className={saira.className}>Nos Réseaux sociaux</h3>
                <div className="single-footer-widget">
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/ktekdesign" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@christiankpanou" target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/christian-kpanou" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/ktekdesign" target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3 className={saira.className}>Whatsapp</h3>
                <p>
                  <a href="https://api.whatsapp.com/send?phone=5541997527702">+55 (41) 997-527-702</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
