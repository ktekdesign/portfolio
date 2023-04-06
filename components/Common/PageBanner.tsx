import React, { FC } from 'react'
import Image from 'next/image'
import { saira } from '../../utils/fonts'

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
          <h1 className={`page-title ${saira.className}`}>{pageTitle}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default PageBanner
