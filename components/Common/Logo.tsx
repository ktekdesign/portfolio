import React from "react"
import Link from "next/link"
import Image from "next/image"

const Logo = ({ priority = false, ...linkProps }) => (
  <Link href="/" {...linkProps}>
    <Image
      src="/images/logo-white.png"
      className="white-logo"
      width={100}
      height={56}
      priority={priority}
      alt="Logo"
    />
  </Link>
)

export default Logo
