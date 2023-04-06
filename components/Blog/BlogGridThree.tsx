import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { latestNewsData } from '../../data/news'
import FsLightbox from 'fslightbox-react'
import BlogPost from './BlogPost'
import { Post } from '../../data/interfaces/Post'
import Pagination from './Pagination'

const BlogGrid = () => {
  const router: NextRouter = useRouter()
  const POSTS_PER_PAGE = 6
  const totalPage = Math.ceil(latestNewsData.length / POSTS_PER_PAGE)
  const pages: number[] = []
  const [video, setVideo]: [string[], Dispatch<SetStateAction<string[]>>] =
    useState([''])
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [posts, setPosts]: [
    Post[] | undefined,
    Dispatch<SetStateAction<Post[] | undefined>>
  ] = useState()
  const [page, setPage]: [number, Dispatch<SetStateAction<number>>] =
    useState(1)

  for (let index = 1; index <= totalPage; index++) {
    pages.push(index)
  }

  useEffect(() => {
    const path: string[] = router.asPath.split('/')
    path.map((value) => {
      if (Number.isInteger(value)) setPage(parseInt(value, 10))
    })
  }, [router])

  useEffect(() => {
    const end = page * POSTS_PER_PAGE
    const start = end - POSTS_PER_PAGE
    setPosts(latestNewsData?.slice(start, end))
  }, [page])

  return (
    <>
      <FsLightbox toggler={toggler} sources={video} />
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
                <BlogPost
                  toggler={toggler}
                  setToggler={setToggler}
                  setVideo={setVideo}
                  post={post}
                />
              </div>
            ))}
            <Pagination page={page} pages={pages} totalPage={totalPage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGrid