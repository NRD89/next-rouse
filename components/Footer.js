import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "./Image"
import { GrInstagram } from "react-icons/gr"
import { GrFacebookOption } from "react-icons/gr"
import { FaYelp } from "react-icons/fa"

const Footer = () => {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("subscribe-success=true")) {
      setSuccess(true)
    }
  }, [])

  return (
    <footer className="flex justify-center px-10 text-gray-100 pt-8">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          There's so much more to come,
          <br />
          subscribe and stay informed.
        </h1>

        <div className="flex justify-center mt-6">
          <form
            name="subscribe"
            method="POST"
            data-netlify="true"
            action="/success"
            data-netlify-honeypot="bot-field"
          >
            <div className="bg-white rounded-md">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="m-1 p-2 appearance-none text-gray-700 text-sm"
                  placeholder="Enter your email"
                  required
                />
                <input type="hidden" name="form-name" value="subscribe" />
                <button
                  type="submit"
                  className="w-full btn-sm bg-tertiary hover:bg-tertiary-dark rounded-lg font-semibold uppercase lg:w-auto transition duration-150 ease-in-out"
                >
                  subscribe
                </button>
              </div>
            </div>
          </form>
          {success.length > 1 ? (
            <p className="font-inter mt-2 text-green-500">{success}</p>
          ) : null}
        </div>

        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link href="/" aria-label="Home">
              <a className="block max-w-logo py-3">
                <Image path={"Rouse-Web-Logo.png"} />
              </a>
            </Link>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a href="mailto:support@rouse.yoga">support@rouse.yoga</a>
              <Link href="/terms-and-conditions">
                <a className="px-4 text-sm">Terms and Conditions</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-6 md:mt-0 mb-6">
          <ul className="flex flex-row">
            <li className="p-3">
              <a href="https://www.instagram.com/rouse_yoga">
                <GrInstagram className="w-7 h-7 text-instagram" />
              </a>
            </li>
            <li className="p-3">
              <a href="https://www.facebook.com/rouse.yoga/">
                <GrFacebookOption className="w-7 h-7 text-facebook" />
              </a>
            </li>
            <li className="p-3">
              <a href="https://www.yelp.com/biz/rouse-yoga-riverside">
                <FaYelp className="w-7 h-7 text-yelp" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <small>
            &copy; {new Date().getFullYear()}
            {` `}
            Rouse Yoga. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
