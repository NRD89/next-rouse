import { useStep } from "react-hooks-helper"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import DigiSignUp from "./DigiSignUp"
import DigitalStripeForm from "../components/DigitalStripeForm"

const steps = [{ id: "signup" }, { id: "stripe" }]

const DigitalCheckoutForm = () => {
  const stripePromise = loadStripe(
    "pk_test_51HCE5NE8j8J0kTAxXp4f6qvE6noE7u2jGO6gnPx1uPffvWPLeoKsWp16pipqRsnK84gX1jUDgGUCMJIrd2ohC41900nit2gxc9"
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
