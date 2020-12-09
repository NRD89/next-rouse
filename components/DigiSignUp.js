import { useState, useContext, useEffect } from "react"
import Link from "next/link"
import Cookie from "js-cookie"
import { AuthContext } from "../context/UserAuthContext"

const DigiSignUp = ({ loginSuccess, setLoginSuccess }) => {
  const {
    user,
    registerUser,
    setUser,
    setLoggedIn,
    isAuthenticated,
    redirectToManage,
  } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  // useEffect(() => {
  //   if (isAuthenticated === true) {
  //     setLoginSuccess(true)
  //   }
  // }, [isAuthenticated])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (password === confirmPassword) {
      try {
        await registerUser(username, email, password).then((res) => {
          console.log(res)
          if (res.statusCode === 400) {
            setError(res.message[0].messages[0].message)
            setLoading(false)
          } else {
            Cookie.set("token", res.jwt)
            setUser({
              email: res.user.email,
              userName: res.user.email,
              subTier: res.user.subTier,
            })
            setLoading(false)
            setLoggedIn(true)
            // go("stripe")
            setLoginSuccess(true)
            const token = Cookie.get("token")
            setTimeout(() => {
              const response = fetch("/api/sub-manage-link", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
              })
                .then(async (res) => await res.json())
                .then((link) => {
                  window.location.href = link
                })
                .catch((err) => console.error(JSON.stringify(err, null, 2)))

              // console.log("response =>", response)

              return response
            }, 1500)
          }
        })
      } catch (e) {
        console.log(e)
        setError(e)
        setLoading(false)
      }
    } else {
      setLoading(false)
      setError("Password and Confirm Password must match!")
    }
  }

  return (
    <>
      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-1"
                htmlFor="name"
              >
                User Name <span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                value={username}
                id="username"
                type="text"
                placeholder="Username"
                className="form-input w-full text-gray-800"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-1"
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
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-1"
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
                className="form-input w-full text-gray-800"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-400 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                value={confirmPassword}
                id="confirm-password"
                type="password"
                className="form-input w-full text-gray-800"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                type="submit"
                className="btn text-white bg-tertiary hover:bg-tertiary-dark w-full"
              >
                {loading
                  ? "Loading..."
                  : loginSuccess
                  ? "Going to Checkout"
                  : "Sign Up"}
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center mt-3">
            By creating an account, you agree to the{" "}
            <Link href="/terms-and-conditions">
              <a className="text-blue-600 hover:underline transition duration-150 ease-in-out font-medium">
                terms & conditions
              </a>
            </Link>
            .
          </div>
        </form>

        {error.length > 1 ? (
          <p className="font-inter text-red-600">{error}</p>
        ) : null}

        <div className="text-gray-600 text-center mt-6">
          Already have a Rouse Yoga account?{" "}
          <Link href="/login">
            <a className="text-blue-600 hover:underline transition duration-150 ease-in-out font-medium">
              Login
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DigiSignUp
