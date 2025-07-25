import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
                <p className="text-gray-300">Av. Deputado Gastão Mariz de Faria, 12 - Nova Parnamirim, Parnamirim - RN, 59152-250</p>
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

          {/* Mapa incorporado */}
          <div className="mt-8">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.012507306539!2d-35.2253477259058!3d-5.905737994421307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fff3f6a30dd5%3A0x4b3a0d8c376d7d4a!2sAv.%20Dep.%20Gast%C3%A3o%20Mariz%20de%20Faria%2C%2012%20-%20Nova%20Parnamirim%2C%20Parnamirim%20-%20RN%2C%2059152-250!5e0!3m2!1spt-BR!2sbr!4v1721918251031!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-0 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
