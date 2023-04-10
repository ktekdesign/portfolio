import React, { FC, memo } from "react"
import Image from "next/image"
import Heading from "./Heading"

const PageBanner: FC<{ pageTitle: string; BGImage: string }> = ({
  pageTitle,
  BGImage,
}) => (
  <div className="page-title-area">
    <Image
      src={BGImage}
      className="page-title-img"
      fill
      alt="Banner Background"
      priority
    />
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <Heading className="page-title" type="h1">
            {pageTitle}
          </Heading>
        </div>
      </div>
    </div>
  </div>
)

export default memo(PageBanner)
