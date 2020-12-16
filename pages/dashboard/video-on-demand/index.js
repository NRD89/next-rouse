import { useEffect } from "react"
import DashLayout from "../../../components/DashLayout"
import useAuth from "../../../hooks/useAuth"
import { fetchQuery } from "../../../utils"
import { Badge } from "@windmill/react-ui"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { GrYoga } from "react-icons/gr"
import Link from "next/link"

const Index = ({ vods }) => {
  console.log(vods)
  const { data: userData, loading, error, mutate } = useAuth()
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
        <h1 className="h2 text-blue-500">Loading...</h1>
      ) : (
        <div className="container mt-4 mx-auto">
          <div className="flex flex-col justify-center items-center pb-10">
            <div>
              <h1 className="h2 text-blue-500 text-center">
                Get To Know Your Instructors
              </h1>
              <p
                className="text-gray-300 pt-5 text-lg"
                style={{ maxWidth: `75ch` }}
              >
                Enjoy our VoD (video on demand) classes where you get to know
                your instructors' style and discover the class that fits your
                needs. See you on the mat!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vods.map((vod) => (
              <Link key={vod.id} href={`video-on-demand/${vod.Slug}`}>
                <a>
                  <div>
                    <div className="bg-gray-200 w-full text-darkBlueBg rounded-lg cursor-pointer border border-blue-800 hover:shadow-dark40 hover:border-darkBlueBg transform hover:-translate-y-1 transition-all duration-200  overflow-hidden">
                      <div className="relative pb-16/9">
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
                        <div className="w-full h-full flex justify-center items-center absolute z-20 bg-tertiary bg-opacity-50">
                          <AiOutlinePlayCircle className="w-12 h-12 text-gray-100" />
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-center items-center p-5"
                        style={{ minHeight: 134 }}
                      >
                        <div>
                          <Badge
                            type="primary"
                            className="bg-tertiary-lighter inline-flex items-center"
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
