import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  if (req.method === "POST") {
    const { paymentMethodId, stripeId, stripeSubId } = req.body
    console.log(paymentMethodId, stripeId, stripeSubId)

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
            price: "price_1HqFJbE8j8J0kTAxMmMMcScf",
          },
        ],
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
