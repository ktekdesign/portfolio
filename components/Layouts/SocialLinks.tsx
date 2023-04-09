import React from "react"
import Link from "next/link"

const SocialLinks = () => (
  <ul className="social-links">
    <li>
      <Link
        href="https://www.facebook.com/ktekdesign"
        target="_blank"
        aria-label="Facebook"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
    </li>
    <li>
      <Link
        href="https://youtube.com/@christiankpanou"
        target="_blank"
        aria-label="Youtube"
      >
        <i className="fa-brands fa-youtube"></i>
      </Link>
    </li>
    <li>
      <Link
        href="https://linkedin.com/in/christian-kpanou"
        target="_blank"
        aria-label="Linkedin"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
    </li>
    <li>
      <Link
        href="https://www.github.com/ktekdesign"
        target="_blank"
        aria-label="Github"
      >
        <i className="fa-brands fa-github"></i>
      </Link>
    </li>
  </ul>
)

export default React.memo(SocialLinks)
