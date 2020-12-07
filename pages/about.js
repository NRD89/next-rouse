import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <div className="w-full text-center">
        <h1 className="h1 text-indigo-500 capitalize">About Rouse Yoga</h1>
      </div>
      <div className="w-full mt-10">
        <div
          className="mx-auto text-gray-200 text-lg"
          style={{ maxWidth: `75ch` }}
        >
          <p>
            Thank you for taking the time to visit the Rouse Yoga community. We
            exist today because of you. With a heart of gratitude and
            appreciation, thank you for being you and taking your time to be a
            part of this.
          </p>
          <div className="text-center">
            <h2 className="h2 my-4 text-gray-50">Hello and Welcome!</h2>
          </div>
          <p>
            My name is Adri and I am the founder of Rouse Yoga. I am honored to
            be able to share something so close to my heart with you all. Every
            part of who I am and what I believe in lives and breathes in what
            Rouse Yoga stands for.
          </p>
          <p className="mt-4">
            <span className="font-bold text-gray-50 uppercase">
              Mission Statement:
            </span>{" "}
            <br /> To create a harmonious relationship between yoga and
            technology that cultivates a community of love and growth at a
            global level.
          </p>
          <p className="mt-4">
            <span className="font-bold text-gray-50 uppercase">Vision:</span>{" "}
            <br /> Someday, our world will become a place of endless love and
            peace.
          </p>
          <p className="mt-4">
            I believe that every single person on this planet has an amazing
            story and journey that has shaped who they are today and through
            this we become who we desire to be. While we are on our personal
            journey we develop this incredible ability to connect more deeply to
            the world around us. This is what led me to founding Rouse Yoga and
            what drives me to do what I do every day.
          </p>
          <p className="mt-4">
            I strive to be the best version of myself I possibly can, I connect
            to that power deep within me to experience life at its fullest, I
            live my life craving to connect to the people and world around me, I
            am fearless in going after what I want and I am a fighter for the
            things that matter. And what matters to me is{" "}
            <span className="font-bold text-gray-50">YOU</span>.
          </p>
          <p className="mt-4">
            I want you to discover your power and connect to yourself deeply, so
            that you have no choice but to give yourself everything you want.
            And in that, I created Rouse Yoga, a platform of expression,
            community, love, power and self-discovery. We don’t just teach yoga,
            we help you find power, understanding and purpose in your every
            breath and movement.
          </p>
          <p className="mt-4">Thank you for taking this journey with us.</p>
          <p className="mt-4">-Adri</p>
        </div>
      </div>
    </Layout>
  )
}

export default about
