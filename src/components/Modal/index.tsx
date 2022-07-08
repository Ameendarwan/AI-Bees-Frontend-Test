import React, { SetStateAction, Dispatch } from 'react'
import ReactModal from "react-modal";
import "./Modal.scss";
interface ButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ButtonProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
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
