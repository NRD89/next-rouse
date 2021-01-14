import { useState, useContext, useEffect } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { AuthContext } from "../context/UserAuthContext"
import axios from "axios"
import Cookie from "js-cookie"
import { useRouter } from "next/router"
import Link from "next/link"
import { useTheme } from "next-themes"
const API_URL = process.env.NEXT_PUBLIC_API_URL

const DigitalStripeForm = ({ subscription, setSubscription }) => {
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const token = Cookie.get("token")
  const { theme } = useTheme()

  const stripe = useStripe()
  const elements = useElements()

  const router = useRouter()

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
        token,
        subscription,
      })

      const sub = await response.data
      handleSubscription(sub)
      console.log("sub =>", sub)
    }
  }

  const handleSubscription = (sub) => {
    const { latest_invoice, status } = sub
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
    } else if (status === "trialing") {
      // No additional information was needed
      setSuccess("Successfully created a digitial membership!")
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } else {
      console.log(`handleSubscription:: No payment information received!`)
    }
  }

  const cardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "rgb(93, 93, 255)",
        color: `${theme === "dark" ? `rgb(212, 212, 216)` : `rgb(63, 63, 69)`}`,
        fontWeight: 500,
        fontFamily: "Inter, Roboto, Open Sans, , sans-serif",
        fontSize: "15px",
        borderColor: "rgb(212, 212, 216)",
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
          {/* Pricing toggle */}
          <div
            className="flex justify-center w-full m-auto mx-3 my-6"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="relative flex w-full p-1 bg-gray-200 dark:bg-gray-600 rounded">
              <span
                className="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-0 w-1/2 bg-white dark:bg-gray-800 rounded shadow transform transition duration-150 ease-in-out ${
                    subscription === "yearly"
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                  subscription === "monthly" &&
                  "text-gray-500 dark:text-gray-400"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setSubscription("yearly")
                }}
              >
                Bill Yearly <span className="text-purple-500">-63%</span>
              </button>
              <button
                className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${
                  subscription === "yearly" &&
                  "text-gray-500 dark:text-gray-400"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setSubscription("monthly")
                }}
              >
                Bill Monthly
              </button>
            </div>
          </div>

          <div className="w-full px-3">
            <label
              className="block text-gray-600 dark:text-gray-400 text-sm font-medium mb-1"
              htmlFor="card"
            >
              Card <span className="text-red-600">*</span>
            </label>
            <div className="border-gray-300 border rounded px-4 py-3">
              <CardElement options={cardOptions} />
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Your subscription will automatically renew after your 7 day trial
          period and be charged{" "}
          {subscription === "yearly" ? `$199.99` : `$19.99`} {subscription}. To
          avoid charges update subscription to free or cancel in your
          dashboard's profile section before the trial period ends.
        </div>
        <div className="flex flex-wrap -mx-3 mt-3">
          <div className="w-full px-3">
            <button
              type="submit"
              className="btn text-white bg-purple-600 hover:bg-purple-500 w-full"
            >
              {loading ? "Loading..." : "Start Free Trial"}
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-3">
          By starting your free trial, you agree to the{" "}
          <Link href="/terms-and-conditions">
            <a className="underline">terms & conditions</a>
          </Link>
          ,{" "}
          <Link href="/privacy-policy">
            <a className="underline">privacy policy</a>
          </Link>{" "}
          and our{" "}
          <Link href="/liability-waiver">
            <a className="underline">liability waiver</a>
          </Link>
          .
        </div>
      </form>
    </div>
  )
}

export default DigitalStripeForm
