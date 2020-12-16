import Layout from "../../components/Layout"
import { fetchQuery, baseUrl } from "../../utils"
import { Card, CardBody, Button, Avatar } from "@windmill/react-ui"
import ReactMarkdown from "react-markdown"
import ReactPlayer from "react-player"

const Slug = ({ instructor }) => {
  console.log(instructor[0])
  return (
    <Layout>
      <div className="mb-16 max-w-screen-lg mx-auto ">
        <Card className="overflow-visible bg-gray-100 shadow-dark40">
          <CardBody>
            <div className="w-full px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <Avatar
                  alt="..."
                  src={`${process.env.NEXT_PUBLIC_API_URL}${instructor[0].avatar.formats.small.url}`}
                  loading="lazy"
                  className="w-48 h-48 absolute -m-20"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full mt-32 text-center">
              <h5 className="h5 uppercase font-semibold text-tertiary tracking-wide">
                Instructor
              </h5>
              <h1 className="text-tertiary-darkest h1">
                {instructor[0].Title}
              </h1>
            </div>
            <div className="mt-10 pt-10 pb-6 border-t border-gray-300">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-9/12 px-4 mb-4 leading-relaxed text-tertiary-darker">
                  <ReactMarkdown
                    className="markdown"
                    children={instructor[0].Content}
                  />
                </div>
              </div>
            </div>
            <div className="player-wrapper w-full px-4 md:w-9/12 mx-auto mb-10">
              <ReactPlayer
                className="react-player rounded"
                url={`${process.env.NEXT_PUBLIC_API_URL}${instructor[0].Video[0].url}`}
                // url="http://64.225.36.253:5080/LiveApp/streams/621283582412670363663040.mp4"
                alt={instructor[0].Video[0].alternativeText}
                width="100%"
                height="100%"
                controls={true}
                // light={`${process.env.NEXT_PUBLIC_API_URL}${instructor[0].Image.formats.medium.url}`}
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <style jsx>{`
        .player-wrapper {
          position: relative;
          overflow: hidden;
          padding-top: 591.44px / 1127.34px * 100%;
        }

        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }

        .react-player video {
          border-radius: 0.25rem;
        }

        .legible-width {
          max-width: 75ch;
        }

        .bg {
          background-color: #212121;
        }
      `}</style>
    </Layout>
  )
}

export default Slug

export async function getStaticProps({ params }) {
  const instructor = await fetchQuery("instructors", `${params.slug}`)
  return {
    props: {
      instructor,
    },
  }
}
export async function getStaticPaths() {
  const instructors = await fetchQuery("instructors")
  const paths = instructors.map((instructor) => {
    return {
      params: { slug: String(instructor.Slug) },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
