// import { useContext, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "./Layout"
// import { AuthContext } from "../context/UserAuthContext"
// import Cookie from "js-cookie"
// import useAuth from "../hooks/useAuth"

const DashLayout = ({ children }) => {
  // const { isAuthenticated } = useContext(AuthContext)
  const router = useRouter()
  // const { data: userData, loading, error, mutate } = useAuth()
  console.log(router.pathname)
  // console.log(error)

  // useEffect(() => {
  //   if ((userData && !userData.username) || error) {
  //     router.replace("/login")
  //   }
  // }, [userData, error])

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl">
        <nav className="pb-8 ">
          <ul className="flex items-center justify-evenly">
            <li>
              <Link href="/dashboard">
                <a
                  className={`h4 font-red-hat-display ${
                    router.pathname === "/dashboard"
                      ? "border-b-2 border-purple-600"
                      : ""
                  }`}
                >
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/video-on-demand">
                <a
                  className={`h4 font-red-hat-display ${
                    router.pathname === "/dashboard/video-on-demand"
                      ? "border-b-2 border-purple-600"
                      : ""
                  }`}
                >
                  VoD
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/live">
                <a
                  className={`h4 font-red-hat-display ${
                    router.pathname === "/dashboard/live"
                      ? "border-b-2 border-purple-600"
                      : ""
                  }`}
                  // onClick={() => {
                  //   mutate("api/get-customer")
                  // }}
                >
                  Live
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </Layout>
  )
}

export default DashLayout
