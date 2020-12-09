import { useState, useEffect, useContext } from "react"
import DashLayout from "../../components/DashLayout"
import { AuthContext } from "../../context/UserAuthContext"
import { useRouter } from "next/router"
// import ReactPlayer from "react-player"
import useSWR from "swr"
import useAuth from "../../hooks/useAuth"
import { MdOpenInNew } from "react-icons/md"

const fetcher = (url) => fetch(url).then((res) => res.json())

const live = () => {
  const { user, redirectToManage } = useContext(AuthContext)
  const [liveAppToken, setLiveAppToken] = useState()
  const [webRtcToken, setWebRtcToken] = useState()
  const { data: userData, loading, error, mutate } = useAuth()

  const {
    data: webRTC,
  } = useSWR(
    "https://live.rouse.yoga:5443/WebRTCAppEE/rest/v2/broadcasts/704622828489059776867025",
    fetcher,
    { refreshInterval: 5000 }
  )

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if ((userData && !userData.username) || error) {
      window.location.href = "/login"
    } else if (userData && userData.subTier === "digital") {
      fetch(
        "https://live.rouse.yoga:5443/LiveApp/rest/v2/broadcasts/232052513491733655407156/token?expireDate=1922561949&type=play"
      ).then(async (res) => {
        const data = await res.json()
        setLiveAppToken(data.tokenId)
      })
      fetch(
        "https://live.rouse.yoga:5443/WebRTCAppEE/rest/v2/broadcasts/704622828489059776867025/token?expireDate=1922561949&type=play"
      ).then(async (res) => {
        const data = await res.json()
        setWebRtcToken(data.tokenId)
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
          <div className="vid-container">
            <iframe
              className="video"
              src={
                webRTC && webRTC.status === "broadcasting"
                  ? `https://live.rouse.yoga:5443/WebRTCAppEE/play.html?name=704622828489059776867025&autoplay=true&playOrder=webrtc&token=${webRtcToken}`
                  : `https://live.rouse.yoga:5443/LiveApp/play.html?name=232052513491733655407156&autoplay=true&playOrder=webrtc&token=${liveAppToken}`
              }
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
