import Button from "./Button";

function PricingTables() {
  return (
    <section
      id="pricing"
      className="relative bg-gray-900 border-t border-transparent dark:border-gray-800"
    >
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">
              Join The Rouse Yoga Community
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-400">
                Our innovative yoga platform offers in-studio memberships,
                live-streaming <small>(coming soon)</small> and VoD{" "}
                <small>(coming soon)</small> to create a truly interactive
                community. Easy to use and navigate, your membership helps you
                not just learn how to practice yoga, but how to find purpose in
                that practice.
              </p>
            </div>
          </div>

          {/* Pricing tables */}
          <div className="max-w-xs mx-auto grid gap-6 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* Pricing table 1 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-dark40 border-2 border-gray-600 dark:border-purple-600 rounded-xl"
              data-aos="fade-down"
            >
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Yearly
                  </div>
                  <div className="inline-flex px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-200 dark:bg-purple-600 dark:bg-opacity-25 rounded-full">
                    $62.50<small>/mo</small>
                  </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">749.99</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /$
                  </span>
                  <span className="font-medium text-red-500 dark:text-red-400 line-through">
                    899.88
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  — Billed yearly
                </div>
              </div>
              <div className="mt-24">
                <Button
                  buttonText="Sign Up Today"
                  btnSize="small"
                  btnWidth="full"
                />
              </div>
            </div>

            {/* Pricing table 2 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-600"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Monthly
                  </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">74.99</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /mo
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  — Save $
                  <span className="font-semibold text-gray-600 dark:text-gray-300">
                    164.89
                  </span>{" "}
                  a month*
                </div>
              </div>
              <div className="mt-24">
                <Button
                  buttonText="Sign Up Today"
                  btnSize="small"
                  btnWidth="full"
                  btnPriority="secondary"
                />
              </div>
            </div>

            {/* Pricing table 3 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow rounded-xl border border-gray-600"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Drop In
                  </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">20</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /per class
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  —{" "}
                  <span>
                    First class is{" "}
                    <b
                      className="underline text-lg text-gray-800 dark:text-gray-300"
                      style={{
                        textDecorationColor: "rgb(93, 93, 255)",
                        textUnderlineOffset: "1px",
                        textDecorationThickness: "2px",
                      }}
                    >
                      FREE
                    </b>
                    !
                  </span>
                </div>
              </div>
              <div className="mt-24">
                <a
                  href="https://app.rouse.yoga"
                  className="btn-sm disabled:opacity-50 text-white bg-purple-500 hover:bg-purple-400 dark:text-purple-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full"
                >
                  Take a Class!
                </a>
              </div>
            </div>

            {/* Pricing features */}
            <div className="sm:order-first">
              <div className="text-right hidden sm:block">
                <svg
                  className="inline-flex -mt-3 mr-5 mb-3"
                  width="86"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-gray-600"
                    d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z"
                  />
                </svg>
              </div>
              <div className="text-3xl text-center font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-purple-400">
                Black Friday<br />Weekend Sale
              </div>
              <div className="text-lg font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-gray-100">
                All plans include:
              </div>
              <ul className="text-gray-400 flex-grow mb-4">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited in-studio classes</span>
                </li>
                {/* <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Videos on demand</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Live chat with instructors</span>
                </li> */}
                {/*<li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>A/B testing</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Exclusive channels</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Free resources</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Landing page builder</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Smart forms and reports</span>
                </li> */}
              </ul>
              {/* <div className="text-lg font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-gray-100">
                Drop in class price:
              </div>
              <ul className="text-gray-400 flex-grow mb-4">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    First class is{" "}
                    <b
                      className="underline text-gray-300"
                      style={{
                        textDecorationColor: "rgb(93, 93, 255)",
                        textUnderlineOffset: "1px",
                        textDecorationThickness: "2px",
                      }}
                    >
                      FREE
                    </b>
                    !
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>$20 after the first class</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-400 text-center pb-4">
        <small className="text-gray-300 text-center">
          *Based on drop in prices and average student attending 3 classes per
          week.
        </small>
      </div>
    </section>
  );
}

export default PricingTables;
