import Stripe from "stripe"
import { strapiFetchUser } from "./utils/strapi"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  if (req.method === "POST") {
    const { paymentMethodId, token, subscription } = req.body
    console.log(paymentMethodId, token)

    const strapiUser = await strapiFetchUser({ token })
    const stripeId = strapiUser.stripeId
    const stripeSubId = strapiUser.stripeSubId
    let subBillPeriod = null
    let newTime = Date.now() + 604800000
    let trialEndTime = Math.floor(newTime / 1000)

    if (subscription === "yearly") {
      subBillPeriod = process.env.DIGITAL_PRICE_YEARLY
    } else {
      subBillPeriod = process.env.DIGITAL_PRICE_MONTHLY
    }

    try {
      // const customer = await stripe.customers.update(stripeId, {
      //   invoice_settings: {
      //     default_payment_method: paymentMethodId,
      //   },
      // })
      // console.log(
      //   `create-customer:: Successfully created customer: ${JSON.stringify(
      //     customer
      //   )}`
      // )
      const newPaymentMethodId = await stripe.paymentMethods.attach(
        paymentMethodId,
        { customer: stripeId }
      )
      console.log(
        `attached-payment:: Successfully created customer: ${JSON.stringify(
          newPaymentMethodId
        )}`
      )

      const retrieveSub = await stripe.subscriptions.retrieve(stripeSubId)
      const subscription = await stripe.subscriptions.update(stripeSubId, {
        default_payment_method: newPaymentMethodId.id,
        cancel_at_period_end: false,
        proration_behavior: "create_prorations",
        items: [
          {
            id: retrieveSub.items.data[0].id,
            price: subBillPeriod,
          },
        ],
        trial_end: trialEndTime,
        expand: ["latest_invoice.payment_intent"],
      })

      console.log(
        `create-customer:: Successfully created subscription: ${JSON.stringify(
          subscription
        )}`
      )
      res.status(200).json(subscription)
    } catch (e) {
      console.log(`create-customer:: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
