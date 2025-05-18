import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
      onClick={handleBackDropClick}
    >
      <div className="relative bg-gray-800/90 p-5 rounded-lg w-[470px] h-[470px] flex items-center justify-center">
        <button
          className="hover:cursor-pointer absolute top-2 right-2 text-white hover:text-4xl ease-in-out duration-300 text-2xl font-light leading-none p-1"
          onClick={onClose}
        >
          X
        </button>
        <img
          className="w-[400px] h-[400px] object-contain"
          src={imageUrl}
          alt="almbum Cover"
        />
      </div>
    </div>
  );
};

export default Modal;
