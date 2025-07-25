import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-yellow-500">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium mb-1">Endereço</h4>
                <p className="text-gray-300">R. Gastão Mariz de Faria, 12 - Nova Parnamirim</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-yellow-500 p-3 rounded-full flex-shrink-0">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium mb-1">Telefone</h4>
                <p className="text-gray-300">(84) 99916-1000 (Pastor Renato)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;