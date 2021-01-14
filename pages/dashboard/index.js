import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/UserAuthContext"
import DashLayout from "../../components/DashLayout"
import useAuth from "../../hooks/useAuth"
import { MdOpenInNew } from "react-icons/md"
import DigitalModal from "../../components/DigitalModal"
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
        <h1 className="h1 font-red-hat-display">Loading...</h1>
      ) : (
        <section>
          <div
            className="col-span-12 h-full pb-12 md:col-span-10"
            data-aos="zoom-y-out"
          >
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold font-red-hat-display">
                    User Information
                  </h3>
                  <hr />
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl">Username</label>
                    <input
                      type="text"
                      value={userData.username}
                      className="form-input w-full"
                      disabled
                    />
                  </div>

                  <div className="form-item w-full">
                    <label className="text-xl">Email</label>
                    <input
                      type="text"
                      value={userData.email}
                      className="form-input w-full"
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
                  <h3 className="text-2xl font-semibold font-red-hat-display">
                    Subscription
                  </h3>
                  <hr />
                </div>

                <div className="form-item w-full" id="sub-update">
                  <label className="text-xl">Plan</label>
                  <input
                    type="text"
                    value={userData.subTier}
                    className="form-input w-full capitalize"
                    disabled
                  />
                </div>

                <div className="flex flex-wrap w-full justify-center mt-6">
                  <div className="px-3 w-full md:w-1/2">
                    {userData && userData.subTier === "digital" ? (
                      <button
                        onClick={redirectToManage}
                        className="btn text-white bg-purple-600 hover:bg-purple-500 w-full"
                      >
                        Update Subscription
                        <MdOpenInNew className="w-6 h-6 p-1" />
                      </button>
                    ) : (
                      <DigitalModal
                        buttonText="Start Free Trial"
                        btnWidth="full"
                      />
                    )}
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
