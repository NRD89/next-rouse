import { useContext, useEffect } from "react"
import { AuthContext } from "../context/UserAuthContext"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import Cookie from "js-cookie"

import DigitalModal from "../components/DigitalModal"

const dashboard = () => {
  const { user, setUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const token = Cookie.get("token")
    if (token) {
      // Authenticate token through Strapi and place user object in defaultValues.user
      fetch(`/api/get-customer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (res.statusCode) {
          setUser(defaultValues.user)
          return null
        }
        const data = await res.json()
        console.log(data)
        setUser(data)
      })
    }
  }, [])

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user])

  return (
    <Layout>
      <div className="mx-auto max-w-sm mt-48">
        <DigitalModal />
        {!user ? (
          <h1 className="h1 text-purple-500">Loading...</h1>
        ) : (
          <pre className="text-indigo-50">
            {JSON.stringify({ user }, null, 2)}
          </pre>
        )}
      </div>
    </Layout>
  )
}

export default dashboard
