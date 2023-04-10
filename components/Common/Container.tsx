import React, { FC, memo, ReactNode } from "react"
import Image from "next/image"

type Background = {
  src: string
  alt: string
  priority?: boolean
}

const Container: FC<{
  isFluid?: boolean
  background?: Background
  children: ReactNode
  className?: string
  as?: string
}> = ({ isFluid, background, children, className = "", as, ...props }) => {
  switch (as) {
    case "header":
      return (
        <header className={className} {...props}>
          {background && (
            <Image
              className="background"
              src={background.src}
              alt={background.alt}
              priority={background.priority ?? false}
              fill
            />
          )}
          <div className={`container${isFluid ? "-fluid" : ""}`}>
            {children}
          </div>
        </header>
      )
    case "footer":
      return (
        <footer className={className} {...props}>
          {background && (
            <Image
              className="background"
              src={background.src}
              alt={background.alt}
              priority={background.priority ?? false}
              fill
            />
          )}
          <div className={`container${isFluid ? "-fluid" : ""}`}>
            {children}
          </div>
        </footer>
      )
    default:
      return (
        <section className={className} {...props}>
          {background && (
            <Image
              className="background"
              src={background.src}
              alt={background.alt}
              priority={background.priority ?? false}
              fill
            />
          )}
          <div className={`container${isFluid ? "-fluid" : ""}`}>
            {children}
          </div>
        </section>
      )
  }
}

export default memo(Container)
