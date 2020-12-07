import { useState } from "react"
import { useRouter } from "next/router"
import Layout from "../components/Layout"
import axios from "axios"

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState("")

  const router = useRouter()
  console.log(router.query)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
        email, // user's email
      })
      .then((response) => {
        setLoading(false)
        setSuccess(true)
      })
      .catch((error) => {
        setError("An error occurred:", error.response)
      })
  }

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        {error && error.length > 1 ? (
          <p className="text-red-600">{error}</p>
        ) : null}
        {success ? (
          <p className="text-green-600">
            Check your inbox for an email from us!
          </p>
        ) : null}
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
    </div>
  )
}

export default RequestPasswordReset
