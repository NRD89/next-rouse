import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "../components/Button";
import Header from "../components/Header";
import InwardHero from "../components/InwardHero";
import FooterNew from "../components/FooterNew";
import axios from "axios";

const HolisticCorner = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("subscribe-success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Holistic Corner | Rouse Yoga</title>
        <meta
          name="description"
          content="Join the Rouse Family and Yoga Love Om for an empowering and
          uplifting 200 Hour Teacher Training. Don't just learn the
          basics of yoga, discover who you are as an instructor."
        />
      </Head>
      <Header />
      <InwardHero
        title="Holistic Corner"
        btn={false}
        btnLink="https://rouseyoga.as.me/"
        btnText="Reserve Sessions"
        subHeading="Come visit us during our grand opening event and try out our holistic services. All private sessions are donation based!"
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_5,w_2854/v1659344865/holistic_corner_vine_hero_gikhvw.jpg"
      />

      <div className="relative">
        <div className="md:pt-20 lg:mx-auto lg:max-w-6xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="sm:py-16 lg:py-0 relative md:sticky md:top-28">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              {/* Testimonial card*/}
              <div className="relative shadow-xl overflow-hidden rounded-xl">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1659345507/HC_Grand_Opening_w1aydv.png"
                  alt="Holistic Corner grand opening flyer"
                  layout="responsive"
                  width={640}
                  height={807}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:low,w_44/v1659345507/HC_Grand_Opening_w1aydv.png"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              {/* <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
                Presented By:
              </h2> */}
              <h3 className="text-3xl text-center text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Welcome to the RY Holistic Corner
              </h3>
              <div className="mt-6 space-y-6 prose-lg">
                <p className="text-lg">
                  Welcome to the RY Holistic Corner a wellness and healing
                  center you can call home. We are a community based space
                  bringing holistic and wellness practitioners together to
                  provide beneficial resources for the community. ​
                </p>
                <p className="text-lg">
                  As a member of the community you have access to many wellness
                  experts with a heart to improve your overall health, physical,
                  mental, emotional and spiritual well being. Some our our
                  services include: massage therapy, reiki healing, private yoga
                  sessions, Thai massage, private sound baths, energy work and
                  so much more.
                </p>
                <p className="text-lg">
                  We are excited to have our{" "}
                  <strong className="italic font-semibold">
                    Grand Opening August 6th from 8am to 8pm
                  </strong>
                  . For our opening event we will be offering a chance for the
                  community to come try services and get to know what we have to
                  offer. All services offered will be donation based but must be
                  reserved ahead of time.
                </p>
                <p className="text-lg">
                  Come join the Rouse Family in its new expansion and reserve
                  the service of your choice.
                </p>
                <p className="text-lg">
                  Refreshments and light snacks will be provided throughout the
                  day.
                </p>
                <p className="text-lg">
                  To close out the Grand Opening Event we will be offering a
                  special community event for all to enjoy. Stay tuned for more
                  info! Event details will announced Tuesday at 12pm!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl mx-auto my-20 lg:my-36">
        <div className="flex flex-col justify-center items-center w-full max-w-prose text-center mx-auto">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
            For Practitioners
          </h2>
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            Looking for a space to host your private wellness and holistic
            services?
          </h3>
        </div>
        <ul
          role="list"
          className="gap-y-12 space-y-64 md:grid sm:gap-x-6 sm:gap-y-8 sm:space-y-0 md:grid-cols-3 lg:gap-x-8 mt-12 min-h-[500px]"
        >
          <li className="lg:justify-self-auto">
            <div className="space-y-4 relative lg:max-w-none">
              <div className="mb-20 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1659410546/earth_room_oi2frh.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_10/v1659410546/earth_room_oi2frh.jpg"
                  placeholder="blur"
                />
              </div>
              <div className="absolute -bottom-56 border border-green-300 bg-gradient-to-tr from-green-100 via-green-200 to-green-100 dark:border-green-700 dark:from-green-900 dark:via-green-800 dark:to-green-900 shadow-md rounded-xl mx-3 !py-4 px-4 space-y-2 z-10 min-h-[248px] md:min-h-[296px]">
                <div className="space-y-1 sm:space-y-0 text-center font-bold text-sm w-full">
                  <h5>Earth Room</h5>
                </div>
                <p>
                  A nature themed room to ground us and root us in earth. Its
                  nature tones and mother nature inspired decor brings a space
                  of nurturing, warmth and healing from the very plant we live
                  on.
                </p>
              </div>
            </div>
          </li>
          <li className="">
            <div className="space-y-4 relative lg:max-w-none">
              <div className="mb-20 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1659410545/cosoms_room_ateccs.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_10/v1659410545/cosoms_room_ateccs.jpg"
                  placeholder="blur"
                />
              </div>

              <div className="absolute -bottom-56 border border-purple-300 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-100 dark:border-purple-700 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 shadow-md rounded-xl mx-3 !py-4 px-4 space-y-2 z-10 min-h-[296px]">
                <div className="space-y-1 sm:space-y-0 text-center font-bold text-sm w-full">
                  <h5>Cosmos Room</h5>
                </div>
                <p>
                  A galaxy and ethereal themed room intended to bring oneness to
                  us and the universe. The darker colors and vibrant galaxy
                  mural create a unique cosmic vibe that brings forth the
                  connection to all things and embrace the vastness and oneness
                  of the self and the universe.
                </p>
              </div>
            </div>
          </li>
          <li className="lg:justify-self-auto">
            <div className="space-y-4 relative lg:max-w-none">
              <div className="mb-56 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_1200/v1659410546/energy_room_auvcwt.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_50/v1659410546/energy_room_auvcwt.jpg"
                  placeholder="blur"
                />
              </div>

              <div className="absolute -bottom-56 border border-yellow-300 bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-100 dark:border-yellow-700 dark:from-yellow-900 dark:via-yellow-800 dark:to-yellow-900 shadow-md rounded-xl mx-3 !py-4 px-4 space-y-2 z-10 min-h-[248px] md:min-h-[296px]">
                <div className="space-y-1 sm:space-y-0 text-center font-bold text-sm w-full">
                  <h5>Energy Room</h5>
                </div>
                <p>
                  A chakra inspired room to bring harmony and balance to the
                  self. This room brings forth an energy that heals and balances
                  our chakras to bring us back into alignment leaving us walking
                  away feeling rejuvenated and at peace.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
        <p className="text-xl text-gray-700 dark:text-gray-100 font-medium max-w-[40ch] text-center mx-auto">
          Fill out the form below to receive more info and get a tour of the
          spaces.
        </p>
        <div className="flex justify-center mt-6">
          <form
            name="holistic-corner-vendors"
            method="POST"
            data-netlify="true"
            action="/success"
            data-netlify-honeypot="bot-field"
            className="w-full"
          >
            <div className="w-full">
              <div className="flex flex-col space-y-6 max-w-xl mx-auto">
                <div className="form-input-wrapper dark:bg-gray-900 group dark:focus-within:bg-black">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-text-input input dark:group-focus-within:bg-black"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="form-text-label placeholder dark:group-focus-within:bg-black"
                  >
                    Name
                  </label>
                </div>
                <div className="form-input-wrapper dark:bg-gray-900 group dark:focus-within:bg-black">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-text-input input dark:group-focus-within:bg-black"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="form-text-label placeholder dark:group-focus-within:bg-black"
                  >
                    Email
                  </label>
                </div>
                <div className="form-input-wrapper dark:bg-gray-900 group dark:focus-within:bg-black">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-text-input input dark:group-focus-within:bg-black"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="form-text-label placeholder dark:group-focus-within:bg-black"
                  >
                    Phone
                  </label>
                </div>
                <div className="form-input-wrapper dark:bg-gray-900 group dark:focus-within:bg-black">
                  <textarea
                    id="services"
                    name="services"
                    rows="4"
                    cols="50"
                    maxlength="200"
                    className="form-text-input input dark:group-focus-within:bg-black"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="services"
                    className="form-text-label placeholder dark:group-focus-within:bg-black"
                  >
                    What Services do you offer?
                  </label>
                </div>
                <input type="hidden" name="form-name" value="subscribe" />
                <Button
                  btnText="Submit"
                  btnPriority="secondary"
                  btn={true}
                  btnType="submit"
                />
              </div>
            </div>
          </form>
          {success.length > 1 ? (
            <p className="font-inter mt-2 text-green-500">{success}</p>
          ) : null}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 border border-gray-900 dark:border-gray-600 mx-auto text-center py-16 sm:py-20 rounded-2xl">
          <h2 className="text-base font-extrabold text-white sm:text-2xl mb-4 max-w-[40ch] mx-auto">
            <span className="block">
              Want to try out our holistic services? Reserve a donation based
              private session!
            </span>
          </h2>
          {/* <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
          <Button
            btnLink="https://rouseyoga.as.me/"
            btnText="Reserve Sessions"
            btnPriority="cta"
            btn={false}
          />
        </div>
      </div>
      {/* End CTA */}

      <FooterNew />
    </>
  );
};

export default HolisticCorner;
