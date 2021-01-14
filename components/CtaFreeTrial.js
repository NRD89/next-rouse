import DigitalModal from "./DigitalModal"

const CtaFreeTrial = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* CTA box */}
        <div className="relative border rounded-sm border-gray-100 dark:border-gray-600 shadow-2xl dark:shadow-dark40 bg-white dark:bg-gray-800 py-10 px-8 md:py-16 md:px-12">
          {/* Background illustration */}
          <div
            className="absolute inset-0 left-auto  pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="h-full"
              width="400"
              height="232"
              viewBox="0 0 400 232"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="box-gr-a"
                >
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="box-gr-b"
                >
                  <stop stopColor="rgb(93, 93, 255)" offset="0%" />
                  <stop
                    stopColor="rgb(93, 93, 255)"
                    stopOpacity="0"
                    offset="100%"
                  />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle
                  fillOpacity=".16"
                  fill="url(#box-gr-a)"
                  cx="413"
                  cy="688"
                  r="240"
                />
                <circle
                  fillOpacity=".24"
                  fill="url(#box-gr-b)"
                  cx="400"
                  cy="400"
                  r="400"
                />
              </g>
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            {/* CTA header */}
            <h3 className="h3 font-red-hat-display mb-2">
              Take back your power.
              <br />
              <span className="h4">Practice how you like.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Use our intuitive and engaging platform to help you reconnect.
            </p>

            {/* CTA button */}
            <div className="flex justify-center mt-8">
              <DigitalModal buttonText="Start Free Trial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaFreeTrial
