import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";

const modalRoot = document.getElementById("modal-root");

interface ButtonProps {
   isOpen: boolean,
   onClose?: any,
   children?: React.ReactNode;
}

const Modal: React.FC<ButtonProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={'custom__modal'}
      shouldCloseOnOverlayClick={false}
      overlayClassName={"custom__modal__overlay"}
    >
      {/* {onClose && (
        <Close className={styles.icon_close} clickable onClick={onClose} />
      )} */}
      {children}
    </ReactModal>
  );
};

export default Modal;
