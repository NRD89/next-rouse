import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../context/UserAuthContext"
import Link from "next/link"
import Image from "./Image"
import { Dropdown, DropdownItem, Badge, Button } from "@windmill/react-ui"
import { motion } from "framer-motion"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#FFFFFF"
    strokeLinecap="square"
    {...props}
  />
)

const Header = () => {
  const { user, setUser, logout } = useContext(AuthContext)
  const [top, setTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

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
      <div className="max-w-screen-xl mx-auto px-6">
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
          <nav className="flex">
            <ul className="md:flex flex-grow justify-start flex-wrap items-center hidden">
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
              <li>
                <Link href="/instructors">
                  <a className="font-medium text-gray-100 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Instructors
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/blog">
                  <a className="font-medium text-gray-100 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Blog
                  </a>
                </Link>
              </li> */}
            </ul>

            <div className="justify-end">
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="visible md:hidden relative"
              >
                <button
                  onClick={toggleDropdown}
                  className="btn-sm bg-transparent"
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  <svg width="25" height="25" viewBox="0 0 25 25">
                    <Path
                      variants={{
                        closed: { d: "M 2 2.5 L 25 2.5" },
                        open: { d: "M 3 16.5 L 19 2.5" },
                      }}
                    />
                    <Path
                      d="M 2 9.423 L 25 9.423"
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      transition={{ duration: 0.1 }}
                    />
                    <Path
                      variants={{
                        closed: { d: "M 2 16.346 L 25 16.346" },
                        open: { d: "M 3 2.5 L 19 16.346" },
                      }}
                    />
                  </svg>
                </button>
                <Dropdown
                  align="right"
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                >
                  <Link href="/about">
                    <DropdownItem>
                      <a>About</a>
                    </DropdownItem>
                  </Link>
                  <Link href="/roadmap">
                    <DropdownItem>
                      <a>Roadmap</a>
                    </DropdownItem>
                  </Link>
                  <Link href="/instructors">
                    <DropdownItem>
                      <a>Instructors</a>
                    </DropdownItem>
                  </Link>
                </Dropdown>
              </motion.div>
            </div>
            {/* <ul className="flex items-center">
              {user ? (
                <li className="justify-self-end">
                  <div className="relative">
                    <Button
                      onClick={toggleDropdown}
                      className="bg-tertiary"
                      aria-label="Notifications"
                      aria-haspopup="true"
                    >
                      {user.username}
                    </Button>
                    <Dropdown
                      align="right"
                      className="bg-tertiary-darker"
                      isOpen={isOpen}
                      onClose={() => setIsOpen(false)}
                    >
                      <DropdownItem>
                        <Link href="/dashboard">
                          <a>Dashboard</a>
                        </Link>
                      </DropdownItem>
                      <Link href="/">
                        <DropdownItem
                          tag="a"
                          className="text-gray-200 justify-between"
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
                        </DropdownItem>
                      </Link>
                    </Dropdown>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/login">
                      <a className="font-medium text-gray-200 hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                        Sign in
                      </a>
                    </Link>
                  </li>
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
                </>
              )}
            </ul> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
