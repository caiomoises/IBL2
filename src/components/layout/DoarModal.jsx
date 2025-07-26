// components/DoarModal.jsx
import { useEffect } from 'react';

const DoarModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-xl font-bold"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Faça sua Doação</h2>

        <div className="text-center">
          <p className="mb-2 font-medium text-gray-700">OFERTAS PARA REFORMA DA IGREJA:<br />Chave:<br />facasuapartelcv@gmail.com</p>
          <img src="/images/reforma.jpg" alt="QR Code PIX Igreja" className="mx-auto w-40" />
        </div>

        <div className="text-center">
          <p className="mb-2 font-medium text-gray-700"><br />DÍZIMOS E OFERTAS PARA A IGREJA:<br />Chave:<br />ofertaslagoinhacv@gmail.com</p>
          <img src="/images/reforma.jpg" alt="QR Code PIX Missões" className="mx-auto w-40" />
        </div>
      </div>
    </div>
  );
};

export default DoarModal;