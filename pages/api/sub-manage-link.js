import Stripe from "stripe"
import { strapiFetchUser } from "./utils/strapi"
const returnURL = process.env.RETURN_URL || "http://localhost:3000"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
  const { token } = req.body

  const result = await strapiFetchUser({ token })

  const stripeID = result.stripeId

  const link = await stripe.billingPortal.sessions.create({
    customer: stripeID,
    return_url: returnURL,
  })

  res.status(200)
  res.json(JSON.stringify(link.url))
}

export default handler

// based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/functions/create-manage-link.js
