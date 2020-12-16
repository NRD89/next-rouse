import { useState, useEffect, useContext } from "react"
import DashLayout from "../../../components/DashLayout"
import { AuthContext } from "../../../context/UserAuthContext"
import { useRouter } from "next/router"
// import ReactPlayer from "react-player"
import useAuth from "../../../hooks/useAuth"
import { MdOpenInNew } from "react-icons/md"
import { fetchQuery } from "../../../utils"

const live = ({ vod }) => {
  console.log(vod)
  const { user, redirectToManage } = useContext(AuthContext)
  const [liveAppToken, setLiveAppToken] = useState()
  const [webRtcToken, setWebRtcToken] = useState()
  const { data: userData, loading, error, mutate } = useAuth()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if ((userData && !userData.username) || error) {
      window.location.href = "/login"
    } else if (userData && userData.subTier === "digital") {
      fetch(
        `https://live.rouse.yoga:5443/LiveApp/rest/v2/broadcasts/${vod[0].streamID}/token?expireDate=1922561949&type=play`
      ).then(async (res) => {
        const data = await res.json()
        setLiveAppToken(data.tokenId)
      })
    }
  }, [userData, error])

  return (
    <DashLayout>
      {loading ? (
        <h1 className="h2 text-blue-600">Loading...</h1>
      ) : userData && userData.subTier !== "digital" ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-gray-200 h2 text-center">
            For access to live streaming <br />
            <span className="text-orange-400">SIGN UP</span> for a digital
            membership!
          </h1>
          <div className="flex flex-wrap w-full justify-center mt-6">
            <div className="px-3 w-full md:w-1/4">
              <button
                onClick={redirectToManage}
                className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full"
              >
                Go Digital <MdOpenInNew className="w-6 h-6 p-1" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-lg">
          <h1 className="h2 pb-10 text-blue-500 text-center">{`Flow With ${vod[0].instructors[0].Title}`}</h1>
          <div className="vid-container">
            <iframe
              className="video"
              src={`https://live.rouse.yoga:5443/LiveApp/play.html?name=${vod[0].streamID}&autoplay=true&playOrder=hls&token=${liveAppToken}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <style jsx>{`
        .vid-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
        }
        .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </DashLayout>
  )
}

export default live

export async function getStaticProps({ params }) {
  const vod = await fetchQuery("VODS", `${params.slug}`)
  return {
    props: {
      vod,
    },
  }
}

export async function getStaticPaths() {
  const VODS = await fetchQuery("VODS")
  const paths = VODS.map((vod) => {
    return {
      params: { slug: String(vod.Slug) },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
