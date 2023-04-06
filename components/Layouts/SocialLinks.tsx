import React from "react"

const SocialLinks = () => (
  <ul className="social-links">
    <li>
      <a
        href="https://www.facebook.com/ktekdesign"
        target="_blank"
        aria-label="Facebook"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
    </li>
    <li>
      <a
        href="https://youtube.com/@christiankpanou"
        target="_blank"
        aria-label="Youtube"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>
    </li>
    <li>
      <a
        href="https://linkedin.com/in/christian-kpanou"
        target="_blank"
        aria-label="Linkedin"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
    </li>
    <li>
      <a
        href="https://www.github.com/ktekdesign"
        target="_blank"
        aria-label="Github"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </li>
  </ul>
)

export default React.memo(SocialLinks)
