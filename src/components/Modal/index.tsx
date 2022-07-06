import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";
interface ButtonProps {
  isOpen: boolean;
  onClose?: any;
  children?: React.ReactNode;
}

const Modal: React.FC<ButtonProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={'custom__modal'}
      shouldCloseOnOverlayClick={true}
      overlayClassName={"custom__modal__overlay"}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
