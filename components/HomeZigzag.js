import { useEffect } from "react";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function FeaturesZigzag() {
  useEffect(() => {
    const player = new Plyr("#player");
  }, []);
  return (
    <section>
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Items */}
          <div className="grid gap-36">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="relative inline-flex flex-row items-center w-full">
                  <div
                    className="mx-auto bg-gradient-to-tr from-blue-700 to-pink-700 rounded-none sm:rounded-xl h-[305px] md:h-[540px]"
                    style={{ width: `100%` }}
                  >
                    <LazyLoad height={540}>
                      <video
                        className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-80 rounded-none sm:rounded-xl"
                        src="https://player.vimeo.com/progressive_redirect/playback/702748083/rendition/1080p/file.mp4?loc=external&signature=ed03edc7f3ad86e97380c70e073b7b228a7f91027795a0d0dab88f5517601c0f"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </LazyLoad>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 sm:px-0"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    No cookie-cutter classes here
                  </div>
                  <h3 className="h3 font-red-hat-display mb-3">
                    Be apart of a studio that’s different
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    We offer a welcoming, community-focused space that
                    encourages growth and healing. Our development and
                    acceptance-focused classes will help you find your own
                    practice and peace.
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
                    className="mx-auto bg-gradient-to-tr to-blue-700 from-pink-700 rounded-none sm:rounded-xl h-[305px] md:h-[540px]"
                    style={{ width: `100%` }}
                  >
                    <LazyLoad height={540}>
                      <video
                        className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-80 rounded-none sm:rounded-xl"
                        src="https://player.vimeo.com/progressive_redirect/playback/702757651/rendition/1080p/file.mp4?loc=external&signature=280a97f1e77bdd6fc6a5b28fed72cd0d7b406b1a55b3285c07b167ed55d1a933"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </LazyLoad>
                  </div>
                  {/* <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded"
                    src={require("../images/zz-section-2.jpg")}
                    width="540"
                    height="405"
                    alt="Features 02"
                  /> */}
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 sm:px-0"
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
                    Rouse Yoga was created to offer a community that supports
                    and accepts you on and off the mat with people and classes
                    that cater to your individual needs.
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
                      <span>Empowerment</span>
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
                    className="mx-auto bg-gradient-to-tl from-blue-700 to-pink-700 rounded-none sm:rounded-xl h-[305px] md:h-[540px]"
                    style={{ width: `100%` }}
                  >
                    <LazyLoad height={540}>
                      <video
                        className="absolute inset-0 w-full h-full object-cover opacity-80 dark:opacity-80 rounded-none sm:rounded-xl"
                        src="https://player.vimeo.com/progressive_redirect/playback/702509018/rendition/1080p/file.mp4?loc=external&signature=ea9b57f42722944d1ca80f7832fa42a678e3ecc148f380e55ed0ec0be1bd85d3"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </LazyLoad>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 px-4 sm:px-0"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Not just yoga
                  </div>
                  <h3 className="h3 font-red-hat-display mb-3">
                    We Don’t Just Teach Yoga, We Promote Healing & Growth
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                    Our Yoga studio is for people who want more than just a few
                    yoga poses. Our instructors encourage confidence in your
                    practice and help our students reach their highest
                    potential.
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
