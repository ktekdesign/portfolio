import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = (props) => {
  return (
    <Link href="/" {...props}>
      <Image src="/images/logo-white.png" 
        className="white-logo"
        width={100}
        height={56}
        alt="Logo" />
    </Link>
  );
};

export default Logo;
