import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

import cls from "./Modal.module.css";
import IconButton from "../UI/buttons/IconButton/IconButton";
import CloseIcon from "../UI/icons/CloseIcon/CloseIcon";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={cls.backdrop} onClick={onClose}>
      <IconButton
        className={cls.closeButton}
        onClick={onClose}
        aria-label="Закрыть"
      >
        <CloseIcon />
      </IconButton>
      <div className={cls.modal} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
