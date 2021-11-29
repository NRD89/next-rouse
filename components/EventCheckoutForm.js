import { useState, useContext, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
// import { useSession } from "next-auth/client";
// import { mutate } from "swr";
// import { GraphQLClient } from "graphql-request";

const CheckoutForm = ({ regular_price, membership_price, event_id }) => {
  //   const [session] = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { theme } = useTheme();
  const subscription = "monthly";

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // update the local data immediately, but disable the revalidation
    // mutate(
    //   ["https://graphql.rouse.yoga/api/rest/class-count", session?.token],
    //   async (usersClass) => {
    //     console.log("usersClass mutate =>",usersClass);
    //     return {
    //       classes: [
    //         { class_user_aggregate: { aggregate: { count: ...newCount } } },
    //         ...usersClass.classes,
    //       ],
    //     };
    //   },
    //   false
    // );
    await handleStripePaymentMethod(result);
    setLoading(false);
  };

  const handleStripePaymentMethod = async (result) => {
    if (!result.error) {
      try {
        const { id } = result.paymentMethod;
        const response = await axios.post("/api/event_payments", {
          id,
          event_id,
          regular_price,
          membership_price,
          email,
          name,
        });
        console.log("response =>", response.data);

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        } else {
          setError(true);
        }
      } catch (error) {
        console.log("Error", error);
        setError("Oops, something went wrong. Please try again.");
      }
    } else {
      console.log(error);
      setError("Oops, something went wrong. Please try again.");
    }
  };

  const isDarkMode = () => {
    if (theme === "dark") {
      return true;
    }
    return false;
  };

  console.log("isDarkMode =>", isDarkMode());

  const darkCardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "rgb(93, 93, 255)",
        color: `rgb(212, 212, 216)`,
        fontWeight: 500,
        fontSize: "16px",
        borderColor: "rgb(212, 212, 216)",
        borderWidth: "1px",
        borderRadius: "0.25rem",
        backgroundColor: "transparent",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#bfbfbf" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const lightCardOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "rgb(93, 93, 255)",
        color: isDarkMode() ? "rgb(0, 0, 0)" : "rgb(212, 212, 216)",
        fontWeight: 500,
        fontSize: "16px",
        borderColor: "#000",
        borderWidth: "1px",
        borderRadius: "0.25rem",

        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: isDarkMode() ? "#bfbfbf" : "#000" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        {error ? <p className="text-red-600">{error}</p> : null}

        {success ? (
          <p className="text-center text-xl leading-8">
            <span className="font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-l from-purple-700 via-pink-600 to-purple-700 mb-4">Thank you for purchasing!</span><br />
            Check your email for receipt.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap w-full">
              <div className="w-full">
                <label
                  className="block text-gray-400 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  id="coupon"
                  type="text"
                  placeholder="email@email.com"
                  className="form-input w-full"
                  required
                />
                <div className="text-gray-600 dark:text-gray-400 font-medium w-100 text-center mt-1">
                  <small>
                    Use membership email address to get membership price.
                  </small>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full mb-2">
              <div className="w-full">
                <label
                  className="block text-gray-400 text-sm font-medium mb-1"
                  htmlFor="coupon"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  id="coupon"
                  type="text"
                  placeholder="Rouse Yoga"
                  className="form-input w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 pb-3">
                <label
                  className="block text-gray-400 text-sm font-medium mb-1"
                  htmlFor="card"
                >
                  Card <span className="text-red-600">*</span>
                </label>
                <div className="border-gray-700 dark:border-gray-300 border rounded px-4 py-3 bg-transparent">
                  <CardElement options={lightCardOptions} />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-3">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className={
                    `w-full 
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    uppercase
                    text-center text-white tracking-wider hover:tracking-widest
                    transition-all
                    duration-500
                    ease-in-out
                    transform
                    shadow-md
                    rounded-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    border border-solid border-white 
                    bg-gradient-to-l from-blue-600 via-blue-400 to-blue-600 
                    bg-size-200 bg-pos-0 hover:bg-pos-100
                    ${loading ? "pointer-events-none" : null}`
                  }
                  disabled={loading}
                >
                  {loading ? (
                    <span className="animate-pulse">Loading...</span>
                  ) : (
                    "Purchase Event"
                  )}
                </button>
              </div>
            </div>
            <div className="text-xs text-center text-gray-700 dark:text-gray-400 mt-3">
              By purchasing, you agree to the{" "}
              <a
                href="https://rouse.yoga/terms-and-conditions"
                className="underline"
              >
                terms & conditions
              </a>
              ,{" "}
              <a href="https://rouse.yoga/privacy-policy" className="underline">
                privacy policy
              </a>{" "}
              and our{" "}
              <a
                href="https://rouse.yoga/liability-waiver"
                className="underline"
              >
                liability waiver
              </a>
              .
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
