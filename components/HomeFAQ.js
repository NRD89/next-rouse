/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Do you offer classes for beginners?",
    answer:
      "Yes! We have a fundamentals of yoga class that is made for beginners.",
  },
  {
    question: "Are there any contracts or hidden fees?",
    answer:
      "There are no hidden fees or contracts, whether you are signing up for the first time or cancelling your membership. You will not be charged a sign up or a cancellation fee.",
  },
  {
    question: "Do I need to reserve a class before coming to the studio?",
    answer:
      "Yes, reserve your class before coming to the studio. We cannot guarantee a class spot for you. You are always welcome to walk in to a class, but in a case where a class is full, we recommend reserving online.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Our studio does not offer refunds; however, we have set up an easy to start and easy to end membership system where you are in complete control of your membership. You can stop and start your membership at your convenience.",
  },
  {
    question:
      "I want to cancel my membership. How many days before my bill date should I cancel?",
    answer:
      "If you are looking to cancel your membership, please cancel your membership at least 4 days before your billing date, so that you will not be charged for the next month.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-gray-800">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-800">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-150 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel
                        as="dd"
                        className="mt-2 pr-12"
                        unmount={false}
                      >
                        <p className="text-base text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
