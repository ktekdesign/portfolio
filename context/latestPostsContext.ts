import { createContext } from "react"
import { Post } from "../data/interfaces/Post"

type LatestPostsProps = {
  posts: Post[]
}
const LatestPostsContext = createContext({} as LatestPostsProps)

export default LatestPostsContext
