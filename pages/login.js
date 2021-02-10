import Layout from "../components/Layout"
import Login from "../components/Login"

const login = () => {
  return (
    <Layout
      metaTitle="Login"
      metaDescription="Welcome back Rouse Yoga members! Use this page to login to your dashboard so you can watch live or pre-recorded Yoga flows."
    >
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1
                className="h2 sm:h1 font-red-hat-display"
                data-aos="fade-down"
              >
                Welcome back!
              </h1>
            </div>
            <Login />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default login
