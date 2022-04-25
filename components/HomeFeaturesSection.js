/* This example requires Tailwind CSS v2.0+ */
import {
  PuzzleIcon,
  CalendarIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "18 Unique Classes",
    description:
      "We offer a variety of classes to choose from, whether you're looking for relaxing, fast past or combo classes we have the class for you!",
    icon: PuzzleIcon,
  },
  {
    name: "Instructor Autonomy",
    description:
      "Our instructors specialize in different types of yoga and teach what they're passionate about. Creativity thrives here!",
    icon: SparklesIcon,
  },
  {
    name: "Simple Pricing",
    description:
      "We offer simple price plans at affordable prices but do not lack in quality. No contracts and no fees.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Community Driven",
    description:
      "Looking for a judgment free yoga community? Rouse Yoga is the perfect place for you! We believe in expression, empowerment and togetherness.",
    icon: UserGroupIcon,
  },
  {
    name: "Monthly Events",
    description:
      "We don't just offer yoga classes, we host workshops and events throughout the month so you can learn, grow and dive deeper in your practice.",
    icon: CalendarIcon,
  },
  {
    name: "Yoga & Music Festivals",
    description:
      "Our rouse family hosts two amazing festivals that will leave you feeling refreshed and inspired. Join us for a weekend of fun and exploration!",
    icon: TicketIcon,
  },
];

export default function Example() {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-base font-semibold uppercase tracking-wider ">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 dark:from-blue-500 to-pink-600 dark:to-pink-500">Community Driven</span>
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Yoga Classes & Memberships for Riverside, CA
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We offer in-studio classes designed to bring
          variety and convenience to your yoga practice. You choose the class
          that’s right for you!
        </p>
        <div className="mt-12" data-aos-id-blocks>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className="pt-6"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                data-aos-delay={`${i}00`}
              >
                <div className="flow-root rounded-lg bg-gray-50 dark:bg-gray-900 px-6 pb-8 dark:bg-opacity-70">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 to-indigo-800 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
