import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { NextRouter, useRouter } from "next/router";
import { latestNewsData } from "../../data/news";
import FsLightbox from "fslightbox-react";
import BlogPost from "./BlogPost";
import { Post } from "../../data/interfaces/Post";
import Pagination from "./Pagination";

const BlogGrid = () => {
  const [video, setVideo]: [string[], Dispatch<SetStateAction<string[]>>] = useState([""]);
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [posts, setPosts]: [Post[] | undefined, Dispatch<SetStateAction<Post[] | undefined>>] = useState();
  const [page, setPage]: [number, Dispatch<SetStateAction<number>>] = useState(1);
  const postsPerPage: number = 6;
  const totalPage: number = Math.ceil(latestNewsData.length / postsPerPage);
  const pages: number[] = [];
  for (let index:number = 1; index <= totalPage; index++) {
    pages.push(index);  
  }
  const router: NextRouter = useRouter();

  useEffect(() => {
    const path: string[] = router.asPath.split("/");
    path.pop();
    const current: number = parseInt(path?.pop() || '1');
    if (Number.isInteger(current)) setPage(current);
  }, [router]);

  useEffect(() => {
    const end: number = page * postsPerPage;
    const start: number = end - postsPerPage;
    setPosts(latestNewsData?.slice(start, end));
  }, [page]);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={video}
      />
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
                  <BlogPost toggler={toggler} setToggler={setToggler} setVideo={setVideo} post={post} />
                </div>
              ))}
              <Pagination page={page} pages={pages} totalPage={totalPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
