import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/images.jpeg" 
                alt="Igreja Lagoinha" 
                className="h-12 rounded-full mr-2"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Uma comunidade de fé, amor e esperança.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/igrejalagoinhacidadeverde/" className="text-gray-400 hover:text-yellow-500">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/@lagoinhacidadeverde" className="text-gray-400 hover:text-yellow-500">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          {/* Adicione as outras seções do footer conforme necessário */}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
            &copy; {new Date().getFullYear()} Igreja Lagoinha. Todos os direitos reservados.  
            <span className="block sm:inline"> Desenvolvido por @ocaiomoises</span>
            </footer>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;