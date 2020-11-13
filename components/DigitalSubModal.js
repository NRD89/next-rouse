import { useState, useEffect } from "react"
import ClientOnlyPortal from "./ClientOnlyPortal"
// import { AuthContext } from "../context/UserAuthContext"

const DigitalSubModal = ({ open, setOpen }) => {
  // const { sendSubmission } = useContext(AuthContext)
  // const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true)
    }
  }, [])

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setLoading(true)
  //     try {
  //       await sendSubmission(name, email).then((res) => {
  //         console.log(res)
  //         if (res.statusCode === 400) {
  //           setError(res.message[0].messages[0].message)
  //           setLoading(false)
  //         } else {
  //           setSuccess("Successfully Signed Up")
  //           setLoading(false)
  //         }
  //       })
  //     } catch (e) {
  //       console.log(e)
  //       setError(e)
  //       setLoading(false)
  //     }
  // }
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className="fixed bg-opacity-75 bg-gray-600 top-0 right-0 bottom-0 left-0 z-50">
            <div className="modal bg-darkBlueBg">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn-sm bg-red-600 text-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <div className="w-full h-full">
                <div className="flex flex-col content-center">
                  <p className="text-gray-100 text-center my-12 text-lg">
                    Signup and get notified when digital memberships are
                    available for purchase!
                  </p>
                  <div
                    className="max-w-sm mx-auto"
                    style={{ minWidth: `250px` }}
                  >
                    <form
                      name="digital"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      action="/success"
                    >
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-100 text-sm font-medium mb-1"
                            htmlFor="name"
                          >
                            Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            // onChange={(e) => {
                            //   setName(e.target.value)
                            // }}
                            // value={name}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="name"
                            className="form-input w-full text-gray-800"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block text-gray-100 text-sm font-medium mb-1"
                            htmlFor="email"
                          >
                            Email <span className="text-red-600">*</span>
                          </label>
                          <input
                            // onChange={(e) => {
                            //   setEmail(e.target.value)
                            // }}
                            // value={email}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                            className="form-input w-full text-gray-800"
                            required
                          />
                        </div>
                      </div>
                      <input type="hidden" name="form-name" value="digital" />
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <button
                            type="submit"
                            className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full"
                          >
                            {/* {loading ? "Loading..." : "Get Notified"} */}
                            Get Notified
                          </button>
                        </div>
                      </div>
                      {/* <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div> */}
                    </form>

                    {/* {error.length > 1 ? (
                    <p className="font-inter text-red-600">{error}</p>
                  ) : null} */}

                    {success.length > 1 ? (
                      <p className="font-inter mt-2 text-green-500">
                        {success}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
              .backdrop {
                position: fixed;
                background-color: rgba(231, 231, 231, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 99;
              }
              .modal {
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
                padding: 1em;
              }
            `}</style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  )
}

export default DigitalSubModal
