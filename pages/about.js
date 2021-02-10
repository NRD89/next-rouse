import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout
      metaTitle="About"
      metaDescription="Mission Statement: To create a harmonious relationship between yoga and technology that cultivates a community of love and growth at a global level."
    >
      <div className="pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 sm:h1 font-red-hat-display" data-aos="fade-down">
            Hello and Welcome!
          </h1>
        </div>
      </div>
      <div className="w-full" data-aos="fade-up" data-aos-delay="150">
        <div className="mx-auto max-w-prose">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Thank you for taking time to visit the Rouse Yoga community. We
            exist today because of you. With a heart of gratitude and
            appreciation, thank you for being you and taking time to be a part
            of this.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            My name is Adri and I am the founder of Rouse Yoga. I am honored to
            be able to share something so close to my heart with you all. Every
            part of who I am and what I believe, lives and breathes in what
            Rouse Yoga is.
          </p>
          <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
            Mission Statement:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            To create a harmonious relationship between yoga and technology that
            cultivates a community of love and growth at a global level.
          </p>
          <h3 className="h4 font-red-hat-display mb-4 text-gray-900 dark:text-gray-100">
            Vision:
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Someday, our world will become a place of endless love and peace.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I believe that every single person on this planet has an amazing
            story and journey that has shaped who they are today. While we are
            on our personal journeys, we develop this incredible ability to
            connect more deeply to the world around us. This is what led me to
            founding Rouse Yoga and what drives me to do what I do every day.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I strive to be the best version of myself I possibly can, I connect
            to that power deep within me to experience life at its fullest, I
            live my life craving to connect to the people and world around me, I
            am fearless in going after what I want and I am a fighter for the
            things that matter. And what matters to me is{" "}
            <span className="font-bold font-red-hat-display text-gray-900 dark:text-gray-100">
              YOU
            </span>
            .
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I want you to discover your power and connect to yourself deeply, so
            that you have no choice but to give yourself everything you want.
            And in that, I created Rouse Yoga, a platform of expression,
            community, love, power and self-discovery. We don’t just teach yoga,
            we help you find power, understanding and purpose in your every
            breath and movement.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Thank you for taking this journey with us.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            -{" "}
            <span className="text-xl font-bold font-architects-daughter text-gray-900 dark:text-gray-100">
              Adri
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default about
