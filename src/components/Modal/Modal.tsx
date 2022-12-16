interface ModalProps {
  isVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({ isVisible }) => {
  return (
    <div
      className={`absolute top-1/4 left-0 z-2 w-full h-1/2 bg-white ${
        isVisible ? '' : 'hidden'
      }`}
    ></div>
  );
};

export default Modal;
