import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"
import Logo from "../Common/Logo"
import { menuData } from "../../data/menu"

const Navbar = () => {
  const [currentPath, setCurrentPath]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("")
  const router: NextRouter = useRouter()
  const [menu, setMenu]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true)
  const [isSticky, setIsSticky]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const toggleNavbar = () => {
    setMenu(!menu)
  }

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  useEffect(() => {
    setCurrentPath(router.asPath)
  }, [router])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 170)
    })
  })

  if (!menuData) return <></>

  return (
    <div
      id="navbar"
      className={`navbar-area dark-navbar${isSticky ? " is-sticky" : ""}`}
    >
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Logo className="navbar-brand" />
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {menuData.map((item, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      currentPath == item.href && "active"
                    }`}
                  >
                    {item.name}{" "}
                    <i
                      className={`fa-solid ${
                        item?.children && "fa-angle-down"
                      }`}
                    ></i>
                  </Link>
                  {item?.children && (
                    <ul className="dropdown-menu">
                      {Object.entries(item.children).map(([key, submenu]) => (
                        <li className="nav-item" key={key}>
                          <Link
                            href={submenu.viewDetails}
                            className={`nav-link ${
                              currentPath == submenu.viewDetails && "active"
                            }`}
                          >
                            {submenu.pageTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="others-options">
              <Link href="/contact/" className="btn btn-primary">
                Prendre Rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default React.memo(Navbar)
