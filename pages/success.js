import HeaderNew from "../components/HeaderNew"
import Footer from "../components/Footer"
import Link from "next/link"

const success = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-darkBlueBg">
      <HeaderNew />
      <main className="mt-48 bg-darkBlueBg flex-grow mb-24">
        <div className="w-full text-center">
          <h1 className="font-bold h1 text-green-500 capitalize">
            Thanks for your submission! <br />{" "}
            <Link href="/">
              <a className="text-gray-100">Go back home.</a>
            </Link>
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default success
