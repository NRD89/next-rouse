import BackgroundImage from "./BackgroundImage"

const ImageTextCards = () => {
  return (
    <div className="bg-darkBlueBg">
      <div className="w-full text-center mt-36">
        <h2 className="font-bold h1 text-gray-100 capitalize">What we offer</h2>
      </div>
      <div className="mt-16 md:grid md:grid-cols-4 text-white">
        <div className="flex flex-col justify-center md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3 px-8 md:px-16 py-8 md:py-16">
          <h3 className="h3 mb-10">Innovative Digital Platform</h3>
          <p>
            Live stream with your favorite instructor and watch 30+ pre-recorded
            classes and series. Livestreaming can seem impersonal, use the live
            chat to connect with your instructor.
          </p>
        </div>
        <div className="md:col-start-1 md:row-start-1 md:row-end-3 md:col-end-3">
          <BackgroundImage path={"pexels-polina-tankilevitch-4723339.jpg"} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-white ">
        <div className="flex flex-col justify-center px-8 md:px-16 py-8 md:py-16">
          <h3 className="h3 mb-10">Discover A New Way To Flow</h3>
          <p>
            Each instructor has their own unique and creative way of teaching.
            With a variety of yoga and meditation classes offered, you will find
            the instructors and classes that fit your needs.
          </p>
        </div>
        <div>
          <BackgroundImage path={"pexels-li-sun-2294353.jpg"} />
        </div>
      </div>
    </div>
  )
}

export default ImageTextCards
