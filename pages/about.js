import Header from "../components/Header"
import Footer from "../components/Footer"

const about = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-darkBlueBg">
      <Header />
      <main className="mt-48 bg-darkBlueBg flex-grow px-6 mb-24">
        <div className="w-full text-center">
          <h1 className="font-bold h1 text-gray-100 capitalize">About</h1>
        </div>
        <div className="w-full mt-10">
          <div
            className="mx-auto text-gray-100 text-lg"
            style={{ maxWidth: `75ch` }}
          >
            <p>
              Thank you for taking the time to visit the Rouse Yoga community.
              We exist today because of you. With a heart of gratitude and
              appreciation, thank you for being you and taking your time to be a
              part of this.
            </p>
            <div className="text-center">
              <h2 className="h4 my-4">Hello and Welcome!</h2>
            </div>
            <p>
              My name is Adri and I am the founder of Rouse Yoga. I am honored
              to be able to share something so close to my heart with you all.
              Every part of who I am and what I believe in lives and breathes in
              what Rouse Yoga is.
            </p>
            <p className="mt-4">
              <span className="font-semibold">Mission Statement:</span> <br />{" "}
              To create a harmonious relationship between yoga and technology
              that cultivates a community of love and growth at a global level.
            </p>
            <p className="mt-4">
              <span className="font-semibold">Vision:</span> <br /> Someday, our
              world will become a place of endless love and peace.
            </p>
            <p className="mt-4">
              I believe that every single person on this planet has an amazing
              story and journey that has shaped who they are today. We have all
              experienced life at its greatest moments of ecstasy and at its
              most painful; this is what makes every single one of us who we
              are, a beautiful combination of the highest forms of joy and the
              deepest forms of pain. Sadly, our moments of bliss and moments of
              agony blind us and life becomes an experience of senses rather
              than a personal journey of self-discovery. This is what led me to
              founding Rouse Yoga and what drives me to do what I do every day.
              I strive to be the best version of myself I possibly can, I
              connect to that power deep within me to experience life at its
              fullest, I live my life craving to connect to the people and world
              around me, I am fearless in going after what I want and I am a
              fighter for the things that matter. And what matters to me is you,
              for you to create the world you desire around you. I want you to
              discover your power and connect to yourself so deeply that you
              have no choice but to give yourself everything you want. And in
              that, I created Rouse Yoga, a platform of expression, community,
              love, power and self-discovery. We don’t just teach yoga, we help
              you find power, understanding and purpose in your every breath and
              movement.
            </p>
            <p className="mt-4">Thank you for taking this journey with us.</p>
            <p className="mt-4">-Adri</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default about
