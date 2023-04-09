import React, { FC, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { Post } from "../../data/interfaces/Post"
import LightBoxContext from "../../context/lightBoxContext"
import Heading from "../Common/Heading"

const BlogPost: FC<{
  post: Post
}> = ({ post }) => {
  const { toggler, setToggler, setVideo } = useContext(LightBoxContext)
  const { video, image, title, readMoreLink, category, date, shortText } = post

  if (!readMoreLink) return <></>

  return (
    <>
      <div className="single-blog-item bg-fcfbfb">
        <div className="blog-image">
          {video ? (
            <>
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="rounded-10"
              />
              <div className="video-box">
                <div
                  className="video-btn"
                  onClick={() => {
                    setVideo([video])
                    setToggler(!toggler)
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </>
          ) : (
            <Link href={readMoreLink}>
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="rounded-10"
              />
            </Link>
          )}
          <div className="post-tag">
            <Link href={readMoreLink}>{category}</Link>
          </div>
        </div>

        <div className="blog-post-content">
          <span>{date}</span>
          <Heading type="h3">
            <Link href={readMoreLink}>{title}</Link>
          </Heading>

          <p>{shortText}</p>

          <Link href={readMoreLink} className="read-more-btn feature-list">
            {video ? "Voir la vidéo" : "En savoir plus"}
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default React.memo(BlogPost)
