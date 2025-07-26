import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlayCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bem-vindo à <span className="text-yellow-500">Lagoinha CV</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Uma comunidade de fé, amor e esperança.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#events" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 text-center">
                Agenda <FontAwesomeIcon icon={faCalendarAlt} className="ml-2" />
              </a>
              <a href="#sermons" className="bg-transparent hover:bg-gray-800 text-white border border-gray-600 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 text-center">
                Assistir Mensagens <FontAwesomeIcon icon={faPlayCircle} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="/images/desenho_iblcv.png" 
              alt="Igreja Lagoinha" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-12 scroll-down">
        <a href="#about" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;