import { useState, useEffect, useContext } from "react"
import DashLayout from "../../components/DashLayout"
import { AuthContext } from "../../context/UserAuthContext"
import useSWR from "swr"
import useAuth from "../../hooks/useAuth"
import { MdOpenInNew } from "react-icons/md"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { RiDiscordLine, RiCloseFill } from "react-icons/ri"
import DigitalModal from "../../components/DigitalModal"
// import WidgetBot from "@widgetbot/react-embed"

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
  loading: () => <p>...</p>,
})

const fetcher = (url) => fetch(url).then((res) => res.json())

const live = () => {
  const { user, redirectToManage } = useContext(AuthContext)
  const [liveAppToken, setLiveAppToken] = useState()
  const [webRtcToken, setWebRtcToken] = useState()
  const [isVisible, setIsVisible] = useState(false)
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
        <div className="flex flex-col justify-center items-center">
          <h1 className="h2 text-gray-900 dark:text-gray-100 font-red-hat-display animate-pulse">
            Loading...
          </h1>
        </div>
      ) : userData && userData.subTier !== "digital" ? (
        <div className="flex flex-col justify-center items-center">
          <h1
            className="h2 font-red-hat-display text-center text-gray-600 dark:text-gray-400"
            data-aos="fade-down"
          >
            For access to live streaming <br />
            <span className="text-gray-900 dark:text-gray-100">
              SIGN UP
            </span>{" "}
            for a digital membership!
          </h1>
          <div
            className="flex flex-wrap w-full justify-center mt-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="px-3 w-full md:w-1/4">
              {userData && userData.subTier === "digital" ? (
                <button
                  onClick={redirectToManage}
                  className="btn text-white bg-purple-600 hover:bg-purple-500 w-full"
                >
                  Update Subscription
                  <MdOpenInNew className="w-6 h-6 p-1" />
                </button>
              ) : (
                <DigitalModal buttonText="Start Free Trial" btnWidth="full" />
              )}
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

      <AnimatePresence initial={true}>
        {isVisible && (
          <div className="fixed right-0 bottom-0 md:right-5 md:bottom-5 z-10 w-full h-3/4 md:w-1/2 lg:w-1/3 ml-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                damping: 12,
                mass: 0.75,
                stiffness: 75,
              }}
              className="h-full"
            >
              <WidgetBot
                server="788301141023653888" // Rouse Yoga
                channel="788301860213489664" // #live-streaming-chat
                style={{ width: `100%`, height: `100%` }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          <motion.div initial={false} animate={isVisible ? "open" : "closed"}>
            <motion.div
              className="rounded-full bg-tertiary w-14 h-14 fixed right-5 bottom-5 flex items-center justify-center z-20"
              variants={{
                closed: { visibility: `visible`, opacity: 1, rotate: 360 },
                open: { visibility: `hidden`, opacity: 0, rotate: 0 },
              }}
              transition={{ ease: `easeInOut`, duration: 0.4 }}
            >
              <RiDiscordLine className="w-10 h-10 text-gray-100" />
            </motion.div>
            <motion.div
              className="rounded-full bg-transparent w-14 h-14 fixed right-5 bottom-5 flex items-center justify-center z-20 text-gray-100"
              variants={{
                closed: { visibility: `hidden`, opacity: 0, rotate: 0 },
                open: { visibility: `visible`, opacity: 1, rotate: 360 },
              }}
              transition={{ ease: `easeInOut`, duration: 0.4 }}
            >
              <RiCloseFill className="w-10 h-10 text-gray-100" />
            </motion.div>
          </motion.div>
        </button>
      </div>
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
