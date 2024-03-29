import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import EventCheckoutForm from "./EventCheckoutForm";
import { formatPrice } from "../lib/misc";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const EventPaymentModal = ({
  regular_price,
  membership_price,
  coupon_codes,
  id,
  eventTitle,
  eventDateTime,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  console.log("format price =>", eventTitle, eventDateTime);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="mt-8">
        <button
          onClick={openModal}
          className="
            sm:w-1/2
            md:w-full
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
          "
          //   disabled={userCount >= 25 ? true : false}
        >
          {/* {userCount >= 25 ? "Class filled" : "Buy Class"} */}
          Reserve Spot
        </button>
      </div>

      <Transition
        appear
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md px-6 pt-10 pb-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-gradient-to-bl from-white via-gray-200 to-white text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 rounded-xl focus:outline-none border border-gray-500 dark:border-gray-700 shadow-xl">
                <button
                  type="button"
                  className="absolute right-2 top-2 inline-flex justify-center p-1 text-xs font-bold text-red-600 dark:text-red-500 bg-transparent border border-transparent rounded-md hover:text-red-700 dark:hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <Dialog.Title
                  as="p"
                  className="text-xl text-center font-medium leading-6 text-gray-900 dark:text-gray-100 mb-4"
                >
                  Membership Price:{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 via-blue-500 to-purple-700 font-bold">
                    <span className="line-through text-red-400">
                      {formatPrice(regular_price)}
                    </span>{" "}
                    {formatPrice(membership_price)}
                  </span>
                  <br />
                  Regular Price:{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-700 via-blue-500 to-purple-700 font-bold">
                    {formatPrice(regular_price)}
                  </span>
                </Dialog.Title>
                <Elements stripe={stripePromise}>
                  <EventCheckoutForm
                    regular_price={regular_price}
                    membership_price={membership_price}
                    coupon_codes={coupon_codes}
                    event_id={id}
                    event_title={eventTitle}
                    event_date_time={eventDateTime}
                  />
                </Elements>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EventPaymentModal;
