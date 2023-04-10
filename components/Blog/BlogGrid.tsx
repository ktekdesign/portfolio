import React, { FC, memo } from "react"
import BlogPost from "../Post/BlogPost"
import { Post } from "../../data/interfaces/Post"

const BlogGrid: FC<{ posts: Post[] }> = ({ posts }) => {
  if (!posts || !posts.length) return <></>

  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          {posts.map((post, i) => (
            <div
              className="col-lg-4 col-md-6"
              key={i}
              data-aos="fade-in"
              data-aos-duration="1200"
            >
              <BlogPost {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(BlogGrid)
