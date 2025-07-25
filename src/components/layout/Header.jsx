import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/images/images.jpeg" 
              alt="Logo Igreja Lagoinha" 
              className="h-12 rounded-full"
            />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Início</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
              <a href="#events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Eventos</a>
              <a href="#sermons" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mensagens</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</a>
              <a href="#doar" className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                Doar <FontAwesomeIcon icon={faHeart} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;