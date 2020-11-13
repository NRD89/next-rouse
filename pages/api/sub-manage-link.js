const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { strapiFetchUser } = require("./utils/strapi")
const returnURL = process.env.URL || "http://localhost:8888"

exports.handler = async event => {
  const { token } = JSON.parse(event.body)

  const result = await strapiFetchUser({ token })

  const stripeID = result.stripeId

  const link = await stripe.billingPortal.sessions.create({
    customer: stripeID,
    return_url: returnURL,
  })

  return {
    statusCode: 200,
    body: JSON.stringify(link.url),
  }
}

// based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/functions/create-manage-link.js
