import React from "react"
import Lottie from "react-lottie"
import animationData from "../lottie/lf30_editor_mjhpwrzd.json"
import Image from "next/image"

function FeaturesZigzag() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div> */}
            <h1 className="h2 font-red-hat-display mb-4">
              Digital Yoga Class Memberships <br /> & More
            </h1>
            <div className="text-left">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our innovative yoga platform helps you unfold into a more
                connected, healed, and calm YOU. With a variety of digital yoga
                classes and instructors from around the country (United States),
                you can choose the class that’s right for your practice.
              </p>
              {/* <Lottie options={defaultOptions} height={220} width={300} /> */}
              <div className="w-full flex items-center justify-center my-10">
                <div className="relative w-full sm:w-2/3">
                  <Image
                    className="rounded"
                    src="c_scale,f_auto,q_80,w_800/v1610703761/rouse-star-down-dog_mnlu8p.jpg"
                    width={400}
                    height={267}
                    alt="About"
                    layout="responsive"
                  />
                </div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Beyond digital yoga classes, however, our vision is to deliver a
                digital membership that fosters a community of togetherness. In
                a world where isolation is the norm, we’re breaking down
                barriers and using technology to make it easier to connect.
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="relative inline-flex flex-row items-center w-full">
                  <div
                    className="mx-auto rounded-sm bg-gradient-to-tl from-tertiary via-purple-600 to-purple-600"
                    // src={require("../images/zz-bg-section-1.jpg")}
                    // width="540"
                    // height="405"
                    // alt="Features 01"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-bg-section-1.jpg")}
                    width="540"
                    height="405"
                    alt="Features 01"
                  /> */}
                  <img
                    className="w-1/3 absolute animate-float"
                    src="/beginner-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `2.5%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-500"
                    src="/intermediate-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `33.333%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    src="/advanced-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ right: `2.5%` }}
                  />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    No cookie-cutter classes here
                  </div>
                  <h3 className="h3 font-red-hat-display mb-3">
                    Yoga Classes for All Skill Levels
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    We believe in Yoga for all. Members of Rouse Yoga get direct
                    access to yoga classes taught by instructors with unique
                    styles and approaches, for students of all skill levels.
                    Whether you’re a beginner or an experienced Yogi, you’ll
                    find a class that fits your style, with your membership.
                  </p>
                  <ul className="text-lg text-gray-600 dark:text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Beginner - Level 1</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Intermediate - Level 2</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Advanced - Level 3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <div className="relative inline-flex flex-row items-center w-full">
                  <div
                    className="mx-auto rounded-sm bg-gradient-to-tr from-tertiary via-purple-600 to-purple-600"
                    // src={require("../images/zz-section-2.jpg")}
                    // width="540"
                    // height="405"
                    // alt="Features 02"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-section-2.jpg")}
                    width="540"
                    height="405"
                    alt="Features 02"
                  /> */}
                  <img
                    className="w-1/3 absolute animate-float"
                    src="/community-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `2.5%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-500"
                    src="/acceptance-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `33.333%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    src="/inspiration-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ right: `2.5%` }}
                  />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    We are here for you
                  </div>
                  <h3 className="h3 font-red-hat-display mb-3">
                    Support & Acceptance When You Need It
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    The Rouse Yoga community offers support and acceptance on
                    and off the mat. Our instructors and students can easily
                    connect and build long-lasting relationships with our
                    innovative tool. Stay engaged with your practice with
                    ongoing support from people who genuinely care about your
                    journey.
                  </p>
                  <ul className="text-lg text-gray-600 dark:text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Community</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Acceptance</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Inspiration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="relative inline-flex flex-row items-center w-full">
                  <div
                    className="mx-auto rounded-sm  bg-gradient-to-tl from-tertiary via-purple-600 to-purple-600"
                    // src={require("../images/zz-section-3.jpg")}
                    // width="540"
                    // height="405"
                    // alt="Features 02"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-section-3.jpg")}
                    width="540"
                    height="405"
                    alt="Features 02"
                    // style={{ min-height: 150, max-height: 405 }}
                  /> */}
                  <img
                    className="w-1/3 absolute animate-float"
                    src="mind-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `2.5%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-500"
                    src="/body-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ left: `33.333%` }}
                  />
                  <img
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    src="/spirit-card.png"
                    width="116"
                    height="175"
                    alt="Features 01"
                    style={{ right: `2.5%` }}
                  />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Not just yoga
                  </div>
                  <h3 className="h3 font-red-hat-display mb-3">
                    We Don’t Just Teach Yoga—We Promote Healing & Growth
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                    As a Rouse Yoga member, you get access to Yoga instructors
                    who incorporate their stories and personal experiences to
                    deliver more meaning and empowerment to their students. Our
                    platform is about more than striking a few yoga poses. It’s
                    designed to strengthen your:
                  </p>
                  <ul className="text-lg text-gray-600 dark:text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Mind</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Body</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-tertiary mr-2 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Spirit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesZigzag
