import Stripe from "stripe"
const returnURL = process.env.RETURN_URL || "http://localhost:3000"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    payment_method_types: ['card', 'klarna'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Rouse Yoga Teacher Training',
        },
        unit_amount: 270000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: returnURL,
    cancel_url: returnURL,
  });

  res.status(200)
  res.json(JSON.stringify(session.url))
}

export default handler

// based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/functions/create-manage-link.js
