import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { AnimatePresence, motion } from "framer-motion"

import DigiSignUp from "./DigiSignUp"
import DigitalStripeForm from "../components/DigitalStripeForm"

// const steps = [{ id: "signup" }, { id: "stripe" }]

const DigitalCheckoutForm = ({
  loginSuccess,
  setLoginSuccess,
  subscription,
  setSubscription,
}) => {
  const stripePromise = loadStripe(
    "pk_test_51HmVlAKDngAkWhrbmLBCk0bD0StnLNK7w5SzEHLozOqYdqk3jvx2wzA92HKki2D5Q4wyVrwLjotSHzSjZJFVmrJ20014yMxFtl"
  )
  // const MotionSignUp = motion.custom(DigiSignUp)
  // const { step, navigation } = useStep({ initialStep: 0, steps })
  // const { id } = step

  // const props = { navigation }

  return (
    <>
      <AnimatePresence>
        {!loginSuccess && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <DigiSignUp
              loginSuccess={loginSuccess}
              setLoginSuccess={setLoginSuccess}
            />
          </motion.div>
        )}
        {loginSuccess && (
          <motion.div
            animate={{
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <Elements stripe={stripePromise}>
              <DigitalStripeForm
                subscription={subscription}
                setSubscription={setSubscription}
              />
            </Elements>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default DigitalCheckoutForm
