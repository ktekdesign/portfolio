import React from "react";
import Link from "next/link";
import Image from "next/image";
import { saira } from "../../utils/fonts";

const BlogPost = ({toggler, setToggler, setVideo, ...post}) => {
  
  return (
    <>
      <div className="single-blog-item bg-fcfbfb">
        <div className="blog-image">
          {post?.video ?
            <>
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="rounded-10"
              />
              <div className="video-box">
                <div
                  className="video-btn"
                  onClick={() => {
                    setVideo([post.video]);
                    setToggler(!toggler);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </>
          :
            <Link href={post.readMoreLink}>
              <img src={post.image} alt="image" />
            </Link>
          }
          <div className="post-tag">
            <Link href={post.readMoreLink}>{post.category}</Link>
          </div>
        </div>

        <div className="blog-post-content">
          <span>{post.date}</span>
          <h3 className={saira.className}>
            <Link href={post.readMoreLink}>{post.title}</Link>
          </h3>

          <p>{post.shortText}</p>

          <Link href={post.readMoreLink} className="read-more-btn feature-list">
            Voir la vidéo
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
