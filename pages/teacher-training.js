import Image from "next/image";
import Head from "next/head";
import Button from "../components/Button";
import Header from "../components/Header";
import InwardHero from "../components/InwardHero";
import FooterNew from "../components/FooterNew";
import axios from "axios";

const InwardFest = () => {
  const getcheckoutURL = () => {
    axios
      .post("/api/klarna")
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
        <title>Inward Fest by Rouse & Sandland | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga Studio and Sandland present the first Inward Fest. This festival brings together elements of Yoga, EDM and Burning Man to show that harmonious vibrations can bring together people of diverse backgrounds, music taste and spirituality."
        />
      </Head>
      <Header />
      <InwardHero
        title="200 HR Teacher Training"
        btn={true}
        btnLink={getcheckoutURL}
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:eco/v1653284197/Teacher_Training_Ad_Fb_eonflx.png"
        priceType="Training"
        price="2,700"
      />

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative shadow-xl overflow-hidden rounded-xl">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
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
              <h3 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Are you ready to start your yoga career?
              </h3>
              <div className="mt-6 space-y-6 prose-lg">
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

      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
        <div className="flex flex-col justify-center items-center w-full">
          {/* <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
              Location
            </h2> */}
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            Our Curriculum
          </h3>
          <div class="text-xl mt-6">
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
              <li>
                Speciality Yoga Options Available (Prenatal, Trauma informed
                etc.)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
            Training Dates
          </h2>
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            June 12, 2022 - August 7, 2022
          </h3>
          <p class="text-2xl mt-6">
            This is a hybrid class that takes place in-studio and online
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
        <div className="flex flex-col justify-center items-center w-full">
          {/* <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
              Location
            </h2> */}
          <h3 className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
            Pricing Information
          </h3>
          <p class="text-2xl mt-6 max-w-[55ch] text-center">
            Our teacher training cost is $<strong>2,700</strong>, with an option
            to sign up for a payment plan through
            <a href="https://www.klarna.com/us/what-is-klarna/" target="_blank">
              <img
                class="ml-2 h-7 inline"
                src="https://res.cloudinary.com/rouse-yoga/image/upload/v1653287548/Klarna_marketing_badge_pink_rgb.svg_j3fw3g.svg"
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 border border-gray-900 dark:border-gray-600 mx-auto text-center py-16 sm:py-20 rounded-2xl">
          <h2 className="text-base font-extrabold text-white sm:text-2xl mb-4">
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

export default InwardFest;
