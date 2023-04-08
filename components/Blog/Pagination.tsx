import React, { FC } from "react"

const Pagination: FC<{ currentPage: number; pages: string[] }> = ({
  currentPage,
  pages,
}) => (
  <div className="pagination-area pb-100">
    {currentPage > 1 && (
      <a
        className="prev page-numbers"
        href={`/blog/${currentPage == 2 ? "" : currentPage - 1}`}
      >
        <i className="fa-solid fa-angles-left"></i>
      </a>
    )}
    {pages?.map((value) =>
      currentPage === parseInt(value) ? (
        <span key={value} className="page-numbers current">
          {value}
        </span>
      ) : (
        <a
          className="page-numbers"
          href={`/blog/${value === "1" ? "" : value}`}
          key={value}
        >
          {value}
        </a>
      )
    )}

    {currentPage < pages?.length && (
      <a className="next page-numbers" href={`/blog/${currentPage + 1}`}>
        <i className="fa-solid fa-angles-right"></i>
      </a>
    )}
  </div>
)

export default React.memo(Pagination)
