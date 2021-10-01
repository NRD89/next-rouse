import { useState, useContext } from "react";
import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import DigitalCheckoutForm from "./DigitalCheckoutForm";
import { AuthContext } from "../context/UserAuthContext";
import { MdOpenInNew } from "react-icons/md";

const DigitalModal = ({ buttonText, btnSize, btnWidth, btnPriority }) => {
  const { isAuthenticated, user, redirectToManage } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [subscription, setSubscription] = useState("yearly");

  function openModal(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div>
        {!isAuthenticated ? (
          <button
            onClick={openModal}
            className={`${btnSize === "small" ? `btn-sm` : `btn`} ${
              btnWidth === "full" ? `w-full` : ``
            } ${
              btnPriority === "secondary"
                ? `bg-purple-500 hover:bg-purple-400`
                : btnPriority === "cta"
                ? `hover:from-blue-500 hover:to-blue-600 border border-solid border-white rounded-lg uppercase bg-gradient-to-tr from-blue-600 to-blue-500`
                : `bg-purple-600 hover:bg-purple-500`
            } text-white flex-shrink-0 mb-2 sm:mb-0 sm:mr-2`}
          >
            {buttonText}
          </button>
        ) : (
          <button
            onClick={
              isAuthenticated && user.hasHadTrial === true
                ? redirectToManage
                : openModal
            }
            className={`${btnSize === "small" ? `btn-sm` : `btn`} ${
              btnWidth === "full" ? `w-full` : ``
            } ${
              btnPriority === "secondary"
                ? `bg-purple-500 hover:bg-purple-400`
                : `bg-purple-600 hover:bg-purple-500`
            } border-none text-white flex-shrink-0 mb-2 sm:mb-0 sm:mr-2 ${
              isAuthenticated && user.subTier === "digital"
                ? "pointer-events-none"
                : ""
            }`}
          >
            {isAuthenticated &&
            user.subTier !== "digital" &&
            user.hasHadTrial === false ? (
              <>{buttonText}</>
            ) : isAuthenticated &&
              user.subTier !== "digital" &&
              user.hasHadTrial === true ? (
              "Go Digital"
            ) : (
              "Thanks for being a member!"
            )}
          </button>
        )}
        {/* <Button onClick={openModal}>Open modal</Button> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center">
          {loginSuccess === true && (
            <>
              Digital Membership Total:{" "}
              <span className="text-purple-600 font-extrabold">
                {subscription === "yearly" ? `$199.99` : `$19.99`}
              </span>
            </>
          )}
          {loginSuccess === false && (
            <p className="mb-6">
              Sign up for an account to continue to checkout.
            </p>
          )}
        </ModalHeader>
        <ModalBody>
          <DigitalCheckoutForm
            loginSuccess={loginSuccess}
            setLoginSuccess={setLoginSuccess}
            subscription={subscription}
            setSubscription={setSubscription}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
export default DigitalModal;
