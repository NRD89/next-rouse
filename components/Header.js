import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../context/UserAuthContext"
import Link from "next/link"
import Image from "./Image"

const Header = () => {
  const { user, setUser, logout } = useContext(AuthContext)
  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 bg-transparent transition duration-700 ease-in-out ${
        !top && "bg-darkBlueBg blur shadow-lg"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="mr-4">
            {/* Logo */}
            <Link href="/" aria-label="Home">
              <a className="block max-w-logo py-3">
                <Image path={"rouse-logo-white-center-symbol.png"} />
              </a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link href="/about">
                  <a className="font-medium text-gray-100 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/roadmap">
                  <a className="font-medium text-gray-100 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Roadmap
                  </a>
                </Link>
              </li>
              {/* {user ? (
                <li>
                  <Link href="/dashboard">
                    <a className="font-medium text-gray-100 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                      Dashboard
                    </a>
                  </Link>
                </li>
              ) : null}
              {user ? (
                <li>
                  <a className="font-medium text-gray-200 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    {user.username}
                  </a>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <a className="font-medium text-gray-200 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                      Sign in
                    </a>
                  </Link>
                </li>
              )}
              {user ? (
                <Link href="/">
                  <a
                    className="btn-sm text-gray-200 bg-indigo-500 hover:bg-indigo-800 ml-3 px-5 py-3 rounded-md"
                    onClick={() => {
                      logout()
                      setUser(null)
                    }}
                  >
                    <span>Logout</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1 inline-block"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </Link>
              ) : (
                <li>
                  <div>
                    <Link href="/signup">
                      <a className="btn-sm text-gray-200 bg-indigo-500 hover:bg-indigo-800 ml-3 px-5 py-3 rounded-md">
                        <span>Sign up</span>
                        <svg
                          className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1 inline-block"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </li>
              )} */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
