const apiURL = "http://localhost:1337"

const handler = async (req, res) => {
  const { name, email } = req.body
  console.log(name, email);

  const Name = name
  const Email = email

  const response = await fetch(`${apiURL}/digital-membership-forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name,
      Email,
    }),
  })
    .then(res => res.json())
    .catch(err => console.error(err))

  console.log("response =>", JSON.stringify(response))

  res.status(200)
   res.json(response)
}

export default handler