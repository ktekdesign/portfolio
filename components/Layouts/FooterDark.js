import React from "react";
import Link from "next/link";

const FooterDark = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area footer-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo-white.png" alt="Logo" />
                  </Link>
                </div>

                <p>
                Vous êtes indépendant, petite, moyenne ou grande entreprise ? Vous êtes au bon endroit. Laissez nous vous émerveiller avec la qualité de nos services en facilitant la croissance de votre entreprise.
                </p>

                
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="200"
              >
                <h3>Nos Entreprises</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      KTEKDESIGN
                    </Link>
                  </li>
                  <li>
                    <Link href="https://ktekhosting.com">
                      HÉBERGEMENT WEB
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@christiankpanou">
                      FORMATIONS
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      IMPORT-EXPORT
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      ACTIONS SOCIALES
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="300"
              >
                <h3>Publications Récentes</h3>

                <ul className="list">
                  <li>
                    <Link href="https://www.youtube.com/watch?v=8mfGzXPNiQw" target="_blank">
                      Clean Architecture: Principes S.O.L.I.D dans la pratique
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/watch?v=n6R8VjU-iDI" target="_blank">
                      Express, Postgres avec Docker
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/watch?v=QKdxeHlbpHQ" target="_blank">
                      Initialisation d'un projet Node.js
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="get-in-touch">
                  <li className="pt-2">
                    <i className="fa-solid fa-headset"></i>
                    <a href="https://api.whatsapp.com/send?phone=5541997527702">+55 (41) 997-527-702</a>
                  </li>
                  <li className="pt-2">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">contact@ktekdesign.com</a>
                  </li>
                </ul>
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
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Tous Droits Réservés. Copyright &copy; 2015 - {currentYear} Développé par : {" "}
                <a href="https://ktekdesign.com" target="_blank">
                KTEKDESIGN
                </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDark;
