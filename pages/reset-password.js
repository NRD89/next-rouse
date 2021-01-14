// import { useState } from "react"
// import { useRouter } from "next/router"
import Layout from "../components/Layout"
// import axios from "axios"

const resetPassword = () => {
  // const [email, setEmail] = useState("")
  // const [error, setError] = useState("")

  // const router = useRouter()
  // console.log(router.query)

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setLoading(true)
  //   axios
  //     .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
  //       email, // user's email
  //     })
  //     .then((response) => {
  //       console.log("Your user received an email")
  //     })
  //     .catch((error) => {
  //       console.log("An error occurred:", error.response)
  //     })
  //   try {
  //     await login(email, password).then((res) => {
  //       console.log(res)
  //       Cookie.set("token", res.jwt)
  //       setUser({
  //         email: res.user.email,
  //         userName: res.user.username,
  //         subTier: res.user.subTier,
  //       })
  //       setLoading(false)
  //       setLoggedIn(true)
  //       router.push("/dashboard")
  //     })
  //   } catch (error) {
  //     console.log(error.response.data.message[0].messages[0].message)
  //     setError(error.response.data.message[0].messages[0].message)
  //     setLoading(false)
  //   }
  // }

  return (
    <Layout>
      {/* <div className="max-w-sm mx-auto">
        <h1 className="h1 text-gray-100">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-100 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
                id="email"
                type="email"
                placeholder="email@email.com"
                className="form-input w-full text-gray-800"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                type="submit"
                className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full"
              >
                {loading ? "Loading..." : "Request Password Reset"}
              </button>
            </div>
          </div>
        </form>
      </div> */}
      <h1>nothing</h1>
    </Layout>
  )
}

export default resetPassword
