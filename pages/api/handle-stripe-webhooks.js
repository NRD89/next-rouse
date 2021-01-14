import fetch from "node-fetch"
import Stripe from "stripe"
import getRawBody from "raw-body"
const apiURL = process.env.API_URL
// const JWT = process.env.STRAPI_ADMIN_JWT
const identifier = process.env.ADMIN_IDENTIFIER
const password = process.env.ADMIN_PASSWORD

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const rawBody = await getRawBody(req)
    const sig = req.headers["stripe-signature"]

    let event

    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    if (event.type === "customer.subscription.updated") {
      const fetchAdmin = await fetch(`${apiURL}/auth/local/`, {
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

      const subscription = event.data.object

      const stripeID = subscription.customer
      const subTier = subscription.items.data[0].plan.metadata.subTier
      console.log("subTier =>", subTier)
      console.log("stripeID =>", stripeID)

      const strapiData = await fetch(`${apiURL}/users?stripeId=${stripeID}`, {
        headers: {
          Authorization: `Bearer ${fetchAdmin.jwt}`,
        },
      })
        .then((res) => res.json())
        .catch((err) => console.error(JSON.stringify(err, null, 2)))
      console.log("strapiData =>", strapiData)

      const response = await fetch(`${apiURL}/users/${strapiData[0].id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${fetchAdmin.jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subTier,
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.error(JSON.stringify(err, null, 2)))

      console.log(JSON.stringify(response, null, 2))
    } else if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object

      const stripeID = subscription.customer

      const strapiData = await fetch(`${apiURL}/users?stripeId=${stripeID}`, {
        headers: {
          Authorization: `Bearer ${fetchAdmin.jwt}`,
        },
      })
        .then((res) => res.json())
        .catch((err) => console.error(JSON.stringify(err, null, 2)))
      console.log(strapiData)

      const response = await fetch(`${apiURL}/users/${strapiData[0].id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${fetchAdmin.jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subTier: "canceled",
        }),
      })
        .then((res) => res.json())
        .catch((err) => console.error(JSON.stringify(err, null, 2)))

      console.log(JSON.stringify(response, null, 2))
    }

    res.json({ received: true })
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }

  // const buf = await buffer(req)
  // console.log(buf)
  // try {

  //   const stripeEvent = stripe.webhooks.constructEvent(
  //     buf,
  //     req.headers["stripe-signature"],
  //     process.env.STRIPE_WEBHOOK_SECRET
  //   )

  //   if (stripeEvent.type === "customer.subscription.updated") {
  //     const subscription = stripeEvent.data.object

  //     const stripeID = subscription.customer
  //     const subTier = subscription.items.data[0].plan.metadata.subTier
  //     console.log(subTier);

  //     const strapiData = await fetch(`${apiURL}/users?stripeId=${stripeID}`, {
  //       headers: {
  //         Authorization: `Bearer ${JWT}`,
  //       },
  //     })
  //       .then(res => res.json())
  //       .catch(err => console.error(JSON.stringify(err, null, 2)))

  //     const response = await fetch(`${apiURL}/users/${strapiData[0].id}`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${JWT}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         subTier,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .catch(err => console.error(JSON.stringify(err, null, 2)))

  //     console.log(JSON.stringify(response, null, 2))
  //   }

  //  res.json({ received: true })
  // } catch (err) {
  //   console.log(`Stripe webhook failed with ${err}`)

  //   res.status(400).send(`Webhook Error: ${err.message}`)
  // }
}

export default handler

// based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/functions/handle-webhooks.js
