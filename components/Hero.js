import React from "react"

const Hero = () => {
  return (
    <div className="relative bg-darkBlueBg overflow-hidden sm:h-auto pb-20 md:pb-0 md:h-screen">
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

          <main className="mt-24 mx-auto max-w-screen-xl px-4 sm:mt-24 sm:px-6 md:mt-32 lg:mt-0 lg:px-8 lg:h-screen lg:flex">
            <div className="sm:text-center lg:text-left my-auto">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                Clear your mind.
                <br />
                <span className="text-indigo-500">Find your Strength.</span>
              </h2>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Rouse Yoga helps you find purpose and power in your practice.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-500 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:h-100 lg:h-auto">
        <video className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
          <source src="https://res.cloudinary.com/rouse-yoga/video/upload/f_auto/v1604991240/yoga-1_qnz6lr.mp4" />
        </video>
      </div>
    </div>
  )
}

export default Hero
