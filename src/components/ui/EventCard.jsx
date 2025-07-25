import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {event.date}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faClock} className="text-yellow-500 mr-2" />
          <span className="text-gray-300">{event.time}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
        <p className="text-gray-400 mb-4">
          {event.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 mr-2" />
            <span className="text-gray-300">{event.location}</span>
          </div>
          <a href="#" className="text-yellow-500 hover:text-yellow-400 font-medium">
            Mais detalhes <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;