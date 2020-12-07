import { useState, useEffect, useContext } from "react"
import DashLayout from "../../components/DashLayout"
import { AuthContext } from "../../context/UserAuthContext"
import { useRouter } from "next/router"
// import ReactPlayer from "react-player"
import useSWR from "swr"
import useAuth from "../../hooks/useAuth"

const fetcher = (url) => fetch(url).then((res) => res.json())

const live = () => {
  const { user, redirectToManage } = useContext(AuthContext)
  const router = useRouter()
  const [live, setLive] = useState()
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
  console.log(webRTC)

  // useEffect(() => {
  //   fetch(
  //     "https://live.rouse.yoga:5443/WebRTCAppEE/rest/v2/broadcasts/704622828489059776867025"
  //   ).then(async (res) => {
  //     const data = await res.json()
  //     setLive(data.status)
  //     console.log(data)
  //   })
  // }, [])

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
        console.log(data)
        setLiveAppToken(data.tokenId)
      })
      fetch(
        "https://live.rouse.yoga:5443/WebRTCAppEE/rest/v2/broadcasts/704622828489059776867025/token?expireDate=1922561949&type=play"
      ).then(async (res) => {
        const data = await res.json()
        console.log(data)
        setWebRtcToken(data.tokenId)
      })
    }
  }, [userData, error])

  return (
    <DashLayout>
      {userData && userData.subTier !== "digital" ? (
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
                Go Digital
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto">
          {/* <ReactPlayer
          className="react-player rounded"
          url="https://live.rouse.yoga:5443/LiveApp/streams/621283582412670363663040.mp4"
          alt="alt"
          width="100%"
          height="100%"
          controls={true}
        /> */}
          <div className="vid-container">
            <iframe
              className="video"
              src={
                webRTC && webRTC.status === "broadcasting"
                  ? `https://live.rouse.yoga:5443/WebRTCAppEE/play.html?name=704622828489059776867025&autoplay=true&playOrder=webrtc&token=${webRtcToken}`
                  : `https://live.rouse.yoga:5443/LiveApp/play.html?name=232052513491733655407156&autoplay=true&playOrder=webrtc&token=${liveAppToken}`
              }
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          {/* <iframe
          width="100%"
          height="600"
          src={`https://live.rouse.yoga:5443/WebRTCAppEE/play.html?name=050523799342811177626357&autoplay=true&playOrder=webrtc&token=${token}`}
          frameborder="0"
          allowfullscreen
        ></iframe> */}
          {/* <iframe
          width="560"
          height="315"
          src={`https://live.rouse.yoga:5443/LiveApp/play.html?name=412344108257958047163109&autoplay=true&token=${token}`}
          frameborder="0"
          seamless="seamless"
          allowfullscreen
        ></iframe> */}
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

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://live.rouse.yoga:5443/LiveApp/rest/v2/broadcasts/050523799342811177626357/token?expireDate=1922561949&type=play"
//   )
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }
