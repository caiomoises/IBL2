import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Sermons = () => {
  const swiperRef = useRef(null);
  const playersRef = useRef({});
  const [apiReady, setApiReady] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/mEBFQFDpSjM",
    "https://www.youtube.com/embed/EsGuIGRXimE",
    "https://www.youtube.com/embed/ONE1mkadXSk",
    "https://www.youtube.com/embed/vrpIg2NA90A",
    "https://www.youtube.com/embed/yCWvESPIoO8",
    "https://www.youtube.com/embed/TTNBVw0XAU8",
    "https://www.youtube.com/embed/h3JJprAYLo4",
    "https://www.youtube.com/embed/s9siPpele6w",
    "https://www.youtube.com/embed/o8mst2sUXFw",
    "https://www.youtube.com/embed/ZTpuX63U7bE",
  ];

  // Carrega a API do YouTube
  useEffect(() => {
    if (window.YT) {
      setApiReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);

  // Inicializa os players quando a API estiver pronta
  useEffect(() => {
    if (!apiReady || !swiperRef.current) return;

    const handleStateChange = (event, index) => {
      if (!swiperRef.current) return;
      
      // Pausa o autoplay do carrossel quando qualquer vídeo começa a tocar
      if (event.data === window.YT.PlayerState.PLAYING) {
        swiperRef.current.autoplay.stop();
      } 
      // Reinicia o autoplay quando o vídeo é pausado ou termina
      else if (
        event.data === window.YT.PlayerState.PAUSED ||
        event.data === window.YT.PlayerState.ENDED
      ) {
        // Verifica se nenhum outro vídeo está tocando antes de reiniciar
        const isAnyVideoPlaying = Object.values(playersRef.current).some(
          player => player?.getPlayerState?.() === window.YT.PlayerState.PLAYING
        );
        
        if (!isAnyVideoPlaying) {
          swiperRef.current.autoplay.start();
        }
      }
    };

    videos.forEach((_, index) => {
      // Só cria o player se ele ainda não existir
      if (!playersRef.current[index]) {
        playersRef.current[index] = new window.YT.Player(`player-${index}`, {
          events: {
            onStateChange: (event) => handleStateChange(event, index)
          }
        });
      }
    });

    return () => {
      // Limpa os players quando o componente desmontar
      Object.values(playersRef.current).forEach(player => {
        if (player && player.destroy) player.destroy();
      });
    };
  }, [apiReady]);

  return (
    <section id="sermons" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mensagens <span className="text-yellow-500">Inspiradoras</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-12"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  id={`player-${index}`}
                  className="w-full h-full"
                  src={`${src}?enablejsapi=1&origin=${window.location.origin}`}
                  title={`Sermão ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@lagoinhacidadeverde/streams"
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            Ver todas as mensagens
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sermons;