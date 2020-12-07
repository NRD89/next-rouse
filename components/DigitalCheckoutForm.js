import { useStep } from "react-hooks-helper"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import DigiSignUp from "./DigiSignUp"
import DigitalStripeForm from "../components/DigitalStripeForm"

const steps = [{ id: "signup" }, { id: "stripe" }]

const DigitalCheckoutForm = () => {
  const stripePromise = loadStripe(
    "pk_live_51HmVlAKDngAkWhrbaPtjo45CeyyoqOCuQ9x1MrUeDZG3vWAl7YCpIHpBkhr6HYSBP2ZC79Wbz6EivBgWkuTEuILX00SVcxm9F0"
  )
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { navigation }

  switch (id) {
    case "signup":
      return <DigiSignUp {...props} />
    case "stripe":
      return (
        <Elements stripe={stripePromise}>
          <DigitalStripeForm {...props} />
        </Elements>
      )
    default:
      return null
  }
}

export default DigitalCheckoutForm
