import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Cookie from "js-cookie"
import { AuthContext } from "../context/UserAuthContext"
import { useRouter } from "next/router"

const Login = () => {
  const { user, login, setUser, setLoggedIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await login(email, password).then((res) => {
        console.log(res)
        Cookie.set("token", res.jwt)
        setUser({
          email: res.user.email,
          userName: res.user.username,
          subTier: res.user.subTier,
        })
        setLoading(false)
        setLoggedIn(true)
        router.push("/dashboard")
      })
    } catch (error) {
      console.log(error.response.data.message[0].messages[0].message)
      setError(error.response.data.message[0].messages[0].message)
      setLoading(false)
    }
  }

  // useEffect(() => {
  //   router.prefetch("/dashboard")
  // }, [])

  return (
    <>
      {/* Form */}
      <div className="max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="150">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
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
                className="form-input w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value={password}
                id="password"
                type="password"
                className="form-input w-full"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                type="submit"
                className="btn text-white bg-purple-600 hover:bg-purple-500 w-full"
              >
                {loading ? "Loading..." : "Log in"}
              </button>
            </div>
          </div>
        </form>

        {error.length > 1 ? (
          <p className="font-inter text-red-600">{error}</p>
        ) : null}

        <div className="text-gray-500 text-center mt-6">
          Don't have a Rouse Yoga account?{" "}
          <Link href="/signup">
            <a className="text-purple-600 hover:underline transition duration-150 ease-in-out">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
