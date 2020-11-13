import { strapiFetchUser } from "./utils/strapi"

const handler = async (req, res) => {
  const { token } = req.body

  const response = await strapiFetchUser({ token })

  console.log("response =>", JSON.stringify(response))

  res.status(200)
  res.json(response)
}

export default handler
