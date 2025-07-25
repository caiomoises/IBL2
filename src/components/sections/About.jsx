const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa <span className="text-yellow-500">História</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="rounded-lg shadow-xl w-full h-96">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/OtWBlv_Z3gU?autoplay=1&mute=1&loop=1&playlist=icAfy5SWOr0"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Quem Somos</h3>
            <p className="text-gray-300 mb-6">
              A Igreja Lagoinha é uma comunidade cristã comprometida com o evangelho de Jesus Cristo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
