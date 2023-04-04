import React from "react";
import Link from "next/link";
import Image from "next/image";
import { saira } from "../../utils/fonts";

const BlogPost = (props) => {
  return (
    <>
      <div className="single-blog-item bg-fcfbfb">
        <div className="blog-image">
          {props?.video ?
            <>
              <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={300}
                className="rounded-10"
              />
              <div className="video-box">
                <div
                  className="video-btn"
                  onClick={() => {
                    setVideo([props.video]);
                    setToggler(!toggler);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </>
          :
            <Link href={props.readMoreLink}>
              <img src={props.image} alt="image" />
            </Link>
          }
          <div className="post-tag">
            <Link href={props.readMoreLink}>{props.category}</Link>
          </div>
        </div>

        <div className="blog-post-content">
          <span>{props.date}</span>
          <h3 className={saira.className}>
            <Link href={props.readMoreLink}>{props.title}</Link>
          </h3>

          <p>{props.shortText}</p>

          <Link href={props.readMoreLink} className="read-more-btn feature-list">
            Voir la vidéo
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
