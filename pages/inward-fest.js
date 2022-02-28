import Image from "next/image";
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
        "Tent or RV, warm and cold clothes (hot days and cold nights), stakes for tent camping or easy ups (it will be windy), canopy/insta shade, food, drinks and yoga mat(s).",
    },
  ];
  return (
    <>
      <Header />
      <InwardHero />

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                  src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_auto:eco,w_1200/v1645998303/IF_LINEUP_pvzslk.jpg"
                  alt=""
                  layout="responsive"
                  width={640}
                  height={807}
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
                  With the collective hearts and minds to love, heal and grow as
                  a community, we offer you a mini festival designed to bring
                  the community together through music and yoga.
                </p>
                <p className="text-lg">
                  The festival grounds will be located near the Salton Sea and
                  will take place on March 10th-13th.
                </p>
                <h4>Schedule:</h4>
                <ul>
                  <li>
                    March 10th - Early Arrival for those who want to set up camp
                    early
                  </li>
                  <li>
                    March 11th - Check in starts at 11am. Festival Day 1 events
                    start at 5pm
                  </li>
                  <li>
                    March 12th - Festival Day 2 - Schedule announcement coming
                    soon!
                  </li>
                  <li>
                    March 13th - Check out day - All attendees must leave by 1
                    pm
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
                src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,h_1049,q_auto:eco,w_1206/v1646002732/image_6483441_2_fcqqd3.jpg"
                alt="About"
                layout="responsive"
                width={1206}
                height={1049}
              />
            </div>
          </div>
        </div>
      </div>

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
            <span className="block">Much love, see you at Inward!</span>
          </h2>
          {/* <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
          <Button
            btnText="Purchase Now!"
            btnPriority="cta"
            btnLink={process.env.NEXT_PUBLIC_INWARD_PAYMENT_LINK}
          />
        </div>
      </div>
      {/* End CTA */}

      <FooterNew />
    </>
  );
};

export default InwardFest;
