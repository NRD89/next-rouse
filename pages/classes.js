import { useEffect } from "react";
import Layout from "../components/Layout";
// import { fadeInUp, stagger } from "../animations/pageTransitions";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css";
// import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { getClient } from "../lib/sanity.server";
import { format, formatISO } from "date-fns";

const IndexPage = ({ classes, todaysDate }) => {
  console.log("classes =>", classes);
  console.log("todaysDate =>", todaysDate);

  return (
    <Layout>
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
                  <div className="w-full border-t border-white"></div>
                </div>
                <div className="relative flex justify-start">
                  <span className="pr-3 text-lg font-medium text-white bg-[hsl(221,48%,5%)]">
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
                      <span className="text-3xl font-semibold text-gray-200">
                        {`${format(
                          new Date(_class.classDateTime),
                          "EEEE, MMMM dd h:mm aaaa"
                        )}`}{" "}
                      </span>
                      <p className="mt-3 text-lg font-medium leading-6">
                        <a
                          href="#"
                          className="text-xl text-gray-100 group-hover:text-gray-300 lg:text-2xl"
                        >
                          {_class.title}
                        </a>
                      </p>
                      <p className="mt-2 text-md text-gray-400">
                        Taught by: {_class.instructor.name}
                      </p>
                      <p className="mt-2 text-lg text-gray-300">
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
                            font-bold
                            uppercase
                            text-center text-purple-600
                            transition
                            duration-500
                            ease-in-out
                            transform
                            border-2 border-white
                            shadow-md
                            rounded-xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-gray-500
                            bg-white
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
    </Layout>
  );
};

export default IndexPage;

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
