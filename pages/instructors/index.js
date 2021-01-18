import Layout from "../../components/Layout"
import { fetchQuery, baseUrl } from "../../utils"
import Link from "next/link"
import { Avatar } from "@windmill/react-ui"
import Head from "next/head"

const index = ({ instructors }) => {
  return (
    <Layout
      metaTitle="The instructors behind the screen"
      metaDescription="Here you can get to know about our awesome instructors."
    >
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 font-red-hat-display" data-aos="fade-down">
                The instructors behind the screen
              </h1>
            </div>

            {/* Team members */}
            <div
              className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3"
              data-aos-id-team
            >
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
                  data-aos="zoom-y-out"
                  data-aos-anchor="[data-aos-id-team]"
                >
                  <div className="flex flex-col items-center">
                    <Avatar
                      className="mb-4 w-32 h-32"
                      src={`${process.env.NEXT_PUBLIC_API_URL}${instructor.avatar.formats.small.url}`}
                      loading="lazy"
                      alt={`${instructor.Title} Profile Image`}
                    />
                    <h4 className="text-xl font-bold mb-1">
                      {instructor.Title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-3">
                      {instructor.indexIntro}
                    </p>
                    <style jsx>{`
                      p {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                      }
                    `}</style>
                    <div className="text-sm font-medium">
                      <Link href={`/instructors/${instructor.Slug}`}>
                        <a className="text-purple-600 hover:underline">
                          Learn more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index

export async function getStaticProps() {
  // const { API_URL } = process.env
  // const response = await fetch(`http://localhost:1337/instructors`, {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // }).catch((err) => console.error(JSON.stringify(err, null, 2)))
  // const data = await response.json()
  // console.log("instructors index =>", JSON.stringify(data))
  const instructors = await fetchQuery("instructors")
  return {
    props: {
      instructors,
    },
  }
}
