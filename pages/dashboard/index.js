import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/UserAuthContext"
import DashLayout from "../../components/DashLayout"
import useAuth from "../../hooks/useAuth"
import { MdOpenInNew } from "react-icons/md"
import RequestPasswordReset from "../../components/RequestPasswordReset"

const dashboard = () => {
  const { isAuthenticated, user, setUser, redirectToManage } = useContext(
    AuthContext
  )
  const { data: userData, loading, error, mutate } = useAuth()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if ((userData && !userData.email) || error) {
      window.location.href = "/login"
    }
  }, [userData, error])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if (userData && userData.subTier) {
      setUser({ ...user, subTier: userData.subTier })
    }
  }, [userData])

  return (
    <DashLayout>
      {!isAuthenticated || loading ? (
        <h1 className="h1 text-blue-500">Loading...</h1>
      ) : (
        <section>
          <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-200">
                    User Information
                  </h3>
                  <hr />
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl text-gray-200">Username</label>
                    <input
                      type="text"
                      value={userData.username}
                      className="form-input w-full text-gray-800"
                      disabled
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl text-gray-200">Email</label>
                    <input
                      type="text"
                      value={userData.email}
                      className="form-input w-full text-gray-800"
                      disabled
                    />
                  </div>
                </div>

                {/* <div>
                  <h3 className="text-2xl font-semibold text-gray-200">
                    Update Password
                  </h3>
                  <hr />
                </div>

                <RequestPasswordReset /> */}

                <div>
                  <h3 className="text-2xl font-semibold text-gray-200">
                    Subscription
                  </h3>
                  <hr />
                </div>

                <div className="form-item w-full" id="sub-update">
                  <label className="text-xl text-gray-200">Plan</label>
                  <input
                    type="text"
                    value={userData.subTier}
                    className="form-input w-full text-gray-800 capitalize"
                    disabled
                  />
                </div>

                <div className="flex flex-wrap w-full justify-center mt-6">
                  <div className="px-3 w-full md:w-1/2">
                    <button
                      onClick={redirectToManage}
                      className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                    >
                      {userData && userData.subTier !== "digital"
                        ? "Go Digital"
                        : "Update Subscription"}
                      <MdOpenInNew className="w-6 h-6 p-1" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </DashLayout>
  )
}

export default dashboard
