import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

const GoTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <i className="pe-7s-angle-up"></i>
        </div>
      )}
    </>
  )
}

export default React.memo(GoTop)
