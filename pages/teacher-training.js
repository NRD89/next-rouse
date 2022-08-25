import Image from "next/image";
import Head from "next/head";
import { useTheme } from "next-themes";
import Button from "../components/Button";
import HeaderNew from "../components/HeaderNew";
import InwardHero from "../components/InwardHero";
import FooterNew from "../components/FooterNew";
import axios from "axios";

const TeacherTraining = () => {
  const { theme } = useTheme();

  const isDarkMode = () => {
    if (theme === "dark") {
      return true;
    }
    return false;
  };

  const getcheckoutURL = () => {
    axios
      .post("/api/training-checkout")
      .then((res) => {
        console.log("url =>", res);
        window.location.href = res.data;
      })
      .catch((e) => {
        console.error(e.response.data.message);
      });
  };
  return (
    <>
      <Head>
        <title>Yoga Teacher Training | Rouse Yoga</title>
        <meta
          name="description"
          content="Join the Rouse Family and Yoga Love Om for an empowering and
          uplifting 200 Hour Teacher Training. Don't just learn the
          basics of yoga, discover who you are as an instructor."
        />
      </Head>
      <HeaderNew />
      <InwardHero
        title="200 HR Teacher Training"
        btn={true}
        btnLink={getcheckoutURL}
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1653284197/Teacher_Training_Ad_Fb_eonflx.png"
        priceType="Training"
        price="2,700"
      />

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-6">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1653282626/Teacher_Training_Ad_2_ct4upp.png"
                  alt=""
                  layout="responsive"
                  width={640}
                  height={807}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:low,w_57/v1653282626/Teacher_Training_Ad_2_ct4upp.png"
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
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Are you ready to start your yoga career?
              </h3>
              <div className="prose-lg mt-6 space-y-6">
                <p className="text-lg">
                  Join the Rouse Family and Yoga Love Om for an empowering and
                  uplifting 200 Hour Teacher Training. Don't just learn the
                  basics of yoga, discover who you are as an instructor. ​
                </p>
                <p className="text-lg">
                  Our 200HR is meant to teach you the foundations of yoga so you
                  thrive as the unique and powerful instructor you are meant to
                  be. Our program leaders Christina and Adri will work alongside
                  you to help you find your passions, discover your niche and
                  set a solid foundation in yoga principles.
                </p>
                <p className="text-lg">
                  With a heart of love, and an intention to cultivate community,
                  we bring you a teacher training that helps us further
                  understand the healing power of yoga; through learning the
                  science, yoga theory and dive deeper into our spiritual
                  practice.
                </p>
                <p className="text-lg">
                  We are excited to come together as a collective of people with
                  open hearts and minds to transform our practice and develop
                  our wisdom as instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl py-16 px-4 sm:py-24 sm:px-6">
        <div className="flex w-full flex-col items-center justify-center">
          {/* <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
              Location
            </h2> */}
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            Our Curriculum
          </h3>
          <div class="px-4 mt-6 text-xl">
            <ul class="list-disc">
              <li>Asanas </li>
              <li>Breath work</li>
              <li>Meditation</li>
              <li>Different Styles of Yoga (Yin, Hatha, Vinyasa etc.)</li>
              <li>Chakras</li>
              <li>Ayurveda</li>
              <li>Yogic Principles and Methodology</li>
              <li>Anatomy and Physiology</li>
              <li>Practicum</li>
              <li>Sound Healing</li>
              <li>Chakras and Energy Healing</li>
              <li>Business of Yoga</li>
              <li>Ethics of Yoga</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl divide-y divide-gray-500 dark:divide-gray-400 py-16 px-4 sm:py-24 sm:px-6">
        <div className="flex w-full flex-col items-center justify-center pb-8">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500">
            Training Dates
          </h2>
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            October 16, 2022 - December 4, 2022
          </h3>
          <p class="mt-6 text-center text-2xl">
            This is a hybrid class that takes place in-studio and online. Every
            Sunday we will meet in person at the Rouse Yoga studio, all other
            classes and lectures will be held via Zoom.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center pt-8">
          <h4 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500 pb-1">
            Pricing Information
          </h4>
          <p class="max-w-[55ch] text-center text-2xl leading-[2.75rem]">
            Our teacher training cost is $<strong>2,700</strong> with an option
            to sign up for a payment plan through
            <a href="https://www.affirm.com/how-it-works" target="_blank">
              <img
                class="mt-[-1.1rem] ml-2 inline h-8"
                src={
                  isDarkMode()
                    ? `https://res.cloudinary.com/rouse-yoga/image/upload/v1661222749/white_logo-solid_bg_d7ls2z.svg`
                    : `https://res.cloudinary.com/rouse-yoga/image/upload/v1661222203/affirm_black_logo_liubfq.svg`
                }
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mb-16 max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto w-full rounded-2xl border border-gray-900 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 py-16 text-center dark:border-gray-600 sm:py-20">
          <h2 className="mb-4 text-base font-extrabold text-white sm:text-2xl">
            <span className="block">Start Your 200HR Teacher Training!</span>
          </h2>
          {/* <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
          <Button
            btnText="Purchase Now"
            btnPriority="cta"
            btnLink={getcheckoutURL}
            btn={true}
          />
        </div>
      </div>
      {/* End CTA */}

      <FooterNew />
    </>
  );
};

export default TeacherTraining;
