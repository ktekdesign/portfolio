import React, { FC } from "react"

const Pagination: FC<{ page: number; pages: number[]; totalPage: number }> = ({
  page,
  pages,
  totalPage,
}) => (
  <div className="col-lg-12 col-md-12">
    <div className="pagination-area">
      {page > 1 && (
        <a
          className="prev page-numbers"
          href={`/blog/${page == 2 ? "" : page - 1}`}
        >
          <i className="fa-solid fa-angles-left"></i>
        </a>
      )}
      {pages.map((value) =>
        page == value ? (
          <span key={value} className="page-numbers current">
            {value}
          </span>
        ) : (
          <a
            className="page-numbers"
            href={`/blog/${value > 1 ? value : ""}`}
            key={value}
          >
            {value}
          </a>
        )
      )}

      {page < totalPage && (
        <a className="next page-numbers" href={`/blog/${page + 1}`}>
          <i className="fa-solid fa-angles-right"></i>
        </a>
      )}
    </div>
  </div>
)

export default Pagination
