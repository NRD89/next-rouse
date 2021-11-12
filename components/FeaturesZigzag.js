import { useEffect } from "react";
import Image from "next/image";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function FeaturesZigzag() {
  useEffect(() => {
    const player = new Plyr("#player");
  }, []);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">
              Yoga classes, memberships <br /> & More
            </h2>
            <div className="text-left">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                We offer in-studio and online yoga classes both designed to
                bring variety and convenience to your yoga practice. You choose
                the class that’s right for you!
              </p>
              <div className="w-full flex items-center justify-center my-10">
                <div className="relative w-full">
                  <div className="plyr__video-embed" id="player">
                    <iframe
                      src="https://player.vimeo.com/video/644946081?h=55222ca26e"
                      allowFullScreen
                      allowtransparency="true"
                      allow="autoplay"
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  {/* <Image
                    className="rounded"
                    src="c_scale,f_auto,q_auto,dpr_1.5,w_400/v1610703761/rouse-star-down-dog_mnlu8p.jpg"
                    width={400}
                    height={267}
                    alt="About"
                    layout="responsive"
                  /> */}
                </div>
              </div>
              {/* <p className="text-xl text-gray-700 dark:text-gray-300">
                Beyond digital yoga classes, however, our vision is to deliver a
                digital membership that fosters a community of togetherness. In
                a world where isolation is the norm, we’re breaking down
                barriers and using technology to make it easier to connect.
              </p> */}
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
                    className="mx-auto"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-bg-section-1.jpg")}
                    width="540"
                    height="405"
                    alt="Features 01"
                  /> */}
                  <div
                    className="w-1/3 absolute animate-float"
                    style={{ left: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/beginner-card_gg6tjv.png"
                      width={192}
                      height={475}
                      alt="Beginner Level 1 Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-500"
                    style={{ left: `33.333%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/intermediate-card_mitr8o.png"
                      width={192}
                      height={475}
                      alt="Intermediate Level 2 Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    style={{ right: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/advanced-card_safgr5.png"
                      width={192}
                      height={475}
                      alt="Advanced Level 3 Card"
                      layout="responsive"
                    />
                  </div>
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
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    We believe in Yoga for all. Members of Rouse Yoga get direct
                    access to yoga classes taught by instructors with unique
                    styles and approaches, for students of all skill levels.
                    Whether you’re a beginner or an experienced Yogi, you’ll
                    find a class that fits your style, with your membership.
                  </p>
                  <ul className="text-lg text-gray-700 dark:text-gray-300 -mb-2">
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
                    className="mx-auto"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-section-2.jpg")}
                    width="540"
                    height="405"
                    alt="Features 02"
                  /> */}
                  <div
                    className="w-1/3 absolute animate-float"
                    style={{ left: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/community-card_qbheag.png"
                      width={192}
                      height={475}
                      alt="Yogi Community Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-500"
                    style={{ left: `33.333%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/acceptance-card_r1f81c.png"
                      width={192}
                      height={475}
                      alt="Acceptance Hand Over Heart Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    style={{ right: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/inspiration-card_lekfnf.png"
                      width={192}
                      height={475}
                      alt="Inspirational Mediation Postition Card"
                      layout="responsive"
                    />
                  </div>
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
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    The Rouse Yoga community offers support and acceptance on
                    and off the mat. Our instructors and students can easily
                    connect and build long-lasting relationships with our
                    innovative tool. Stay engaged with your practice with
                    ongoing support from people who genuinely care about your
                    journey.
                  </p>
                  <ul className="text-lg text-gray-700 dark:text-gray-300 -mb-2">
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
                    className="mx-auto"
                    style={{ width: `100%`, maxWidth: 540, height: 405 }}
                  ></div>
                  <div
                    className="w-1/3 absolute animate-float"
                    style={{ left: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/mind-card_assatz.png"
                      width={192}
                      height={475}
                      alt="Mind Seed of Life Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-500"
                    style={{ left: `33.333%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/body-card_oys8tu.png"
                      width={192}
                      height={475}
                      alt="Body Sri Yantra Card"
                      layout="responsive"
                    />
                  </div>
                  <div
                    className="w-1/3 absolute animate-float animation-delay-1000"
                    style={{ right: `2.5%` }}
                  >
                    <Image
                      src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_192,dpr_1.5/v1610845478/spirit-card_fcfnu2.png"
                      width={192}
                      height={475}
                      alt="Spirit Flower of Life Card"
                      layout="responsive"
                    />
                  </div>
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
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    As a Rouse Yoga member, you get access to Yoga instructors
                    who incorporate their stories and personal experiences to
                    deliver more meaning and empowerment to their students. Our
                    platform is about more than striking a few yoga poses. It’s
                    designed to strengthen your:
                  </p>
                  <ul className="text-lg text-gray-700 dark:text-gray-300 -mb-2">
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
  );
}

export default FeaturesZigzag;
