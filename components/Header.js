import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, DropdownItem, Badge, Button } from "@windmill/react-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";

// import useAuth from "../hooks/useAuth"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    // stroke={`#f4f5f7`}
    strokeLinecap="square"
    {...props}
  />
);

const variants = {
  open: {
    rotateX: 0,
    y: 0,
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 2.5,
      damping: 50,
      stiffness: 400,
      type: "spring",
    },
    display: "block",
  },
  closed: {
    rotateX: -15,
    y: -320,
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      mass: 0.5,
      damping: 60,
      stiffness: 500,
      type: "spring",
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Header = () => {
  // const { mutate } = useAuth()
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const isDarkMode = () => {
    if (theme === "dark") {
      return true;
    }
    return false;
  };

  return (
    <header
      className={`fixed w-full z-30 ${
        top && "bg-transparent"
      } transition duration-700 ease-in-out ${
        !top &&
        "bg-white backdrop-filter backdrop-blur shadow-lg bg-opacity-80 dark:bg-black dark:shadow-dark40 dark:bg-opacity-75"
      }`}
    >
      <div
        className={`w-full bg-gradient-to-l from-purple-700 via-pink-800 to-purple-700 text-xs xs:text-sm md:text-base text-gray-50 flex justify-center font-medium uppercase items-center py-1`}
      >
        {/* <a href="https://app.rouse.yoga">Sign up and get your first class <strong className="text-white tracking-wide">FREE</strong>!</a> */}
        💙{" "}
        <Link href="/events">
          <a
            className="underline"
            style={{
              textDecorationColor: "#60a5fa",
              textDecorationThickness: "2px",
              textUnderlineOffset: "2px",
            }}
          >
            Check out our Valentines day Events!
          </a>
        </Link>
        <span className="ml-1">💙</span>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div
            className="m-0 sm:mr-4 w-4/12 max-w-logo py-3"
            style={{ minWidth: `125px` }}
          >
            {/* Logo */}
            <Link href="/" aria-label="Home">
              <a className="text-gray-900 dark:text-gray-100">
                <svg
                  className="fill-current"
                  // width="351"
                  // height="69"
                  viewBox="0 0 351 69"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M51.3955 14.6613C40.4823 14.6613 31.6354 23.5077 31.6354 34.4204C31.6354 45.3331 40.4823 54.1795 51.3955 54.1795C62.3087 54.1795 71.1557 45.3331 71.1557 34.4204C71.1557 23.5077 62.3087 14.6613 51.3955 14.6613ZM31.3096 34.4204C31.3096 23.3278 40.3024 14.3354 51.3955 14.3354C62.4887 14.3354 71.4815 23.3278 71.4815 34.4204C71.4815 45.513 62.4887 54.5054 51.3955 54.5054C40.3024 54.5054 31.3096 45.513 31.3096 34.4204ZM51.4116 15.2187L51.5935 15.4534L54.8771 19.7205H63.2742L59.4146 25.1166H65.4949L65.263 25.4669L62.6517 29.4348H70.0442L66.1932 34.4258L70.0754 39.4708H62.7003L65.465 43.6718H59.4012L63.2735 49.1038H54.8678L51.3807 53.6232L51.1993 53.3892L47.8927 49.1038H39.5837L43.4561 43.6718H37.3617L37.5881 43.3225L40.123 39.4708H32.7487L36.5993 34.467L32.7165 29.4348H40.1721L37.3302 25.1166H43.4435L39.583 19.7205H47.9473L51.4116 15.2187ZM47.598 20.1745H40.4827L43.9107 24.9659L47.598 20.1745ZM43.4476 25.5678H38.1676L40.6016 29.2661L43.4476 25.5678ZM40.1203 29.8915H33.6468L36.8879 34.0921L40.1203 29.8915ZM36.8866 34.8393L33.6781 39.0071H40.1024L36.8866 34.8393ZM40.57 39.6132L38.1952 43.2206H43.3534L40.57 39.6132ZM43.8741 43.8955L40.482 48.6553H47.5467L43.8741 43.8955ZM48.4704 49.1038L51.3804 52.8752L54.2901 49.1038H48.4704ZM55.2139 48.6553H62.3752L58.9367 43.8304L55.2139 48.6553ZM59.4072 43.2206H64.6289L62.2249 39.5688L59.4072 43.2206ZM62.6583 39.0071H69.1448L65.9066 34.7972L62.6583 39.0071ZM65.9041 34.0502L69.1126 29.8915H62.7039L65.9041 34.0502ZM62.2226 29.266L64.6565 25.5678H59.3768L62.2226 29.266ZM58.9311 24.9887L62.3745 20.1745H55.2265L58.9311 24.9887ZM48.1759 20.1745L44.3714 25.1166H49.5699L51.4121 22.3175L53.2541 25.1166H58.4605L54.6592 20.1745H48.1759ZM54.31 19.7205H48.5254L51.4189 15.9618L54.31 19.7205ZM37.1752 34.4644L40.5442 38.8308L43.45 34.4155L40.5754 30.0475L37.1752 34.4644ZM48.1244 48.6553H54.6361L58.4809 43.6718H53.2823L51.4121 46.5137L49.5418 43.6718H44.2793L48.1244 48.6553ZM65.6176 34.4215L62.2507 30.0441L59.3737 34.4158L62.25 38.7865L65.6176 34.4215ZM43.8904 25.7413L41.0471 29.4348H46.5328L43.8904 25.7413ZM41.0132 29.8915L43.7203 34.0048L46.4274 29.8915H41.0132ZM41.0379 39.4708L43.8514 43.1173L46.451 39.4708H41.0379ZM58.9592 43.0519L61.722 39.4708H56.4062L58.9592 43.0519ZM61.782 29.4348L58.9549 25.7593L56.326 29.4348H61.782ZM58.5169 25.5678H53.551L55.9306 29.1837L58.5169 25.5678ZM52.7112 25.1166L51.4121 23.143L50.1129 25.1166H52.7112ZM49.2729 25.5678H44.3413L46.91 29.1582L49.2729 25.5678ZM43.7207 34.8268L40.9689 39.0071H46.4719L43.7207 34.8268ZM44.3551 43.2206H49.2448L46.8973 39.6535L44.3551 43.2206ZM50.0824 43.6718L51.4121 45.6922L52.7417 43.6718H50.0824ZM53.5792 43.2206H58.5021L55.9427 39.6293L53.5792 43.2206ZM61.8552 39.0071L59.1033 34.8267L56.3521 39.0071H61.8552ZM59.1036 34.0053L61.811 29.8915H56.3964L59.1036 34.0053ZM46.9169 29.9716L43.991 34.4162L46.9016 38.8387L50.0755 34.3866L46.9169 29.9716ZM55.5538 29.4348L53.0083 25.5678H49.8159L47.2703 29.4348H55.5538ZM47.3176 39.4708L49.7854 43.2206H53.0387L55.5066 39.4708H47.3176ZM55.9384 38.8146L58.8331 34.4162L55.9239 29.9969L52.783 34.3883L55.9384 38.8146ZM50.3637 34.7895L47.3579 39.0071H55.4993L52.4948 34.7912L51.43 36.2799L50.3637 34.7895ZM47.4347 29.8915L50.3625 33.9839L51.4286 32.4885L52.4959 33.9857L55.4243 29.8915H47.4347ZM52.2078 34.3885L51.4286 33.2952L50.6507 34.3867L51.43 35.476L52.2078 34.3885Z"
                    className="stroke-current"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M201.807 66.2601H197.89L174.694 0.669922H180.282L180.958 2.58106H179.287L201.807 66.2601ZM203.478 66.2601H201.807L202.483 68.1712H208.072L184.876 2.58106H180.958L203.478 66.2601Z"
                  />
                  <path d="M210.102 53.7482H214.507V36.6848L227.61 15.0934H222.38L212.36 32.2671H212.029L202.009 15.0934H196.999L210.102 36.6848V53.7482Z" />
                  <path d="M248.844 54.466C260.076 54.466 268.555 45.7963 268.555 34.4208C268.555 23.1556 260.131 14.3755 248.899 14.3755C237.723 14.3755 229.244 23.0452 229.244 34.4208C229.244 45.9068 237.668 54.466 248.844 54.466ZM248.899 50.2692C240.365 50.2692 233.869 43.5875 233.869 34.4208C233.869 25.3645 240.365 18.5723 248.899 18.5723C257.433 18.5723 263.93 25.3645 263.93 34.4208C263.93 43.5875 257.433 50.2692 248.899 50.2692Z" />
                  <path d="M293.686 54.466C302.44 54.466 311.029 49.5513 312.791 35.6356H295.723V39.5563H307.505C305.578 47.2873 299.687 50.2692 293.741 50.2692C285.207 50.2692 278.71 43.5875 278.71 34.4208C278.71 25.3645 285.097 18.5723 293.631 18.5723C299.577 18.5723 304.477 21.8856 306.514 26.9107H311.469C308.937 19.6215 302.22 14.3755 293.631 14.3755C282.454 14.3755 274.085 23.0452 274.085 34.4208C274.085 45.9068 282.509 54.466 293.686 54.466Z" />
                  <path d="M345.781 53.7482H350.461L336.257 15.0934H329.925L315.555 53.7482H320.235L323.593 44.5814H342.423L345.781 53.7482ZM325.08 40.4951L332.843 19.1797H333.173L340.936 40.4951H325.08Z" />
                  <path d="M0.461426 53.7482H4.92477V38.1206H11.4269L21.07 53.7482H26.4701L16.1107 37.734C22.1169 36.6296 25.2578 32.1015 25.2578 26.3585C25.2578 19.6215 20.574 15.0934 12.6943 15.0934H0.461426V53.7482ZM4.92477 34.1447V19.0693H12.4188C17.874 19.0693 20.6291 22.3273 20.6291 26.4137C20.6291 31.494 17.2128 34.1447 12.6943 34.1447H4.92477Z" />
                  <path d="M92.911 54.466C102.058 54.466 107.293 48.5574 107.293 39.8324V15.0934H102.885V39.7772C102.885 46.2381 99.4132 50.3244 92.911 50.3244C86.4088 50.3244 82.9925 46.2381 82.9925 39.8324V15.0934H78.5291V39.8876C78.5291 48.6678 83.6537 54.466 92.911 54.466Z" />
                  <path d="M128.516 54.466C136.947 54.466 141.906 49.6066 141.906 43.5322C141.906 27.9047 120.526 35.2491 120.526 24.7018C120.526 21.499 122.895 18.4619 128.35 18.4619C133.585 18.4619 136.506 21.1677 136.506 25.5854H141.079C141.079 17.5783 134.246 14.3755 128.406 14.3755C120.636 14.3755 116.062 19.1797 116.062 24.7018C116.062 40.1638 137.387 31.7149 137.387 43.8084C137.387 47.8395 133.751 50.3244 128.681 50.3244C122.84 50.3244 119.203 46.7351 119.203 42.2622H114.74C114.74 49.4409 120.856 54.466 128.516 54.466Z" />
                  <path d="M150.165 53.7482H172.757V49.717H154.629V36.0774H169.727V32.0462H154.629V19.1797H172.151V15.0934H150.165V53.7482Z" />
                </svg>
              </a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex lg:flex-grow">
            <ul className="lg:flex flex-grow flex-wrap items-center hidden text-sm">
              <li>
                <Link href="/about">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    About
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/roadmap">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Roadmap
                  </a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/instructors">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Instructors
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/class-schedule">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Schedule
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="font-medium hover:text-gray-500 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    Events
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="flex flex-wrap items-center justify-end">
              <li>
                {/* Desktop lights switch */}
                <div className="form-switch focus-within:outline-blue flex flex-col justify-center ml-3">
                  <input
                    type="checkbox"
                    name="light-switch"
                    id="light-switch-desktop"
                    className="light-switch sr-only"
                    checked={isDarkMode()}
                    onChange={switchTheme}
                  />
                  <label className="relative" htmlFor="light-switch-desktop">
                    <span
                      className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                      aria-hidden="true"
                    ></span>
                    <svg
                      className="absolute inset-0"
                      width="44"
                      height="24"
                      viewBox="0 0 44 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        className="fill-current text-white"
                        fillRule="nonzero"
                        opacity=".88"
                      >
                        <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                        <circle cx="32" cy="12" r="3" />
                        <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                        <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                      </g>
                    </svg>
                    <span className="sr-only">
                      Switch to light / dark version
                    </span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pl-2 sm:pl-4 w-10 h-10 rounded-full text-gray-900 dark:text-gray-100 lg:hidden flex justify-center items-center">
                  {/* <Menu>
                    {({ open }) => (
                      <>
                        <Menu.Button className="ml-auto group inline-flex items-center space-x-2 focus:outline-none">
                          <svg
                            onClick={toggleDropdown}
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            className="stroke-current  text-gray-900 dark:text-gray-200 -z-10"
                          >
                            <Path
                              // stroke={
                              //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                              // }
                              animate={{ d: open ? "M 3 16.5 L 19 2.5" : "M 2 2.5 L 25 2.5"}}
                              variants={{
                                closed: { d: "M 2 2.5 L 25 2.5" },
                                open: { d: "M 3 16.5 L 19 2.5" },
                              }}
                            />
                            <Path
                              // stroke={
                              //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                              // }
                              d="M 2 9.423 L 25 9.423"
                              variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 },
                              }}
                              transition={{ duration: 0.1 }}
                            />
                            <Path
                              // stroke={
                              //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                              // }
                              animate={{ d: open ? "M 3 2.5 L 19 16.346" : "M 2 16.346 L 25 16.346"}}
                            />
                          </svg>
                        </Menu.Button>
                        <AnimatePresence exitBeforeEnter>
                          {open && (
                            <Menu.Items
                              as={motion.div}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={variants}
                              // transition={{
                              //   duration: 0.3,
                              // }}
                              static
                              className="absolute right-6 md:right-8 top-20 bg-gradient-to-bl from-blueGray-800 to-blueGray-900 text-gray-100 rounded-lg focus:outline-none border border-blueGray-700 overflow-hidden z-10"
                            >
                              <div className="p-2">
                                <Menu.Item>
                                  <Link href="/about">
                                    <a className="block px-4 py-2 whitespace-nowrap rounded-lg border border-transparent hover:bg-blueGray-700">
                                      About
                                    </a>
                                  </Link>
                                </Menu.Item>
                                <Menu.Item>
                                  <Link href="/class-schedule">
                                    <a className="block px-4 py-2 whitespace-nowrap rounded-lg border border-transparent hover:bg-blueGray-700">
                                      Schedule
                                    </a>
                                  </Link>
                                </Menu.Item>
                                <Menu.Item>
                                  <Link href="/events">
                                    <a className="block px-4 py-2 whitespace-nowrap rounded-lg border border-transparent hover:bg-blueGray-700">
                                      Events
                                    </a>
                                  </Link>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="https://app.rouse.yoga"
                                    className="block px-4 py-2 whitespace-nowrap rounded-lg border border-transparent hover:bg-blueGray-700"
                                  >
                                    Sign up/Login
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </Menu> */}
                  <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className=" relative"
                  >
                    <button
                      // onClick={toggleDropdown}
                      className="bg-transparent pt-2 text-gray-900 dark:text-gray-200 "
                      aria-label="Nav"
                      aria-haspopup="true"
                    >
                      <svg
                        onClick={toggleDropdown}
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        className="stroke-current  text-gray-900 dark:text-gray-200 -z-10"
                      >
                        <Path
                          // stroke={
                          //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                          // }
                          variants={{
                            closed: { d: "M 2 2.5 L 25 2.5" },
                            open: { d: "M 3 16.5 L 19 2.5" },
                          }}
                        />
                        <Path
                          // stroke={
                          //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                          // }
                          d="M 2 9.423 L 25 9.423"
                          variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                          }}
                          transition={{ duration: 0.1 }}
                        />
                        <Path
                          // stroke={
                          //   isDarkMode ? `rgb(212,212,216)` : `rgb(29,29,32)`
                          // }
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
                      {/* <Link href="/instructors">
                        <DropdownItem>
                          <a>Instructors</a>
                        </DropdownItem>
                      </Link> */}
                      <Link href="/class-schedule">
                        <DropdownItem>
                          <a>Schedule</a>
                        </DropdownItem>
                      </Link>
                      <Link href="/events">
                        <DropdownItem>
                          <a>Events</a>
                        </DropdownItem>
                      </Link>
                      <>
                        <DropdownItem>
                          <a href="https://app.rouse.yoga">Sign up/Login</a>
                        </DropdownItem>
                      </>
                      <>
                        <DropdownItem>
                          <a href="#pricing">Pricing</a>
                        </DropdownItem>
                      </>
                    </Dropdown>
                  </motion.div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
