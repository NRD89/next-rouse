import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { FaYelp } from "react-icons/fa"
import ReCAPTCHA from "react-google-recaptcha"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const reRef = useRef()

  const { theme } = useTheme()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)

    const token = await reRef.current.executeAsync()
    reRef.current.reset()

    const response = await fetch("/api/sg-newsletter-contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        token,
      }),
    })

    const data = await response.json()

    if (data.errors) {
      setError(data.errors.message)
    } else {
      setSuccess(true)
      console.log("successfully submitted to email list")
    }

    setSubmitting(false)
  }

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t  border-gray-200 dark:border-gray-600">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2 max-w-logo">
              {/* Logo */}
              <Link href="/" aria-label="Home">
                <a className="text-gray-900 dark:text-gray-100">
                  <svg
                    className="fill-current"
                    // width="351"
                    // height="69"
                    viewBox="0 0 351 69"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M51.3955 14.6613C40.4823 14.6613 31.6354 23.5077 31.6354 34.4204C31.6354 45.3331 40.4823 54.1795 51.3955 54.1795C62.3087 54.1795 71.1557 45.3331 71.1557 34.4204C71.1557 23.5077 62.3087 14.6613 51.3955 14.6613ZM31.3096 34.4204C31.3096 23.3278 40.3024 14.3354 51.3955 14.3354C62.4887 14.3354 71.4815 23.3278 71.4815 34.4204C71.4815 45.513 62.4887 54.5054 51.3955 54.5054C40.3024 54.5054 31.3096 45.513 31.3096 34.4204ZM51.4116 15.2187L51.5935 15.4534L54.8771 19.7205H63.2742L59.4146 25.1166H65.4949L65.263 25.4669L62.6517 29.4348H70.0442L66.1932 34.4258L70.0754 39.4708H62.7003L65.465 43.6718H59.4012L63.2735 49.1038H54.8678L51.3807 53.6232L51.1993 53.3892L47.8927 49.1038H39.5837L43.4561 43.6718H37.3617L37.5881 43.3225L40.123 39.4708H32.7487L36.5993 34.467L32.7165 29.4348H40.1721L37.3302 25.1166H43.4435L39.583 19.7205H47.9473L51.4116 15.2187ZM47.598 20.1745H40.4827L43.9107 24.9659L47.598 20.1745ZM43.4476 25.5678H38.1676L40.6016 29.2661L43.4476 25.5678ZM40.1203 29.8915H33.6468L36.8879 34.0921L40.1203 29.8915ZM36.8866 34.8393L33.6781 39.0071H40.1024L36.8866 34.8393ZM40.57 39.6132L38.1952 43.2206H43.3534L40.57 39.6132ZM43.8741 43.8955L40.482 48.6553H47.5467L43.8741 43.8955ZM48.4704 49.1038L51.3804 52.8752L54.2901 49.1038H48.4704ZM55.2139 48.6553H62.3752L58.9367 43.8304L55.2139 48.6553ZM59.4072 43.2206H64.6289L62.2249 39.5688L59.4072 43.2206ZM62.6583 39.0071H69.1448L65.9066 34.7972L62.6583 39.0071ZM65.9041 34.0502L69.1126 29.8915H62.7039L65.9041 34.0502ZM62.2226 29.266L64.6565 25.5678H59.3768L62.2226 29.266ZM58.9311 24.9887L62.3745 20.1745H55.2265L58.9311 24.9887ZM48.1759 20.1745L44.3714 25.1166H49.5699L51.4121 22.3175L53.2541 25.1166H58.4605L54.6592 20.1745H48.1759ZM54.31 19.7205H48.5254L51.4189 15.9618L54.31 19.7205ZM37.1752 34.4644L40.5442 38.8308L43.45 34.4155L40.5754 30.0475L37.1752 34.4644ZM48.1244 48.6553H54.6361L58.4809 43.6718H53.2823L51.4121 46.5137L49.5418 43.6718H44.2793L48.1244 48.6553ZM65.6176 34.4215L62.2507 30.0441L59.3737 34.4158L62.25 38.7865L65.6176 34.4215ZM43.8904 25.7413L41.0471 29.4348H46.5328L43.8904 25.7413ZM41.0132 29.8915L43.7203 34.0048L46.4274 29.8915H41.0132ZM41.0379 39.4708L43.8514 43.1173L46.451 39.4708H41.0379ZM58.9592 43.0519L61.722 39.4708H56.4062L58.9592 43.0519ZM61.782 29.4348L58.9549 25.7593L56.326 29.4348H61.782ZM58.5169 25.5678H53.551L55.9306 29.1837L58.5169 25.5678ZM52.7112 25.1166L51.4121 23.143L50.1129 25.1166H52.7112ZM49.2729 25.5678H44.3413L46.91 29.1582L49.2729 25.5678ZM43.7207 34.8268L40.9689 39.0071H46.4719L43.7207 34.8268ZM44.3551 43.2206H49.2448L46.8973 39.6535L44.3551 43.2206ZM50.0824 43.6718L51.4121 45.6922L52.7417 43.6718H50.0824ZM53.5792 43.2206H58.5021L55.9427 39.6293L53.5792 43.2206ZM61.8552 39.0071L59.1033 34.8267L56.3521 39.0071H61.8552ZM59.1036 34.0053L61.811 29.8915H56.3964L59.1036 34.0053ZM46.9169 29.9716L43.991 34.4162L46.9016 38.8387L50.0755 34.3866L46.9169 29.9716ZM55.5538 29.4348L53.0083 25.5678H49.8159L47.2703 29.4348H55.5538ZM47.3176 39.4708L49.7854 43.2206H53.0387L55.5066 39.4708H47.3176ZM55.9384 38.8146L58.8331 34.4162L55.9239 29.9969L52.783 34.3883L55.9384 38.8146ZM50.3637 34.7895L47.3579 39.0071H55.4993L52.4948 34.7912L51.43 36.2799L50.3637 34.7895ZM47.4347 29.8915L50.3625 33.9839L51.4286 32.4885L52.4959 33.9857L55.4243 29.8915H47.4347ZM52.2078 34.3885L51.4286 33.2952L50.6507 34.3867L51.43 35.476L52.2078 34.3885Z"
                      className="stroke-current"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M201.807 66.2601H197.89L174.694 0.669922H180.282L180.958 2.58106H179.287L201.807 66.2601ZM203.478 66.2601H201.807L202.483 68.1712H208.072L184.876 2.58106H180.958L203.478 66.2601Z"
                    />
                    <path d="M210.102 53.7482H214.507V36.6848L227.61 15.0934H222.38L212.36 32.2671H212.029L202.009 15.0934H196.999L210.102 36.6848V53.7482Z" />
                    <path d="M248.844 54.466C260.076 54.466 268.555 45.7963 268.555 34.4208C268.555 23.1556 260.131 14.3755 248.899 14.3755C237.723 14.3755 229.244 23.0452 229.244 34.4208C229.244 45.9068 237.668 54.466 248.844 54.466ZM248.899 50.2692C240.365 50.2692 233.869 43.5875 233.869 34.4208C233.869 25.3645 240.365 18.5723 248.899 18.5723C257.433 18.5723 263.93 25.3645 263.93 34.4208C263.93 43.5875 257.433 50.2692 248.899 50.2692Z" />
                    <path d="M293.686 54.466C302.44 54.466 311.029 49.5513 312.791 35.6356H295.723V39.5563H307.505C305.578 47.2873 299.687 50.2692 293.741 50.2692C285.207 50.2692 278.71 43.5875 278.71 34.4208C278.71 25.3645 285.097 18.5723 293.631 18.5723C299.577 18.5723 304.477 21.8856 306.514 26.9107H311.469C308.937 19.6215 302.22 14.3755 293.631 14.3755C282.454 14.3755 274.085 23.0452 274.085 34.4208C274.085 45.9068 282.509 54.466 293.686 54.466Z" />
                    <path d="M345.781 53.7482H350.461L336.257 15.0934H329.925L315.555 53.7482H320.235L323.593 44.5814H342.423L345.781 53.7482ZM325.08 40.4951L332.843 19.1797H333.173L340.936 40.4951H325.08Z" />
                    <path d="M0.461426 53.7482H4.92477V38.1206H11.4269L21.07 53.7482H26.4701L16.1107 37.734C22.1169 36.6296 25.2578 32.1015 25.2578 26.3585C25.2578 19.6215 20.574 15.0934 12.6943 15.0934H0.461426V53.7482ZM4.92477 34.1447V19.0693H12.4188C17.874 19.0693 20.6291 22.3273 20.6291 26.4137C20.6291 31.494 17.2128 34.1447 12.6943 34.1447H4.92477Z" />
                    <path d="M92.911 54.466C102.058 54.466 107.293 48.5574 107.293 39.8324V15.0934H102.885V39.7772C102.885 46.2381 99.4132 50.3244 92.911 50.3244C86.4088 50.3244 82.9925 46.2381 82.9925 39.8324V15.0934H78.5291V39.8876C78.5291 48.6678 83.6537 54.466 92.911 54.466Z" />
                    <path d="M128.516 54.466C136.947 54.466 141.906 49.6066 141.906 43.5322C141.906 27.9047 120.526 35.2491 120.526 24.7018C120.526 21.499 122.895 18.4619 128.35 18.4619C133.585 18.4619 136.506 21.1677 136.506 25.5854H141.079C141.079 17.5783 134.246 14.3755 128.406 14.3755C120.636 14.3755 116.062 19.1797 116.062 24.7018C116.062 40.1638 137.387 31.7149 137.387 43.8084C137.387 47.8395 133.751 50.3244 128.681 50.3244C122.84 50.3244 119.203 46.7351 119.203 42.2622H114.74C114.74 49.4409 120.856 54.466 128.516 54.466Z" />
                    <path d="M150.165 53.7482H172.757V49.717H154.629V36.0774H169.727V32.0462H154.629V19.1797H172.151V15.0934H150.165V53.7482Z" />
                  </svg>
                </a>
              </Link>
            </div>
            <div className="text-sm">
              <Link href="/terms-and-conditions">
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Terms
                </a>
              </Link>{" "}
              ·{" "}
              <Link href="/privacy-policy">
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Web Studio
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  DynamicBox Flex
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Programming Forms
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Integrations
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Command-line
                  </a>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3 ">
            <h6 className="font-medium mb-2">Contact</h6>
            <ul className="text-sm">
              {/* <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Contact
                  </a>
                </Link>
              </li> */}
              <li className="mb-2">
                <a
                  href="mailto:support@rouse.yoga"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out"
                >
                  support@rouse.yoga
                </a>
              </li>
              {/* <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Blog
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Support Center
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  
                >
                <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                  Partners
                  </a>
                </Link> 
              </li> */}
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3 ">
            <h6 className="font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              {/* <li className="mb-2">
                <Link href="/">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                    Home
                  </a>
                </Link>
              </li> */}
              <li className="mb-2">
                <Link href="/about">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                    About Rouse Yoga
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/roadmap">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                    Roadmap
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/instructors">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                    Instructors
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/classes">
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-150 ease-in-out">
                    Classes
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3 ">
            <h6 className="font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              There's so much more to come,
              <br />
              subscribe and stay informed.
            </p>
            <form onSubmit={handleSubmit}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={reRef}
              />
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      value={email}
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                      data-badge="inline"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300 dark:bg-gray-500"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-4 h-4 fill-current text-purple-600 mx-3 flex-shrink-0 hover:text-purple-500"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {success && (
                    <p className="mt-2 text-green-600 text-sm">
                      Thanks for subscribing!
                    </p>
                  )}
                  {/* Error message */}
                  {error && (
                    <p className="mt-2 text-red-600 text-sm">{error}</p>
                  )}
                  <div className="pt-4 max-w-prose">
                    <small className="small text-gray-600 dark:text-gray-400 ">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a
                        className="underline"
                        href="https://policies.google.com/privacy"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        className="underline"
                        href="https://policies.google.com/terms"
                      >
                        Terms of Service
                      </a>{" "}
                      apply.
                    </small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-600">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.yelp.com/biz/rouse-yoga-riverside"
                className="flex justify-center items-center text-purple-600 hover:text-purple-700 dark:hover:text-purple-500 bg-white dark:bg-gray-800 hover:bg-gray-50 rounded-full shadow transition duration-150 ease-in-out w-8 h-8"
              >
                <FaYelp className="w-4 h-4" />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.instagram.com/rouse_yoga"
                className="flex justify-center items-center text-purple-600 hover:text-purple-700 dark:hover:text-purple-500 bg-white dark:bg-gray-800 hover:bg-gray-50 rounded-full shadow transition duration-150 ease-in-out w-8 h-8"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 3.15451C20.272 3.15451 20.7787 3.17051 22.4667 3.24784C26.8027 3.44517 28.828 5.50251 29.0253 9.80651C29.1027 11.4932 29.1173 11.9998 29.1173 16.2718C29.1173 20.5452 29.1013 21.0505 29.0253 22.7372C28.8267 27.0372 26.8067 29.0985 22.4667 29.2958C20.7787 29.3732 20.2747 29.3892 16 29.3892C11.728 29.3892 11.2213 29.3732 9.53467 29.2958C5.188 29.0972 3.17333 27.0305 2.976 22.7358C2.89867 21.0492 2.88267 20.5438 2.88267 16.2705C2.88267 11.9985 2.9 11.4932 2.976 9.80517C3.17467 5.50251 5.19467 3.44384 9.53467 3.24651C11.2227 3.17051 11.728 3.15451 16 3.15451ZM16 0.270508C11.6547 0.270508 11.1107 0.289174 9.404 0.366508C3.59333 0.633174 0.364 3.85717 0.0973333 9.67317C0.0186667 11.3812 0 11.9252 0 16.2705C0 20.6158 0.0186667 21.1612 0.096 22.8678C0.362667 28.6785 3.58667 31.9078 9.40267 32.1745C11.1107 32.2518 11.6547 32.2705 16 32.2705C20.3453 32.2705 20.8907 32.2518 22.5973 32.1745C28.4027 31.9078 31.64 28.6838 31.9027 22.8678C31.9813 21.1612 32 20.6158 32 16.2705C32 11.9252 31.9813 11.3812 31.904 9.67451C31.6427 3.86917 28.4147 0.634508 22.5987 0.367841C20.8907 0.289174 20.3453 0.270508 16 0.270508ZM16 8.05451C11.4627 8.05451 7.784 11.7332 7.784 16.2705C7.784 20.8078 11.4627 24.4878 16 24.4878C20.5373 24.4878 24.216 20.8092 24.216 16.2705C24.216 11.7332 20.5373 8.05451 16 8.05451ZM16 21.6038C13.0547 21.6038 10.6667 19.2172 10.6667 16.2705C10.6667 13.3252 13.0547 10.9372 16 10.9372C18.9453 10.9372 21.3333 13.3252 21.3333 16.2705C21.3333 19.2172 18.9453 21.6038 16 21.6038ZM24.5413 5.81051C23.48 5.81051 22.62 6.67051 22.62 7.73051C22.62 8.79051 23.48 9.65051 24.5413 9.65051C25.6013 9.65051 26.46 8.79051 26.46 7.73051C26.46 6.67051 25.6013 5.81051 24.5413 5.81051Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.facebook.com/rouse.yoga/"
                className="flex justify-center items-center text-purple-600 hover:text-purple-700 dark:hover:text-purple-500 bg-white dark:bg-gray-800 hover:bg-gray-50 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 dark:text-gray-400 mr-4">
            &copy; {new Date().getFullYear()}
            {` `}
            Rouse Yoga. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
