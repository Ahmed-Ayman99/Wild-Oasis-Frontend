import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import useOusideClick from "../hooks/useOusideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-gray-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: var(--color-gray-500);
    stroke: var(--color-gray-500);
    color: var(--color-gray-500);
  }
`;

const Modal = ({ children, onClose }) => {
  const ref = useOusideClick(onClose);

  return createPortal(
    <Overlay>
      <Button onClick={onClose}>
        <HiXMark />
      </Button>

      <StyledModal ref={ref}>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

export default Modal;
