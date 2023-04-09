import Link from "next/link";
import React, { FC } from "react"

const Pagination: FC<{ currentPage: number; pages: string[] }> = ({
  currentPage,
  pages
}) => {
    if(!pages || pages?.length == 1) return <></>
    
    return (
        <div className="pagination-area pb-100">
            {currentPage > 1 &&
                <Link
                    className="prev page-numbers"
                    href={`/blog/${currentPage === 2 ? "" : currentPage - 1}`}
                >
                    <i className="fa-solid fa-angles-left"></i>
                </Link>
            }
            {pages.map(page =>
                currentPage === parseInt(page) ?
                    <span key={page} className="page-numbers current">
                        {page}
                    </span>
                :
                    <Link
                        className="page-numbers"
                        href={`/blog/${page === "1" ? "" : page}`}
                        key={page}
                    >
                        {page}
                    </Link>
            )}

            {currentPage < pages.length &&
                <Link className="next page-numbers" href={`/blog/${currentPage + 1}`}>
                    <i className="fa-solid fa-angles-right"></i>
                </Link>
            }
        </div>
    )
}

export default React.memo(Pagination)
