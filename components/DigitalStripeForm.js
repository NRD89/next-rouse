import { useState, useContext, useEffect } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { AuthContext } from "../context/UserAuthContext"
import axios from "axios"
import { useRouter } from "next/router"
const API_URL = process.env.NEXT_PUBLIC_API_URL

const DigitalStripeForm = () => {
  console.log(API_URL)
  console.log(process.env.API_URL)
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const stripe = useStripe()
  const elements = useElements()

  const router = useRouter()

  useEffect(() => {
    router.prefetch("/dashboard")
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    await handleStripePaymentMethod(result)
    setLoading(false)
  }

  // const getNewUser = async () => {
  //   const token = Cookie.get("token")

  //   await fetch(`/api/get-customer`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ token }),
  //   }).then(async (res) => {
  //     // if res comes back not valid, token is not valid
  //     // delete the token and log the user out on client
  //     if (res.statusCode) {
  //       console.log(res)
  //       setUser(defaultValues.user)
  //       return null
  //     }
  //     const data = await res.json()
  //     console.log(data)
  //     setUser(data)
  //   })
  // }

  const handleStripePaymentMethod = async (result) => {
    if (result.error) {
      setError(result.error.message)
    } else {
      const response = await axios.post("/api/digital-sub-update", {
        paymentMethodId: result.paymentMethod.id,
        stripeId: user.stripeId,
        stripeSubId: user.stripeSubId,
      })

      const subscription = await response.data
      handleSubscription(subscription)
      console.log("subscrition =>", subscription)
    }
  }

  const handleSubscription = (subscription) => {
    const { latest_invoice } = subscription
    const { payment_intent } = latest_invoice

    if (payment_intent) {
      const { client_secret, status } = payment_intent

      if (status === "requires_action") {
        stripe.confirmCardPayment(client_secret).then(function (result) {
          if (result.error) {
            // The card was declined (i.e. insufficient funds, card has expired, etc)
            setError(result.error.message)
          } else {
            // Success!
            setSuccess("Successfully created a digitial membership!")
            setTimeout(() => {
              router.push("/dashboard")
            }, 2000)
          }
        })
      } else {
        // No additional information was needed
        setSuccess("Successfully created a digitial membership!")
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      }
    } else {
      console.log(`handleSubscription:: No payment information received!`)
    }
  }

  const cardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#5850ec",
        color: "rgba(0, 0, 0, 0.65)",
        fontWeight: 500,
        fontFamily: "Inter, Roboto, Open Sans, , sans-serif",
        fontSize: "15px",
        borderColor: "#d5d6d7",
        borderWidth: "1px",
        borderRadius: "0.25rem",
        paddingTop: "0.75rem",
        paddingRight: "1rem",
        paddingBottom: "0.75rem",
        paddingLeft: "1rem",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#bfbfbf" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  }

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        {error ? <p className="font-inter text-red-600">{error}</p> : null}

        {success ? (
          <p className="font-inter text-green-500">{success}</p>
        ) : null}
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label
              className="block text-gray-100 text-sm font-medium mb-1"
              htmlFor="card"
            >
              Card <span className="text-red-600">*</span>
            </label>
            <div className="border-gray-300 border rounded px-4 py-3">
              <CardElement options={cardOptions} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button
              type="submit"
              className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full"
            >
              {loading ? "Loading..." : "Complete Order"}
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center mt-3">
          By completing your order, you agree to the{" "}
          <a className="underline" href="#0">
            terms & conditions
          </a>
          , and our{" "}
          <a className="underline" href="#0">
            privacy policy
          </a>
          .
        </div>
      </form>
    </div>
  )
}

export default DigitalStripeForm
