import { useState } from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui"
import DigitlCheckoutForm from "./DigitalCheckoutForm"

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
        <Button onClick={openModal}>Open modal</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          <DigitlCheckoutForm />
        </ModalBody>
      </Modal>
    </>
  )
}
export default DigitalModal
