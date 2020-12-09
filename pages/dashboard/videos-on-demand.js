import { useEffect } from "react"
import DashLayout from "../../components/DashLayout"
import useAuth from "../../hooks/useAuth"

const videosOnDemand = () => {
  const { data: userData, loading, error, mutate } = useAuth()
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    } else if ((userData && !userData.username) || error) {
      window.location.href = "/login"
    }
  }, [userData, error])
  return (
    <DashLayout>
      {loading ? (
        <h1 className="h2 text-blue-500">Loading...</h1>
      ) : (
        <div className="flex w-full justify-center">
          <h1 className="h2 text-blue-500 pt-10">Coming Soon!</h1>
        </div>
      )}
    </DashLayout>
  )
}

export default videosOnDemand
