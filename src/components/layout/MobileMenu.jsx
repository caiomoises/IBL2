// components/MobileMenu.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import DoarModal from './DoarModal';

const MobileMenu = ({ isOpen, closeMenu }) => {
  const [isDoarModalOpen, setIsDoarModalOpen] = useState(false);

  const handleDoarClick = () => {
    closeMenu();
    setIsDoarModalOpen(true);
  };

  return (
    <>
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} 
                   fixed top-20 right-4 bg-white dark:bg-gray-800 z-50 
                   rounded-xl shadow-2xl w-64 border border-gray-200 dark:border-gray-700
                   transform transition-all duration-300 ease-out`}
      >
        {/* Botão de fechar */}
        <div className="flex justify-end p-3">
          <button 
            onClick={closeMenu} 
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white 
                       text-lg focus:outline-none transition-colors"
            aria-label="Fechar menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Itens do menu */}
        <div className="px-4 pb-4 space-y-2">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                       block px-4 py-2 rounded-lg text-base font-medium transition-colors"
          >
            Início
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                       block px-4 py-2 rounded-lg text-base font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#events"
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                       block px-4 py-2 rounded-lg text-base font-medium transition-colors"
          >
            Eventos
          </a>
          <a
            href="#sermons"
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                       block px-4 py-2 rounded-lg text-base font-medium transition-colors"
          >
            Mensagens
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 
                       block px-4 py-2 rounded-lg text-base font-medium transition-colors"
          >
            Contato
          </a>
          
          <div className="pt-3 space-y-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href="https://forms.clickup.com/9011854024/f/8cjbyp8-1191/TDTGOG3V0CF5K6PAOG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white 
                         block px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
            >
              Visitantes
            </a>
            <a
              href="https://forms.clickup.com/9011854024/f/8cjbyp8-1191/TDTGOG3V0CF5K6PAOG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white 
                         block px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
            >
              Quero ser membro
            </a>
            <button
              onClick={handleDoarClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white 
                         block w-full px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
            >
              Doar <FontAwesomeIcon icon={faHeart} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <DoarModal 
        isOpen={isDoarModalOpen}
        onClose={() => setIsDoarModalOpen(false)}
      />
    </>
  );
};

export default MobileMenu;