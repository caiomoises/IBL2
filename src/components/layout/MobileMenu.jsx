import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#home" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Início</a>
        <a href="#about" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
        <a href="#events" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Eventos</a>
        <a href="#sermons" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mensagens</a>
        <a href="#contact" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</a>
        <a href="#" onClick={closeMenu} className="bg-yellow-600 hover:bg-yellow-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center">
          Doar <FontAwesomeIcon icon={faHeart} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;