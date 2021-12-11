import fetch from "node-fetch";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { id, event_id, regular_price, membership_price, email, name } =
    req.body;

  let lowercaseEmail = email.toLowerCase();

  const usersSubTier = await fetch("https://graphql.rouse.yoga/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: `
          query MyQuery($email: String) {
            users(where: {email: {_eq: $email}}) {
              sub_tier
            }
          }  
          `,
      variables: {
        email: lowercaseEmail,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(JSON.stringify(err, null, 2)));
  console.log("userHasClass =>", usersSubTier?.data?.users?.[0]);

  if (req.method === "POST" && regular_price > 0) {
    try {
      const payment = await stripe.paymentIntents.create({
        amount: !usersSubTier?.data?.users?.[0]
          ? regular_price
          : usersSubTier?.data?.users?.[0].sub_tier === "in-studio"
          ? membership_price
          : regular_price,
        currency: "USD",
        description: `${name} purchased event for ${event_id}.`,
        payment_method: id,
        receipt_email: lowercaseEmail,
        confirm: true,
      });
      console.log("Payment", payment);

      const mutations = [
        {
          create: {
            _type: "attendee",
            event: { _type: "reference", _ref: event_id },
            name: name,
            email: lowercaseEmail,
          },
        },
      ];

      const createAttendee = await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}`,
          },
          body: JSON.stringify({ mutations }),
        }
      )
        .then((response) => response.json())
        .then((result) => console.log("result =>", result))
        .catch((error) => console.error("error =>", error));
      console.log("createAttendee =>", createAttendee);

      res.json({
        message: "Payment successful",
        success: true,
      });
    } catch (error) {
      console.log("Error", error);
      res.json({
        message: "Payment failed",
        success: false,
      });
    }
  } else if (req.method === "POST" && regular_price === 0) {
    try {
      const mutations = [
        {
          create: {
            _type: "attendee",
            event: { _type: "reference", _ref: event_id },
            name: name,
            email: lowercaseEmail,
          },
        },
      ];

      const createAttendee = await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}`,
          },
          body: JSON.stringify({ mutations }),
        }
      )
        .then((response) => response.json())
        .then((result) => console.log("result =>", result))
        .catch((error) => console.error("error =>", error));
      console.log("createAttendee =>", createAttendee);

      res.json({
        message: "Reservation successful",
        success: true,
      });
    } catch (error) {
      console.log("Error", error);
      res.json({
        message: "Oops, reservation was not succesful",
        success: false,
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
