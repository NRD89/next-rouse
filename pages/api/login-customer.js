const fetch = require("node-fetch")
const apiURL = "http://localhost:1337"
// process.env.GATSBY_API_URL ||

export default async (req, res) => {
  const { identifier, password } = JSON.parse(req.body)

  console.log("email and password =>", identifier, password)

  const response = await fetch(`${apiURL}/auth/local/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(JSON.stringify(err, null, 2)))

  console.log("response =>", JSON.stringify(response))

  res.status(200)
  res.json(response)
}
