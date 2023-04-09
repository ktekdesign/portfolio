import React from "react"

const GoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <div onClick={scrollToTop} className="scroll-to-top">
      <i className="pe-7s-angle-up"></i>
    </div>
  )
}

export default React.memo(GoTop)
