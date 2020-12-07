import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import ReactPlayer from "react-player"

const live = ({ data }) => {
  const [live, setLive] = useState()
  const [token, setToken] = useState()
  // useEffect(() => {
  //   fetch(
  //     "https://live.rouse.yoga:5443/LiveApp/rest/v2/broadcasts/404771467467585529678292"
  //   ).then(async (res) => {
  //     const data = await res.json()
  //     console.log(data)
  //     setLive(data.status)
  //   })
  // }, [])

  useEffect(() => {
    fetch(
      "https://live.rouse.yoga:5443/LiveApp/rest/v2/broadcasts/232052513491733655407156/token?expireDate=1922561949&type=play"
    ).then(async (res) => {
      const data = await res.json()
      console.log(data)
      setToken(data.tokenId)
    })
  }, [])

  return (
    <Layout>
      <div className="mb-16 max-w-screen-xl mx-auto px-6">
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
            src={`https://live.rouse.yoga:5443/LiveApp/play.html?name=232052513491733655407156&autoplay=true&playOrder=webrtc&token=${token}`}
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
    </Layout>
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
