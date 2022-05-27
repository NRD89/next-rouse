import Stripe from "stripe";
const returnURL = process.env.RETURN_URL || "http://localhost:3000";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  const coupon = await stripe.coupons.create({
    duration: "once",
    amount_off: 20000,
    currency: "usd",
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // payment_method_types: ["card", "klarna", "affirm"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Rouse Yoga Teacher Training",
          },
          unit_amount: 270000,
        },
        quantity: 1,
      },
    ],
    discounts: [{ coupon: coupon.id }],
    mode: "payment",
    shipping_address_collection: {
      // Specify which shipping countries Checkout should provide as options for shipping locations
      allowed_countries: ["US"],
    },
    success_url: returnURL,
    cancel_url: returnURL,
  });

  res.status(200);
  res.json(JSON.stringify(session.url));
};

export default handler;

// based on https://github.com/jlengstorf/jamstack-subscriptions/blob/master/functions/create-manage-link.js
