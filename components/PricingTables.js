import Button from "./Button";

function PricingTables({ prices }) {
  console.log("🚀 ~ file: PricingTables.js:4 ~ PricingTables ~ prices", prices)
  return (
    <section
      id="pricing"
      className="relative border-t border-transparent dark:border-gray-800"
    >
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-100 dark:opacity-60 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">
              Membership Pricing
            </h2>
            <p className="text-lg font-medium text-gray-300">Join The Rouse Yoga Community</p>
          </div>

          {/* Pricing tables */}
          <div className="max-w-xs mx-auto grid gap-6 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
          {prices.map((price) => (
            <div
              key={price.title}
              className="divide-y divide-gray-600 rounded-lg border border-gray-600 shadow-sm"
            >
              <div className="p-6">
                <h2 className="text-lg font-bold leading-6 text-gray-100">
                  {price.title}
                </h2>
                <p className="mt-4 text-sm text-gray-300">
                  {price.description}
                </p>
                <div className="mt-8 -ml-2 flex flex-col flex-wrap items-baseline">
                  <p>
                    <span className="text-2xl font-bold tracking-tight text-gray-100">
                      $
                      {price.discounted_price
                        ? price.discounted_price
                        : price.regular_price}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-300">
                      /mo
                    </span>
                  </p>
                    <div className={`text-base ml-2 ${price.discounted_price ? 'text-gray-200'
                        : 'text-transparent' }`}>
                      $
                      <span
                        className="tracking-tight line-through"
                        style={{ textDecorationColor: `${price.discounted_price ? 'red'
                        : 'transparent'}` }}
                      >
                        {price.regular_price}
                      </span>{" "}
                      <span className={`text-sm ${price.discounted_price ? 'text-gray-300'
                        : 'text-transparent' }`}>
                      /mo
                    </span>
                    </div>
                </div>
                  <a
                    href="https://app.rouse.yoga"
                    className="mt-8 block cta w-full"
                  >
                    Buy {price.title}
                  </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-100">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {price.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                    className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
            {/* Pricing table 1 */}
            {/* <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-dark40 border-2 border-gray-600 dark:border-purple-600 rounded-xl"
              data-aos="fade-down"
            >
              <div className="flex-grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Yearly
                  </div>
                  <div className="inline-flex px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-200 dark:bg-purple-600 dark:bg-opacity-25 rounded-full">
                    <small className="mr-1 uppercase">save</small>$129.89
                  </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">649.99</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /$
                  </span>
                  <span className="font-medium text-red-500 dark:text-red-400 line-through">
                    779.88
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  — Billed yearly
                </div>
              </div>
              <div className="mt-24">
                <Button
                  btnText="Sign Up Today"
                  btnSize="small"
                  btnWidth="full"
                  btnLink="https://app.rouse.yoga"
                />
              </div>
            </div> */}

            {/* Pricing table 2 */}
            {/* <div
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
                  <span className="h3">64.99</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /$
                  </span>
                </div>
                <div className="text-gray-700 dark:text-gray-200 uppercase">
                  — First month $
                  <span
                    className="font-bold text-gray-800 dark:text-gray-50 underline"
                    style={{
                      textDecorationColor: "rgb(93, 93, 255)",
                      textUnderlineOffset: "1px",
                      textDecorationThickness: "2px",
                    }}
                  >
                    29.99
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  — Save $
                  <span className="font-semibold text-gray-600 dark:text-gray-300">
                    174.89
                  </span>{" "}
                  a month*
                </div>
              </div>
              <div className="mt-24">
                <Button
                  btnText="Sign Up Today"
                  btnSize="small"
                  btnWidth="full"
                  btnPriority="secondary"
                  btnLink="https://app.rouse.yoga"
                />
              </div>
            </div> */}

            {/* Pricing table 3 */}
            {/* <div
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
            </div> */}

            {/* Pricing features */}
            {/* <div className="sm:order-first">
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
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-purple-500 mr-3 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Discounted events</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTables;