import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { latestNewsData } from "../../data/news";
import FsLightbox from "fslightbox-react";
import BlogPost from "./BlogPost";

const BlogGrid = () => {
  const [video, setVideo] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;
  const totalPage = Math.ceil(latestNewsData.length / postsPerPage);
  const pages = [];
  for (let index = 1; index <= totalPage; index++) {
    pages.push(index);  
  }
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.split("/");
    path.pop();
    const current = parseInt(path.pop());
    if (Number.isInteger(current)) setPage(current);
  }, [router]);

  useEffect(() => {
    const end = page * postsPerPage;
    const start = end - postsPerPage;
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
            {posts.map((value, i) => (
                <div 
                  className="col-lg-4 col-md-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <BlogPost {...value} />
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              {/* Pagination */}
              <div className="pagination-area">
                {page > 1 && 
                  <a className="prev page-numbers"
                    href={`/blog/${page == 2 ? "" : page - 1}`}
                  >
                    <i className="fa-solid fa-angles-left"></i>
                  </a>
                }
                {pages.map(value => 
                  page==value ?
                    <span key={value} className="page-numbers current">{value}</span>
                  :
                    <a className="page-numbers"
                      href={`/blog/${value > 1 ? value : ""}`}
                      key={value}>
                        {value}
                    </a>
                )   
                }

                {page < totalPage && 
                  <a className="next page-numbers"
                    href={`/blog/${page + 1}`} 
                  >
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
