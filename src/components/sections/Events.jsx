import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const agendaImages = [
  "/images/agenda.jpg",
  "/images/quarta.jpg",
  "/images/sexta.jpg",
  "/images/sabado.jpg",
  "/images/domingo.jpg"
];

const Events = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    centered: true,
    mode: "free",
    created: (slider) => {
      setInterval(() => {
        slider.next()
      }, 3000)
    },
  });

  return (
    <section id="events" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agenda <span className="text-yellow-500">Semanal</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {agendaImages.map((src, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <img 
                src={src} 
                alt={`Agenda ${idx + 1}`} 
                className="rounded-xl shadow-xl w-72 object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
