import fetch from "node-fetch"
import Stripe from "stripe"
const apiURL = "http://localhost:1337"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
  const { username, email, password } = req.body
  console.log(username, email, password)

  const customer = await stripe.customers.create({
    email: email,
  })

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ plan: "price_1HDGyvE8j8J0kTAxg7ozCV1h" }],
  })

  const stripeId = customer.id
  const stripeSubId = subscription.id

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
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err))

  console.log("response =>", JSON.stringify(response))

  res.status(200)
  res.json(response)
}

export default handler
