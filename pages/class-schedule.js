import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
// import { fadeInUp, stagger } from "../animations/pageTransitions";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css";
// import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import { format, formatISO } from "date-fns";

const ClassSchedule = ({ classes, todaysDate }) => {
  console.log("classes =>", classes);
  console.log("todaysDate =>", todaysDate);

  return (
    <Layout>
      <Head>
        <title>Class Schedule | Rouse Yoga</title>
        <meta
          name="description"
          content="Rouse Yoga Riverside class schedule."
        />
      </Head>
      <div
        initial="initial"
        animate="animate"
        // exit={{ opacity: 0 }}
        // variants={stagger}
        className="px-6 lg:px-8 h-full"
      >
        <section>
          <div className="px-4 mx-auto">
            <div className="max-w-4xl pt-24 mx-auto">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-900 dark:border-gray-100"></div>
                </div>
                <div className="relative flex justify-start">
                  <span className="pr-3 text-lg font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
                    {" "}
                    All classes{" "}
                  </span>
                </div>
              </div>
              <div
                // variants={fadeInUp}
                className="space-y-8 lg:divide-y lg:divide-gray-400 divide-solid"
              >
                {classes.map((_class, index) => (
                  <div
                    key={index}
                    className="pt-8 sm:flex lg:items-start group"
                  >
                    {/* <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                      <img
                        className="w-full rounded-md lg:h-32 lg:w-32"
                        src="https://images.unsplash.com/photo-1616651181620-9906d6e43fc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnxlbnwwfDJ8MHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"
                        alt="text"
                      />
                    </div> */}
                    <div>
                      <span className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                        {`${format(
                          new Date(_class.classDateTime),
                          "EEEE, MMMM dd 'at' h:mm aaaa"
                        )}`}{" "}
                      </span>
                      <p className="mt-3 text-xl text-gray-800 dark:text-gray-200 lg:text-2xl leading-6">
                        {_class.title}
                      </p>
                      <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
                        Taught by: {_class.instructor.name}
                      </p>
                      <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gradient-to-tr from-blue-800 via-blue-700 to-blue-800 rounded mr-2 border border-gray-400">
                        Level: {_class.level}
                      </span>
                      <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gradient-to-tr from-indigo-800 via-indigo-700 to-indigo-800 rounded mr-2 border border-gray-400">
                        {_class.style.map((class_style, index, { length }) => (
                          <span className="mr-1 capitalize">
                            {class_style}
                            {length - 1 === index
                              ? null
                              : _class.style.length > 1
                              ? ","
                              : null}
                          </span>
                        ))}
                      </span>
                      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                        {_class.description}
                      </p>
                      <div class="mt-8">
                        <a
                          href="https://app.rouse.yoga"
                          className=" 
                            sm:w-1/2
                            md:w-1/3
                            items-center
                            block
                            px-10
                            py-3.5
                            text-base
                            font-medium
                            uppercase
                            text-center text-white tracking-wider hover:tracking-widest
                            transition-all
                            duration-500
                            ease-in-out
                            transform
                            shadow-md
                            rounded-md
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-gray-500
                            border border-solid border-white 
                            bg-gradient-to-l from-blue-600 via-blue-400 to-blue-600 
                            bg-size-200 bg-pos-0 hover:bg-pos-100
                          "
                        >
                          {" "}
                          Reserve{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </Layout>
  );
};

export default ClassSchedule;

export async function getServerSideProps() {
  const todaysDate = new Date().toISOString();

  const classesQuery = groq`
  *[_type == 'class' && classDateTime >= $todaysDate]{
    _id,
    title,
    description,
    instructor->{
      name,
      "slug": slug.current
    },
    mainImage,
    publishedAt,
    classDateTime,
    style,
    level
  } | order(classDateTime asc)
`;
  const params = { todaysDate: todaysDate };

  const classes = await getClient().fetch(classesQuery, params);

  return {
    props: {
      classes,
      todaysDate,
    },
  };
}
