import { useEffect } from "react"
import DashLayout from "../../../components/DashLayout"
import useAuth from "../../../hooks/useAuth"
import { fetchQuery } from "../../../utils"
import { Badge } from "@windmill/react-ui"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { GrYoga } from "react-icons/gr"
import { FiUnlock } from "react-icons/fi"
import Link from "next/link"

const Index = ({ vods }) => {
  console.log(vods)
  const { data: userData, loading, error } = useAuth()
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if ((userData && !userData.username) || error) {
      window.location.href = "/login"
    }
  }, [userData, error])
  return (
    <DashLayout>
      {loading ? (
        <h1 className="h2 font-red-hat-display animate-pulse text-center">
          Loading...
        </h1>
      ) : (
        <div className="container mt-4 mx-auto">
          <div className="flex flex-col justify-center items-center pb-10">
            <div>
              <h1
                className="h2 font-red-hat-display text-center"
                data-aos="fade-down"
              >
                Get To Know Your Instructors
              </h1>
              <p
                className="pt-5 text-lg text-gray-700 dark:text-gray-300 max-w-prose"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Enjoy our VoD (video on demand) classes where you get to know
                your instructors' style and discover the class that fits your
                needs. See you on the mat!
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 md:pb-20"
            data-aos-id-vids
          >
            {vods.map((vod) => (
              <Link key={vod.id} href={`video-on-demand/${vod.Slug}`}>
                <a
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                  data-aos-anchor="[data-aos-id-vids]"
                >
                  <div>
                    <div className="bg-gray-100 dark:bg-gray-800 w-full rounded-sm cursor-pointer hover:shadow-xl dark:hover:shadow-dark40 transform hover:-translate-y-1 transition-all duration-200  overflow-hidden">
                      <div className="relative pb-9/16">
                        {" "}
                        <img
                          src={
                            !vod.instructors[0].Image.formats.medium
                              ? `${process.env.NEXT_PUBLIC_API_URL}${vod.instructors[0].Image.formats.small.url}`
                              : `${process.env.NEXT_PUBLIC_API_URL}${vod.instructors[0].Image.formats.medium.url}`
                          }
                          loading="lazy"
                          className="absolute w-full h-full object-cover z-10"
                        />
                        <div className="w-full h-full flex justify-center items-center absolute z-20 bg-purple-600 bg-opacity-50">
                          {userData && userData.subTier === "digital" ? (
                            <AiOutlinePlayCircle className="w-12 h-12 text-gray-100" />
                          ) : (
                            <>
                              <FiUnlock className="w-8 h-8 text-gray-100" />{" "}
                              <p className="text-gray-100 font-bold">
                                with Digital
                              </p>{" "}
                            </>
                          )}
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-center items-center p-5"
                        style={{ minHeight: 134 }}
                      >
                        <div>
                          <Badge
                            type="primary"
                            className="bg-purple-300 dark:text-gray-100 inline-flex items-center"
                          >
                            <GrYoga /> {vod.duration}
                          </Badge>
                          <h2 className="h4 pt-1">
                            Flow with{" "}
                            <span className="text-blue-500">
                              {vod.instructors[0].Title}
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </DashLayout>
  )
}

export default Index

export async function getStaticProps() {
  const vods = await fetchQuery("VODS")
  return {
    props: {
      vods,
    },
  }
}
