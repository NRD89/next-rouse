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
          content="Welcome to the RY Holistic Corner a wellness and healing
          center. Our services include: massage therapy, reiki healing, private yoga
          sessions, Thai massage, private sound baths, energy work and
          so much more!"
        />
      </Head>
      <Header />
      <InwardHero
        title="Holistic Corner"
        btn={false}
        btnLink="https://rouseyoga.as.me/"
        btnText="Reserve Sessions"
        subHeading="Come visit us and try out our services. Get 1 on 1 time with a holistic professional today."
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_10,w_2854/v1659344865/hollistic_corner_vine_hero_gikhvw.jpg"
      />

      <div className="relative">
        <div className="md:pt-20 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-6">
          <div className="relative sm:py-16 md:top-28 lg:sticky lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1660719110/IMG_4837_polkmv.jpg"
                  alt="Holistic Corner grand opening flyer"
                  layout="responsive"
                  width={640}
                  height={807}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:low,w_44/v1660719110/IMG_4837_polkmv.jpg"
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
              <h3 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to the RY Holistic Corner
              </h3>
              <div className="prose-lg mt-6 space-y-6">
                <p className="text-lg">
                  Welcome to the RY Holistic Corner a wellness and healing
                  center you can call home. We are a community based space
                  bringing holistic and wellness practitioners together to
                  provide beneficial resources for the community. ​
                </p>
                <p className="text-lg">
                  As a member of the community you have access to many wellness
                  experts with a heart to improve your overall health, physical,
                  mental, emotional and spiritual well being. Some of our
                  services include:
                </p>
                <ul>
                  <li>- Massage Therapy</li>
                  <li>- Reiki Healing</li>
                  <li>- Private Yoga Sessions</li>
                  <li>- Thai Massage</li>
                  <li>- Private Sound Baths</li>
                  <li>- Energy Work</li>
                  <li>- and so much more!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20 max-w-6xl px-4 lg:my-36">
        <div className="mx-auto flex w-full max-w-prose flex-col items-center justify-center text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500">
            For Practitioners
          </h2>
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            Looking for a space to host your private wellness and holistic
            services?
          </h3>
        </div>
        <ul
          role="list"
          className="mt-12 min-h-[500px] gap-y-12 space-y-64 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 md:grid md:grid-cols-3 lg:gap-x-8"
        >
          <li className="lg:justify-self-auto">
            <div className="relative space-y-4 lg:max-w-none">
              <div className="mb-20 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1659410546/earth_room_oi2frh.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_10/v1659410546/earth_room_oi2frh.jpg"
                  placeholder="blur"
                />
              </div>
              <div className="absolute -bottom-56 z-10 mx-3 min-h-[248px] space-y-2 rounded-xl border border-green-300 bg-gradient-to-tr from-green-100 via-green-200 to-green-100 !py-4 px-4 shadow-md dark:border-green-700 dark:from-green-900 dark:via-green-800 dark:to-green-900 md:min-h-[296px]">
                <div className="w-full space-y-1 text-center text-sm font-bold sm:space-y-0">
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
            <div className="relative space-y-4 lg:max-w-none">
              <div className="mb-20 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1659410545/cosoms_room_ateccs.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_10/v1659410545/cosoms_room_ateccs.jpg"
                  placeholder="blur"
                />
              </div>

              <div className="absolute -bottom-56 z-10 mx-3 min-h-[296px] space-y-2 rounded-xl border border-purple-300 bg-gradient-to-tr from-purple-100 via-purple-200 to-purple-100 !py-4 px-4 shadow-md dark:border-purple-700 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900">
                <div className="w-full space-y-1 text-center text-sm font-bold sm:space-y-0">
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
            <div className="relative space-y-4 lg:max-w-none">
              <div className="mb-56 lg:mb-0">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_1200/v1659410546/energy_room_auvcwt.jpg"
                  alt="earth room"
                  layout="responsive"
                  width={1200}
                  height={1600}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco,w_50/v1659410546/energy_room_auvcwt.jpg"
                  placeholder="blur"
                />
              </div>

              <div className="absolute -bottom-56 z-10 mx-3 min-h-[248px] space-y-2 rounded-xl border border-yellow-300 bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-100 !py-4 px-4 shadow-md dark:border-yellow-700 dark:from-yellow-900 dark:via-yellow-800 dark:to-yellow-900 md:min-h-[296px]">
                <div className="w-full space-y-1 text-center text-sm font-bold sm:space-y-0">
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

      <div className="mx-auto max-w-6xl py-16 px-4 sm:py-24 sm:px-6">
        <p className="mx-auto max-w-[40ch] text-center text-xl font-medium text-gray-700 dark:text-gray-100">
          Fill out the form below to receive more info and get a tour of the
          spaces.
        </p>
        <div className="mt-6 flex justify-center">
          <form
            name="holistic-corner-vendors"
            method="POST"
            data-netlify="true"
            action="/success"
            data-netlify-honeypot="bot-field"
            className="w-full"
          >
            <div className="w-full">
              <div className="mx-auto flex max-w-xl flex-col space-y-6">
                <div className="form-input-wrapper group dark:bg-gray-900 dark:focus-within:bg-black">
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
                <div className="form-input-wrapper group dark:bg-gray-900 dark:focus-within:bg-black">
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
                <div className="form-input-wrapper group dark:bg-gray-900 dark:focus-within:bg-black">
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
                <div className="form-input-wrapper group dark:bg-gray-900 dark:focus-within:bg-black">
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
                <input
                  type="hidden"
                  name="form-name"
                  value="holistic-corner-vendors"
                />
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
            <p className="mt-2 font-inter text-green-500">{success}</p>
          ) : null}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6">
        <div className="mx-auto w-full rounded-2xl border border-gray-900 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 py-16 text-center dark:border-gray-600 sm:py-20">
          <h2 className="mx-auto mb-4 max-w-[40ch] text-base font-extrabold text-white sm:text-2xl">
            <span className="block">
              Want to try out our holistic services? <br/>Reserve a private session!
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
