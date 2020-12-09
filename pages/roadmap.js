import Layout from "../components/Layout"

const roadmap = () => {
  return (
    <Layout>
      <div className="w-full text-center">
        <h1 className="h1 text-blue-500 capitalize">Roadmap</h1>
      </div>
      <div className="w-full">
        <div
          className="mx-auto text-gray-200 text-lg"
          style={{ maxWidth: `75ch` }}
        >
          <div>
            <h2 className="h4 mt-4 text-gray-100">Hi everyone,</h2>
            <p className="mt-4">
              I wanted to share some important dates coming up and what this
              means for you.
            </p>
          </div>
        </div>
        {/* Timeline */}
        <div className="relative w-1/2 mx-auto my-10 text-gray-200">
          <div
            className="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0"
            style={{ left: `7px` }}
          ></div>
          <ul className="list-none m-0 p-0">
            <li className="mb-2">
              <div className="flex items-center mb-1">
                <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
                <div className="flex-1 ml-4 font-bold text-gray-100">
                  TBD in 2021….
                </div>
              </div>
              <div className="ml-12">
                Sometime in the New Year our Rouse Yoga Studio{" "}
                <a href="https://www.google.com/maps/place/Rouse+Yoga/@33.9161386,-117.3144006,17z/data=!3m1!4b1!4m5!3m4!1s0x80dca533cb588db5:0x58cab2e1cef86729!8m2!3d33.9161342!4d-117.3122066">
                  Location
                </a>{" "}
                will be open. We are anticipating either January or February, we
                will keep you posted on the progress and grand opening dates.
              </div>
            </li>
          </ul>
        </div>

        <div
          className="mx-auto text-gray-200 text-lg"
          style={{ maxWidth: `75ch` }}
        >
          <div>
            <p className="mt-4">
              We will also be launching a Podcast soon. You'll have the
              opportunity to get to know your instructors better, listen to
              honest conversation about the yoga community and so much more!
            </p>
            <p className="mt-4">
              A music festival/retreat is in the works. Updates coming soon!
            </p>
            <p className="mt-4">Rouse Yoga appreciates your patience!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default roadmap
