import React from "react";
import { createPortal } from "react-dom";
import Cross from "../icons/Cross";

const Modal = ({ className, children, onClose }) => {
  const handleCloseModal = () => {
    if (onClose) onClose();
    document.body.classList = "";
  };

  return createPortal(
    <div className={className}>
      <div
        className="fixed inset-0 backdrop-blur-md  bg-opacity-75 transition-opacity"
        onClick={handleCloseModal}
      />
      <div className=" fixed top-24 md:top-1/4 left-1/2 transform -translate-x-1/2 inset-0 z-10 bg-gray-300 dark:bg-gray-700  flex flex-col   h-fit  w-1/2  rounded-md ">
        <div className=" flex  justify-end p-5">
          <button
            className="backdrop-blur-md"
            onClick={handleCloseModal}
            type="button"
          >
            <span className="sr-only">Close</span>
            <Cross className="h-6 w-6 hover:stroke-red-500" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
