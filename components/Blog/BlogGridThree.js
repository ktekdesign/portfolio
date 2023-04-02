import React from "react";
import Link from "next/link";
import { latestNewsData } from "../../data/news";

const BlogGrid = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {latestNewsData?.slice(0, 3).map((value, i) => (
                <div 
                  className="col-lg-4 col-md-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={value.readMoreLink}>
                        <img src={value.image} alt="image" />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.readMoreLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.readMoreLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.readMoreLink} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              {/* Pagination */}
              <div className="pagination-area">
                <a className="prev page-numbers">
                  <i className="fa-solid fa-angles-left"></i>
                </a>

                <a className="page-numbers">1</a>

                <span className="page-numbers current">2</span>

                <a className="page-numbers">3</a>

                <a className="page-numbers">4</a>

                <a className="next page-numbers">
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
