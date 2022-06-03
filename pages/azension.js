import Image from "next/image";
import Head from "next/head";
import Button from "../components/Button";
import Header from "../components/Header";
import InwardHero from "../components/InwardHero";
import FooterNew from "../components/FooterNew";

const InwardFest = () => {
  const faqs = [
    {
      question: "Is it only tent camping or can we bring RVs?",
      answer:
        "Both rent camping and RVs are allowed but there will be no hookups. Eco toilets and showers will be provided at the festival.",
    },
    {
      question: "Do you offer a payment plan?",
      answer: "We do not offer a payment plan.",
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
      answer: "Yes stoves are permitted we just asked that he’s caution.",
    },
    {
      question: "I didn’t receive A ticket for the festival what do I do?",
      answer:
        "Because this festival is a more intimate festival we will be checking everyone in when they enter so provide your name your email address or proof that you purchase an email for those of you who got sent email confirmation.",
    },
    {
      question: "What’s the schedule of events?",
      answer:
        "We have photos on our website and our Instagram of all of the set times we will also have them posted at the festival.",
    },
    {
      question: "What’s the address to the festival?",
      answer:
        "Because the festival takes place on a private plot of land we sent you a location pen so please refer to the location pen to get directions to the festival don’t worry you won’t get lost we will have signs posted to make sure you don’t make a wrong turn from the highway.",
    },
  ];
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
        title="Azension Fest"
        btn={false}
        btnLink="https://buy.stripe.com/4gw4hTfF76Un09y8wD"
        imgURL="https://res.cloudinary.com/rouse-yoga/image/upload/f_auto,q_30/v1654237404/Azension_Logo_jpwphe.jpg"
        priceType="Ticket"
        price="100"
      />

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="relative sm:py-16 lg:py-0 h-full">
            <div className="relative  mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className=" flex items-center justify-center h-full w-full bg-black rounded-xl overflow-hidden">
                <Image
                  className=" w-full mx-auto shadow-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1654237404/Azension_Logo_jpwphe.jpg"
                  alt=""
                  // layout="responsive"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
                Presented By:
              </h2>
              <h3 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Rouse Yoga and Sandland
              </h3>
              <div className="mt-6 space-y-6 prose-lg">
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
                  connect to the spirituality of electronic music. Tak a soulful
                  journey to discover the meditative and trance-like state your
                  body can create simply through dancing and moving.
                </p>
                <h4>Schedule:</h4>
                <ul>
                  <li>
                    September 22nd - Early Arrival for those who want to set up
                    camp early
                  </li>
                  <li>
                    September 23rd - Check in starts at 11am. Festival Day 1
                    events start at 5pm
                  </li>
                  <li>
                    September 24th - Festival Day 2 - Schedule announcement
                    coming soon!
                  </li>
                  <li>
                    September 24th - Check out day - All attendees must leave by
                    1 pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-500 tracking-wide uppercase">
              Location
            </h2>
            <p className="mt-1 text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
              The festival grounds will be located near the Salton Sea
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Location Pin:{" "}
              <a
                href="https://www.google.com/maps/place/33%C2%B024'01.8%22N+115%C2%B045'39.1%22W/@33.3968316,-115.7678401,15.8z/data=!4m5!3m4!1s0x0:0xc1982413ef9d2557!8m2!3d33.4005!4d-115.7608611"
                className="font-semibold underline text-gray-900 dark:text-gray-50"
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
            <div className="max-w-7xl mx-auto mt-8 space-y-4 grid grid-cols-1 md:grid-cols-2 md:space-y-0 gap-4">
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

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out via{" "}
              <a
                href="mailto:inward@rouse.yoga"
                rel="noopener"
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                email
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="w-full bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900 border border-gray-900 dark:border-gray-600 mx-auto text-center py-16 sm:py-20 rounded-2xl">
          <h2 className="text-base font-extrabold text-white sm:text-2xl mb-4">
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
            btnText="Purchase Now!"
            btnPriority="cta"
            btnLink="https://buy.stripe.com/4gw4hTfF76Un09y8wD"
          />
        </div>
      </div>
      {/* End CTA */}

      <FooterNew />
    </>
  );
};

export default InwardFest;
