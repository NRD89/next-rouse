import Image from "next/image"
import DigitalModal from "./DigitalModal"
// import ReactPlayer from "react-player"

const HeroHome = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="c_scale,f_auto,q_auto:eco,w_1500/v1610702114/rouse-hero-image_f3md0w.jpg"
          // width={1440}
          // height={577}
          alt="About"
          layout="fill"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-96 xs:pb-80 sm:pb-32 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div
                className="relative inline-flex items-start"
                data-aos="fade-up"
              >
                {/* <img
                  className="opacity-50"
                  src={require("../images/about-hero.jpg")}
                  width="768"
                  height="432"
                  alt="About hero"
                /> */}
                <video
                  className="opacity-80 rounded-sm"
                  width="1000"
                  height="562"
                  alt="Rouse hero video of students watching live stream"
                  autoPlay
                  muted
                  controls={false}
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="https://player.vimeo.com/external/502958485.hd.mp4?s=5fc97fe3868abe94ed5c500e6c145e5b43bdf43a&profile_id=174"
                    type="video/mp4"
                  />
                </video>
                {/* <ReactPlayer
                  className="opacity-70 rounded-sm overflow-hidden"
                  url="https://dp25d8rokln6s.cloudfront.net/rouse-hero-video.mp4"
                  // url="http://64.225.36.253:5080/LiveApp/streams/621283582412670363663040.mp4"
                  width="100%"
                  height="100%"
                  alt="About hero"
                  muted={true}
                  loop={true}
                  playing={true}
                  config={{
                    file: {
                      attributes: {
                        autoPlay: true,
                        muted: true,
                        preload: "auto",
                      },
                    },
                  }}
                  // light={`${process.env.NEXT_PUBLIC_API_URL}${instructor[0].Image.formats.medium.url}`}
                /> */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
              </div>
              <div
                className="absolute pt-80 xs:pt-72 sm:pt-40 md:pt-32 max-w-4xl"
                data-aos="fade-down"
              >
                <h1 className="h1 sm:h1 mb-4 md:text-6xl font-red-hat-display">
                  Empower Your Yoga{" "}
                  <span className="text-purple-600 dark:text-gray-100">
                    Practice
                  </span>
                </h1>
                <h2 className="h4 mb-4 font-red-hat-display">
                  Try our Digital Membership free for 7 days
                </h2>
                <p
                  className="text-xl text-gray-700 max-w-prose mx-auto dark:text-gray-300"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  Discover the healing power of Yoga with classes designed to
                  empower your body, mind, and soul.
                </p>
                {/* CTA form */}
                <div
                  className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md mt-8"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <DigitalModal buttonText="Start Free Trial" />
                </div>
              </div>

              {/* <div
                className="absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"
                aria-hidden="true"
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
