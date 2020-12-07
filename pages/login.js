import Layout from "../components/Layout"
import Login from "../components/Login"

const login = () => {
  return (
    <Layout>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 text-gray-100 font-inter">Sign In</h1>
            </div>
            <Login />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default login
