const sgApiKey = process.env.SG_API_KEY
import { recaptchaAuth } from "./utils/recaptcha-auth"

const handler = async (req, res) => {
  const { email, honeyPot } = req.body
  const authRes = await recaptchaAuth({ honeyPot })
  console.log(email)

  if (authRes === "Success") {
    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sgApiKey}`,
        },
        body: JSON.stringify({
          list_ids: ["4e7772ba-3657-44c7-9c76-d61a1f9e8637"],
          contacts: [
            {
              email,
              custom_fields: {},
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err))

    console.log("response =>", JSON.stringify(response))

    if (response.job_id) {
      res.status(200)
      res.json(response)
    } else {
      res.status(400)
      res.json(response)
    }
  } else {
    res.status(400)
    res.json({ errors: { message: authRes } })
  }
}

export default handler
