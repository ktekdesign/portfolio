import React, { FC, memo } from "react"
import Link from "next/link"
import { Post } from "../../data/interfaces/Post"

const LightPost: FC<{ post: Post }> = ({ post, ...props }) => {
  const { readMoreLink, title } = post

  if (!readMoreLink) return <></>

  return (
    <li {...props}>
      <Link href={readMoreLink} target="_blank">
        {title}
      </Link>
    </li>
  )
}

export default memo(LightPost)
