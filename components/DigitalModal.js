import { useState, useContext } from "react"
import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui"
import DigitalCheckoutForm from "./DigitalCheckoutForm"
import { AuthContext } from "../context/UserAuthContext"
import { MdOpenInNew } from "react-icons/md"

const DigitalModal = () => {
  const { isAuthenticated, user, redirectToManage } = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [success, setSuccess] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <>
      <div>
        {!isAuthenticated ? (
          <button
            onClick={openModal}
            className={`font-bold uppercase tracking-tightish btn text-blue-600  bg-gray-100 hover:bg-gray-300 w-full `}
          >
            Go Digital
          </button>
        ) : (
          <button
            onClick={redirectToManage}
            className={`font-bold uppercase tracking-tightish btn text-blue-600  bg-gray-100 hover:bg-gray-300 w-full ${
              isAuthenticated && user.subTier === "digital"
                ? "pointer-events-none"
                : ""
            }`}
          >
            {isAuthenticated && user.subTier !== "digital" ? (
              <>
                Upgrade To Digital <MdOpenInNew className="w-6 h-6 p-1" />
              </>
            ) : (
              "Thanks for being a member!"
            )}
          </button>
        )}
        {/* <Button onClick={openModal}>Open modal</Button> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center">
          Digital Membership Total:{" "}
          <span className="text-blue-600 font-extrabold">$19.99</span>
          <br />
          <small className="font-light">
            Sign up for an account to continue to checkout.
          </small>
        </ModalHeader>
        <ModalBody>
          <DigitalCheckoutForm />
        </ModalBody>
      </Modal>
    </>
  )
}
export default DigitalModal
