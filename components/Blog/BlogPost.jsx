import React from "react";
import Link from "next/link";
import Image from "next/image";
import { saira } from "../../utils/fonts";

const BlogPost = (props) => {
  const {toggler, setToggler, setVideo, ...value} = props;
  return (
    <>
      <div className="single-blog-item bg-fcfbfb">
        <div className="blog-image">
          {value?.video ?
            <>
              <Image
                src={value.image}
                alt={value.title}
                width={500}
                height={300}
                className="rounded-10"
              />
              <div className="video-box">
                <div
                  className="video-btn"
                  onClick={() => {
                    setVideo([value.video]);
                    setToggler(!toggler);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </>
          :
            <Link href={value.readMoreLink}>
              <img src={value.image} alt="image" />
            </Link>
          }
          <div className="post-tag">
            <Link href={value.readMoreLink}>{value.category}</Link>
          </div>
        </div>

        <div className="blog-post-content">
          <span>{value.date}</span>
          <h3 className={saira.className}>
            <Link href={value.readMoreLink}>{value.title}</Link>
          </h3>

          <p>{value.shortText}</p>

          <Link href={value.readMoreLink} className="read-more-btn feature-list">
            Voir la vidéo
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
