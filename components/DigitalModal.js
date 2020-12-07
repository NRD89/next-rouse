import { useState } from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui"
import DigitalCheckoutForm from "./DigitalCheckoutForm"

const DigitalModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <>
      <div>
        <button
          onClick={openModal}
          className="font-bold uppercase tracking-tightish btn text-blue-600  bg-gray-100 hover:bg-gray-300 w-full mt-10"
        >
          Go Digital
        </button>
        {/* <Button onClick={openModal}>Open modal</Button> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center">
          Digital Membership Total:{" "}
          <span className="text-blue-600 font-extrabold">$19.99</span>
        </ModalHeader>
        <ModalBody>
          <DigitalCheckoutForm />
        </ModalBody>
      </Modal>
    </>
  )
}
export default DigitalModal
