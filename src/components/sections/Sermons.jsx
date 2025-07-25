import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Sermons = () => {
  return (
    <section id="sermons" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mensagens <span className="text-yellow-500">Inspiradoras</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>
        
        <div className="text-center mt-12 mb-16">
          <a 
            href="https://www.youtube.com/@lagoinhacidadeverde/streams" 
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Ver todas as mensagens
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sermons;