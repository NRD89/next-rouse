import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "./Image"

const Footer = () => {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("subscribe-success=true")) {
      setSuccess(true)
    }
  }, [])

  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-darkBlueBg">
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
                  className="w-full btn-sm bg-indigo-600 rounded-lg font-semibold uppercase lg:w-auto"
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
                <Image path={"rouse-logo-white-center-symbol.png"} />
              </a>
            </Link>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link href="/about">
                <a className="px-4 text-sm">About</a>
              </Link>
              <Link href="/roadmap">
                <a className="px-4 text-sm">Roadmap</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
