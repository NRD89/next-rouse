import { useRouter } from "next/router"
import Layout from "../components/Layout"

const resetPassword = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
      <h1 className="h1 text-gray-100">Rest Password</h1>
    </Layout>
  )
}

export default resetPassword
