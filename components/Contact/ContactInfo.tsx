import Link from "next/link"
import React from "react"
import { saira } from "../../utils/fonts"
import SocialLinks from "../Layouts/SocialLinks"

const ContactInfo = () => (
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
              <Link href="mailto:contact@ktekdesign.com">
                contact@ktekdesign.com
              </Link>
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
              <SocialLinks />
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
              <Link href="https://api.whatsapp.com/send?phone=5541997527702">
                +55 (41) 997-527-702
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default React.memo(ContactInfo)
