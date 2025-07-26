import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Sermons = () => {
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detecta se é mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Carrega a API do YouTube
  useEffect(() => {
    if (window.YT) {
      setApiReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };

    return () => {
      if (window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, []);

  // Configurações do Swiper
  const swiperParams = {
    modules: [Navigation, Autoplay],
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2, navigation: false },
      1024: { 
        slidesPerView: 3,
        navigation: {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }
      },
    },
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
    onInit: (swiper) => {
      // Atualiza a navegação após a inicialização
      swiper.navigation.update();
    }
  };

  return (
    <section id="sermons" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mensagens <span className="text-yellow-500">Inspiradoras</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Botões de navegação */}
          <div ref={navigationPrevRef} className="swiper-button-prev hidden md:block"></div>
          <div ref={navigationNextRef} className="swiper-button-next hidden md:block"></div>

          <Swiper {...swiperParams} className="mb-12">
            {videos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    id={`player-${index}`}
                    className="w-full h-full"
                    src={`${src}?enablejsapi=1&origin=${window.location.origin}`}
                    title={`Sermão ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    playsInline
                    webkit-playsinline="true"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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