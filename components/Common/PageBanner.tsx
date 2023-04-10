import React, { FC, memo } from "react"
import Heading from "./Heading"
import Container from "./Container"

const PageBanner: FC<{ pageTitle: string; BGImage: string }> = ({
  pageTitle,
  BGImage,
}) => (
  <Container
    className="page-title-area"
    background={{ src: BGImage, alt: "Banner Background", priority: true }}
  >
    <Heading className="page-title" type="h1">
      {pageTitle}
    </Heading>
  </Container>
)

export default memo(PageBanner)
