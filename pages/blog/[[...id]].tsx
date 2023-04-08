import React from "react"
import NavbarDark from "../../components/Layouts/NavbarDark"
import PageBanner from "../../components/Common/PageBanner"
import BlogGridThree from "../../components/Blog/BlogGridThree"
import Footer from "../../components/Layouts/FooterDark"
import Newsletter from "../../components/Common/Newsletter"
import Head from "next/head"
import { getPosts, getPostsCount } from "../../data/news"
import { GetStaticProps } from "next"
import { Post } from "../../data/interfaces/Post"
import Pagination from "../../components/Blog/Pagination"

const pages: string[] = []
const POSTS_PER_PAGE = 6
const totalPage = Math.ceil(getPostsCount() / POSTS_PER_PAGE)
let index = 1
while (index <= totalPage) {
  pages.push(`${index}`)
  index++
}

type Props = {
  posts: Post[]
  currentPage: number
  pages: string[]
}

export async function getStaticPaths() {
  const paths = pages.map(id => ({ params: { id: [id] }}))
  
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<Props> = (ctx) => {
  const id = ctx?.params?.id || "1"
  const currentPage = parseInt((Array.isArray(id) ? id[0] : id))
  const end = currentPage * POSTS_PER_PAGE
  const start = end - POSTS_PER_PAGE
  const posts =  getPosts(start, end)
  
  if (!posts.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      currentPage,
      pages
    },
  } 
}
const Blog = ({posts, currentPage, pages}: Props) => (
  <>
    <Head>
      <title>{`Blog d'actualités - Page ${currentPage} - KTEKDESIGN`}</title>
      <meta
        name="description"
        content="Suivez les dernières vidéos de formation en programmation web de KTEKDESIGN"
      />
    </Head>

    <NavbarDark />

    <PageBanner pageTitle="Blog" BGImage="/images/hero-banner5.jpg" />

    <BlogGridThree posts={posts} />

    {pages?.length > 1 && <Pagination currentPage={currentPage} pages={pages} />}

    <Newsletter />

    <Footer />
  </>
)

export default Blog
