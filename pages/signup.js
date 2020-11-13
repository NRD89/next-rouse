import Header from "../components/Header"
import SignUp from "../components/SignUp"

const signup = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b bg-darkBlueBg">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 text-gray-100 font-inter">
                  Welcome. We exist to make entrepreneurism easier.
                </h1>
              </div>
              <SignUp />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default signup
