import React, { memo } from "react"
import Link from "next/link"
import Image from "next/image"

const Logo = ({ ...linkProps }) => (
  <Link href="/" {...linkProps}>
    <Image
      src="/images/logo-white.png"
      className="white-logo"
      width={100}
      height={56}
      priority
      alt="Logo"
    />
  </Link>
)

export default memo(Logo)
