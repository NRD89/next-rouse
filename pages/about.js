import Layout from "../components/Layout";
import Image from "next/image";

const about = () => {
  return (
    <Layout
      metaTitle="About"
      metaDescription="Mission Statement: To create a harmonious relationship between yoga and technology that cultivates a community of love and growth at a global level."
    >
      <div className="pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 sm:h1 font-red-hat-display" data-aos="fade-down">
            Hello and Welcome!
          </h1>
        </div>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-delay="150">
        <div className="mx-auto max-w-prose">
          <Image
            className="rounded-xl"
            src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,dpr_2.0,f_auto,q_69,w_653/v1634787843/5F0699FF-897D-4DCD-ABD2-C5A1035007B8_1_201_a_khwpxz.jpg"
            width={653}
            height={368}
            alt="About"
            quality="40"
            layout="responsive"
          />
          <p className="mb-4 mt-6 text-gray-700 dark:text-gray-300">
            Thank you for taking time to visit the Rouse Yoga community. We
            exist today because of you. With a heart of gratitude and
            appreciation, thank you for being you and taking time to be a part
            of this.
          </p>
          {/* <p className="mb-4 text-gray-700 dark:text-gray-300">
            My name is Adri and I am the founder of Rouse Yoga. I am honored to
            be able to share something so close to my heart with you all. Every
            part of who I am and what I believe, lives and breathes in what
            Rouse Yoga is.
          </p> */}
          <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
            Mission Statement:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            To create a harmonious relationship between yoga and technology that
            cultivates a community of love and growth.
          </p>
          <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
            Vision:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Someday, our world will become a place of endless love and peace.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            At Rouse we want you to discover your power and your potential. We
            are teachers that care about self expression, community, love, power
            and self-discovery. We don’t just teach yoga, we help you find
            power, understanding and purpose in your every breath and movement.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Thank you for taking this journey with us.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            -{" "}
            <span className="text-xl font-bold font-architects-daughter text-gray-900 dark:text-gray-100">
              Rouse Yoga
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
