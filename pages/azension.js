import Image from "next/image";
import Head from "next/head";
import Button from "../components/Button";
import HeaderNew from "../components/HeaderNew";
import InwardHero from "../components/InwardHero";
import FooterNew from "../components/FooterNew";

const Azension = () => {
  const faqs = [
    {
      question: "Is it only tent camping or can we bring RVs?",
      answer:
        "Both tent camping and RVs are allowed but there will be no hookups. Eco toilets and showers will be provided at the festival.",
    },
    {
      question: "Do you offer a payment plan?",
      answer: "Yes, there is a payment plan with PayPal through Eventbrite",
    },
    {
      question: "Can I get a refund?",
      answer:
        "We do not issue refunds but we will give you a credit so you can attend another rouse hosted event or another Inward fest in the future.",
    },
    {
      question: "Will alcohol be served?",
      answer: "Inward fest will not be providing alcohol.",
    },
    {
      question: "What should I bring?",
      answer:
        "Tent or RV, warm and cold clothes (hot days and cold nights), stakes for tent camping or easy ups (it will be windy), canopy/insta shade, shower slippers, toiletries food, drinks, yoga mat(s) and general camping gear.",
    },
    {
      question: "Can I bring a stove?",
      answer: "Yes stoves are permitted we just asked that you use caution.",
    },
    {
      question: "Where's the schedule of events?",
      answer:
        "We have photos on our website and our Instagram of all of the set times we will also have them posted at the festival.",
    },
    {
      question: "What’s the address to the festival?",
      answer:
        "Because the festival takes place on a private plot of land we sent you a location pin so please refer to the location pen to get directions to the festival don’t worry you won’t get lost we will have signs posted to make sure you don’t make a wrong turn from the highway.",
    },
  ];
  return (
    <>
      <Head>
        <title>Azension by Rouse & Sandland | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga Studio and Sandland present the first Azension Festival. Join us at Azension, a yoga music festival to get your body
          moving while exploring deep spiritual connections with
          electronic music."
        />
      </Head>
      <HeaderNew />
      <InwardHero
        title="Azension"
        btn={true}
        btnId="eventbrite-widget-modal-trigger-372252586507"
        subHeading="Join us at Azension, a donation based yoga music festival designed to bring love, healing and community through Yoga, Spirituality and EDM."
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_30/v1654237404/Azension_Logo_jpwphe.jpg"
        priceType="Ticket"
        btnText="Purchase Tickets"
        // price="100"
      />

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-6">
          <div className="relative sm:py-16 md:top-28 lg:sticky lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1654237404/Azension_Logo_jpwphe.jpg"
                  alt="Azension logo"
                  layout="responsive"
                  width={640}
                  height={360}
                  blurDataURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_auto:low,w_44/v1654237404/Azension_Logo_jpwphe.jpg"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500">
                Presented By:
              </h2>
              <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Rouse Yoga and Sandland
              </h3>
              <div className="prose-lg mt-6 space-y-6">
                <p className="text-lg">
                  Join us at Azension, a yoga music festival to get your body
                  moving while exploring deep spiritual connections with
                  electronic music. This two day festival will have tons of yoga
                  sessions and bassy EDM music to move your soul!
                </p>
                <p className="text-lg">
                  Explore the power of electronic music in a deep and spiritual
                  way while using yoga to heal, restore and rejuvenate your body
                  during a weekend of love, community and fun!
                </p>
                <p className="text-lg">
                  The heart of Azension is to bring the community together in a
                  weekend of yoga, edm and spirituality as a united force. Azend
                  with us as we gather as one! Move to your own rhythm and
                  connect to the spirituality of electronic music. Take a
                  soulful journey to discover the meditative and trance-like
                  state your body can create simply through dancing and moving.
                </p>
                <h4 className="font-bold uppercase">Schedule:</h4>
                <ul>
                  <li>
                    - <span className="font-semibold">September 22nd</span>:
                    Early Arrival for those who want to set up camp early
                  </li>
                  <li>
                    - <span className="font-semibold">September 23rd</span>:
                    Check in starts at 11am. Festival Day 1 events start at 5pm
                  </li>
                  <li>
                    - <span className="font-semibold">September 24th</span>:
                    Festival Day 2 - Schedule announcement coming soon!
                  </li>
                  <li>
                    - <span className="font-semibold">September 24th</span>:
                    Check out day - All attendees must leave by 1 pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto max-w-6xl py-16 px-4 sm:py-24 sm:px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-500">
              Location
            </h2>
            <p className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
              The festival grounds will be located near the Salton Sea
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Location Pin:{" "}
              <a
                href="https://www.google.com/maps/place/33%C2%B024'01.8%22N+115%C2%B045'39.1%22W/@33.3968316,-115.7678401,15.8z/data=!4m5!3m4!1s0x0:0xc1982413ef9d2557!8m2!3d33.4005!4d-115.7608611"
                className="font-semibold text-gray-900 underline dark:text-gray-50"
                style={{
                  textDecorationColor: "#60a5fa",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "2px",
                }}
                rel="noopener"
                target="_blank"
              >
                33°24'01.8"N 115°45'39.1"W
              </a>
            </p>
            <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 space-y-4 md:grid-cols-2 md:space-y-0">
              <Image
                className="w-full rounded-xl"
                src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,h_1074,q_auto:eco,w_1237/v1646002721/image_6483441_1_srsuny.jpg"
                alt="About"
                layout="responsive"
                width={1237}
                height={1074}
              />
              <Image
                className="w-full rounded-xl"
                src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,h_1049,q_auto:eco,w_1206/v1654238019/azension_map_kdtdho.jpg"
                alt="About"
                layout="responsive"
                width={1206}
                height={1049}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
              Artists and Performers
            </h2>
            <p className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
              Set and Event Times
            </p>
            <div className="max-w-7xl mx-auto mt-8 space-y-4 grid grid-cols-1 md:grid-cols-2 md:space-y-0 gap-4">
              <Image
                className="w-full rounded-xl"
                src="/IF_friday_set_times.jpeg"
                alt="Inward Fest Friday Set Times"
                layout="responsive"
                width={1080}
                height={1347}
              />
              <Image
                className="w-full rounded-xl"
                src="/if_saturday_set_times.jpeg"
                alt="Inward Fest Saturday Set Times"
                layout="responsive"
                width={1080}
                height={1347}
              />
            </div>
            <div className="max-w-7xl mx-auto mt-8 space-y-4 grid grid-cols-1 md:grid-cols-2 md:space-y-0 gap-4">
              <Image
                className="w-full rounded-xl"
                src="/if_friday_events.jpeg"
                alt="Inward Fest Friday Set Times"
                layout="responsive"
                width={1080}
                height={1347}
              />
              <Image
                className="w-full rounded-xl"
                src="/if_saturday_events.jpeg"
                alt="Inward Fest Saturday Set Times"
                layout="responsive"
                width={1080}
                height={1347}
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out via{" "}
              <a
                href="mailto:azension@rouse.yoga"
                rel="noopener"
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                email
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6">
        <div className="mx-auto w-full rounded-2xl border border-gray-900 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 py-16 text-center dark:border-gray-600 sm:py-20">
          <h2 className="mb-4 text-base font-extrabold text-white sm:text-2xl">
            <span className="block">
              We are excited to spend the weekend with you.
            </span>
            <span className="block">Much love, see you at Azension!</span>
          </h2>
          {/* <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
          <Button
            btnText="Purchase Tickets"
            btnPriority="cta"
            btn={true}
            btnType="button"
            btnId="eventbrite-widget-modal-trigger-372252586507"
          />
        </div>
      </div>
      {/* End CTA */}

      <FooterNew />
    </>
  );
};

export default Azension;
