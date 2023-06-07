import React, { FC, ReactNode, useMemo } from "react"
import { getLatestPosts } from "../data/news"
import LatestPostsContext from "./latestPostsContext"

type Props = {
  children: ReactNode
}

const LatestPostsContextProvider: FC<Props> = ({ children }) => {
  const posts = getLatestPosts()
  const value = useMemo(() => ({ posts }), [posts])
  return (
    <LatestPostsContext.Provider value={value}>
      {children}
    </LatestPostsContext.Provider>
  )
}

export default LatestPostsContextProvider
