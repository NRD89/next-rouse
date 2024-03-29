/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ClipboardListIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  SupportIcon,
  GlobeIcon,
  XIcon,
  AcademicCapIcon,
  SortAscendingIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import DarkLogo from "../public/ry_logo.svg";
import LightLogo from "../public/ry_logo_light.svg";
import { useTheme } from "next-themes";
import { LightSwitch } from "../components/LightSwitch";

const solutions = [
  {
    name: "Classes",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/classes",
    icon: ClipboardListIcon,
  },
  {
    name: "Schedule",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/class-schedule",
    icon: CalendarIcon,
  },
  {
    name: "Pricing",
    description: "Your customers' data will be safe and secure.",
    href: "/#pricing",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Holistic Corner",
    description: "Connect with third-party tools that you're already using.",
    href: "/holistic-corner",
    icon: GlobeIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Studio Events",
    description: "Check out our in-studio events and reserve your spot today.",
    href: "/events",
    icon: CalendarIcon,
  },
  {
    name: "Teacher Training",
    description: "Want to be a certified Yoga Instructor?",
    href: "/teacher-training",
    icon: AcademicCapIcon,
  },
  {
    name: "Azension",
    description:
      "A music festival unifying edm and yoga to explore our spirituality.",
    href: "/azension",
    icon: SortAscendingIcon,
  },
  {
    name: "Inward",
    description:
      "A community based music festival for self expression and deep connection.",
    href: "/inward-fest",
    icon: HeartIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [top, setTop] = useState(true);
  //   const [isOpen, setIsOpen] = useState(false);
  //   function toggleDropdown() {
  //     setIsOpen(!isOpen);
  //   }

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
    <Popover
      className={`fixed z-30 w-full ${
        top && "bg-transparent"
      } transition duration-700 ease-in-out ${
        !top &&
        "bg-white bg-opacity-80 shadow-lg backdrop-blur backdrop-filter dark:bg-black dark:bg-opacity-75 dark:shadow-dark40"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 md:space-x-10 lg:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* Site branding */}
            <div
              className="m-0 max-w-[180px] -mb-1"
              style={{ minWidth: `125px` }}
            >
              {/* Logo */}
              <Link href="/" aria-label="Home">
                <a className="text-gray-900 dark:text-gray-100">
                  {isDarkMode() ? (
                    <Image src={LightLogo} />
                  ) : (
                    <Image src={DarkLogo} />
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-6 lg:flex">
            <Link href="/classes">
              <a className="flex items-center font-medium transition duration-150 ease-in-out hover:text-gray-500">
                Classes
              </a>
            </Link>
            <Link href="/class-schedule">
              <a className="flex items-center font-medium transition duration-150 ease-in-out hover:text-gray-500">
                Schedule
              </a>
            </Link>
            <Link href="/#pricing">
              <a className="flex items-center font-medium transition duration-150 ease-in-out hover:text-gray-500">
                Pricing
              </a>
            </Link>
            <Link href="/holistic-corner">
              <a className="flex items-center font-medium transition duration-150 ease-in-out hover:text-gray-500">
                Holistic Corner
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-black dark:text-white"
                        : "text-gray-900 dark:text-gray-100",
                      "focus:outline-none group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:bg-black"
                    )}
                  >
                    <span>Events</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 dark:bg-gray-900 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex-1 lg:flex lg:w-0">
            {/* Desktop lights switch */}
            <LightSwitch />
            <a
              className="ml-4 rounded-md border border-gray-50 bg-blue-500 px-3 py-1 font-medium uppercase tracking-tight text-white"
              href="https://app.rouse.yoga"
            >
              Login/Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg border border-gray-300 bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div
                  className="m-0 max-w-[180px]"
                  style={{ minWidth: `125px` }}
                >
                  {/* Logo */}
                  <Link href="/" aria-label="Home">
                    <a className="text-gray-900 dark:text-gray-100">
                      {isDarkMode() ? (
                        <Image src={LightLogo} />
                      ) : (
                        <Image src={DarkLogo} />
                      )}
                    </a>
                  </Link>
                </div>

                <div className="-mr-2 inline-flex items-center space-x-2">
                  {/* Desktop lights switch */}
                  <LightSwitch />
                  <Popover.Button className="focus:outline-none inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-100 dark:hover:bg-gray-800">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="https://app.rouse.yoga"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Login/Sign up
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
