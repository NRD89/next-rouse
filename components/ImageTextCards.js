import { useState } from "react"
import ReactPlayer from "react-player/lazy"
const thumbNail = require("../images/rouse-landing-page-video-thumbnail.jpg")
import { AiOutlinePlayCircle } from "react-icons/ai"

const PlayButton = ({ setIsPlaying, isPlaying }) => {
  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="w-full h-full relative pb-16/9">
      <div className="w-full h-full flex justify-center items-center absolute z-20 bg-tertiary-light bg-opacity-25">
        <button onClick={handleClick}>
          <AiOutlinePlayCircle className="w-12 h-12 text-darkBlueBg" />
        </button>
      </div>
    </div>
  )
}

const ImageTextCards = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="bg-darkBlueBg">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="h1 text-center text-gray-100 mt-36">What To Expect</h2>
        <div className="flex flex-wrap justify-center items-center pb-6 px-6">
          <div className="bg-darkBlueBg w-full lg:w-1/2">
            <div className="my-16 md:mb-32 md:mt-16 mx-6 md:mr-16">
              <h3 className="text-center h3 text-blue-500">Easy as...</h3>
              <div className="flex w-full justify-evenly mt-10 font-light text-gray-400">
                <div>
                  <span className="uppercase">1.</span>
                  <p className="text-xl md:text-2xl text-gray-100 font-bold md:font-semibold pt-2">
                    Sign Up
                  </p>
                </div>
                <div className="px-4">
                  <span className="uppercase">2.</span>
                  <p className="text-xl md:text-2xl text-gray-100 font-bold md:font-semibold pt-2">
                    Get Digital
                  </p>
                </div>
                <div>
                  <span className="uppercase">3.</span>
                  <p className="text-xl md:text-2xl text-gray-100 font-bold md:font-semibold pt-2">
                    Start Watching
                  </p>
                </div>
              </div>

              <div className="w-full mt-8 text-gray-300 text-base">
                Watch the video and explore what being a member means for you.
                We don't just teach yoga, we help you find purpose and power in
                your every breath and movement. Join the community, together
                we'll discover who we are.
              </div>
            </div>
          </div>
          <div className="bg-darkBlueBg w-full lg:w-1/2">
            <ReactPlayer
              className="react-player rounded"
              url="https://backend.rouse.yoga/uploads/Website_Interest_Video_1_69dbe4ae24.mp4"
              // url="http://64.225.36.253:5080/LiveApp/streams/621283582412670363663040.mp4"
              alt="Video Showcasing rouse.yoga's Features"
              width="100%"
              height="100%"
              controls={true}
              playing={isPlaying}
              playIcon={
                <PlayButton setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
              }
              light={thumbNail}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .player-wrapper {
          position: relative;
          overflow: hidden;
          padding-top: 591.44px / 1127.34px * 100%;
          border-radius: 0.25rem;
        }

        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }

        .react-player video {
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  )
}

export default ImageTextCards
