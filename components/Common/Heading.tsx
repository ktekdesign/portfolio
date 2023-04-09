import React, { FC, memo, ReactNode } from "react"
import { Saira } from "next/font/google"

const saira = Saira({ subsets: ["latin"] })

const Heading: FC<{
  type: string
  children: ReactNode
  className?: string
}> = ({ type, children, className, ...props }) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={`${className} ${saira.className}`} {...props}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 className={`${className} ${saira.className}`} {...props}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 className={`${className} ${saira.className}`} {...props}>
          {children}
        </h3>
      )
    default:
      return <></>
  }
}

export default memo(Heading)
