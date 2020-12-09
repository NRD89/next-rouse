import React from "react"
import BackgroundImage from "./BackgroundImage"
import DigitalModal from "./DigitalModal"

const Hero = () => {
  return (
    <div className="relative bg-darkBlueBg overflow-hidden sm:h-auto pb-20 md:pb-0 lg:h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-darkBlueBg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 w-48 text-darkBlueBg transform translate-x-1/2 h-full"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-36 mx-auto max-w-screen-xl px-4 sm:mt-24 sm:px-6 md:mt-32 lg:mt-0 lg:px-8 lg:h-screen lg:flex">
            <div className="sm:text-center lg:text-left my-auto">
              <h2 className="text-4xl tracking-tightish leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                Clear your mind.
                <br />
                <span className="text-tertiary">
                  Find your <span className="ani-gradient flow">Strength</span>.
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Rouse Yoga helps you find purpose and power in your practice.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* <div className="rounded-md shadow">
                  <a
                    href="#pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Go Digital
                  </a>
                </div> */}
                <DigitalModal />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:h-100 lg:h-auto">
        <BackgroundImage
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          path={"rouse-yoga-hero.jpg"}
        />
      </div>
      <style jsx>{`
        .ani-gradient {
          animation: flow 15s ease-in-out infinite;
          background: linear-gradient(
            -60deg,
            #5d45f9,
            #f7ce68,
            #5d45f9,
            #fbab7e
          );
          background-size: 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes flow {
          0% {
            background-position: 0 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
