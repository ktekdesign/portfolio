import React, { memo, useContext } from "react"
import LatestPostsContext from "../../context/latestPostsContext"
import LightPost from "../Post/LightPost"

const LatestNewsList = () => {
  const { posts } = useContext(LatestPostsContext)
  
  return (
    <ul className="list">
      {posts.map((post, key) => (
        <LightPost post={post} key={key} />
      ))}
    </ul>
  )
}

export default memo(LatestNewsList)
