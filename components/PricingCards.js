import { useState, useContext } from "react"
import DigitalModal from "./DigitalModal"
import { AuthContext } from "../context/UserAuthContext"
import Link from "next/link"

const PricingCards = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-indigo-900">
      <div className="w-full text-center mt-36">
        <h2 className="font-bold h1 text-gray-100 capitalize">Pricing</h2>
      </div>
      <section className="flex flex-col lg:flex-row  items-center lg:justify-center w-full lg:px-10 py-20 ">
        <article className="bg-gray-50 w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">In-Studio Membership</h5>
          <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
            <span className="text-xl mt-3 mr-1">$</span>
            <span className="text-4xl "> 69.99</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-300">
              Digital Membership Not Included
            </li>
          </ul>
          <button
            className="btn font-medium text-white bg-indigo-600 hover:bg-indigo-700 mt-10 w-full"
            // style={{backgroundImage:`linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)`}}
          >
            Coming Soon
          </button>
        </article>
        <article
          id="pricing"
          className="lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg shadow-xl"
          style={{
            backgroundImage: `linear-gradient(0deg, #5D45F9 0%, #267DEB 100%)`,
          }}
        >
          <h5 className="font-bold text-base ">Digital</h5>
          <h2 className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center">
            <span className="text-xl mt-3 mr-1">$</span>
            <span className="text-4xl "> 19.99</span>
            <span className="text-xl text-gray-400 mt-3 ml-1">$</span>
            <span className="text-4xl text-gray-400 italic line-through">
              {" "}
              34.99
            </span>
          </h2>
          <ul className=" text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">
              Unlimited livestreams
            </li>
            <li className="pt-4 pb-4 border-b border-gray-200">
              30+ Pre-Recorded Classes
            </li>
          </ul>
          {/* <button
            className="btn text-indigo-600 bg-white hover:bg-gray-100 mt-10 w-full"
            onClick={() => setOpen(true)}
          >
            Learn More
          </button> */}
          {!isAuthenticated ? (
            <DigitalModal />
          ) : (
            <Link href="/dashboard/#sub-update">
              <a className="font-bold uppercase tracking-tightish btn text-blue-600  bg-gray-100 hover:bg-gray-300 w-full mt-10">
                Upgrade To Digital
              </a>
            </Link>
          )}
        </article>
        <article className="bg-gray-50 w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
          <h5 className="font-bold text-base">In-Studio Premium</h5>
          <h2 className="flex justify-center pb-4 font-bold border-b border-gray-200">
            <span className="text-xl mt-3 mr-1">$</span>
            <span className="text-4xl "> 84.99</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">
              Digital Membership Included
            </li>
          </ul>
          <button
            className="btn font-medium text-white bg-indigo-600 hover:bg-indigo-700 mt-10 w-full"
            // style={{backgroundImage:`linear-gradient(90deg, #a3a8f0 0%, #696fdd 100%)`}}
          >
            Coming Soon
          </button>
        </article>
      </section>
      {/* <DigitalSubModal open={open} setOpen={setOpen} /> */}
    </div>
  )
}

export default PricingCards
