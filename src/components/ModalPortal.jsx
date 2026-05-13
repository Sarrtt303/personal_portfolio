import { createPortal } from "react-dom";

function ModalPortal({ children }) {
  return createPortal(
    children,
    document.body
  );
}

export default ModalPortal;