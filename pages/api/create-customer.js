import fetch from "node-fetch"
import Stripe from "stripe"
const apiURL = process.env.API_URL

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
  const { username, email, password } = req.body
  console.log(username, email, password)

  const customer = await stripe.customers.create({
    email: email,
  })

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: process.env.FREE_PRICE }],
  })

  const stripeId = customer.id
  const stripeSubId = subscription.id
  const subTier = "free"

  const response = await fetch(`${apiURL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      stripeId,
      stripeSubId,
      subTier,
      hasHadTrial: false
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))

  console.log("response =>", JSON.stringify(response))

  res.status(200)
  res.json(response)
}

export default handler
