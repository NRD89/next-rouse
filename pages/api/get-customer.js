const apiURL = "http://localhost:1337"

const handler = async (req, res) => {
  const { token } = req.body

  const response = await fetch(`${apiURL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  if (response.statusCode) {
    res.status(401).json(response.message)
  } else {
    res.status(200).json(response)
  }
}

export default handler
