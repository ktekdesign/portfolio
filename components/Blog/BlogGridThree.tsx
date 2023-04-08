import React, { FC } from "react"
import BlogPost from "./BlogPost"
import { Post } from "../../data/interfaces/Post"

const BlogGrid: FC<{posts: Post[]}> = ({posts}) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {posts?.map((post, i) => (
              <div
                className="col-lg-4 col-md-6"
                key={i}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={post?.aosDelay}
              >
                {post?.readMoreLink && <BlogPost post={post} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(BlogGrid)
