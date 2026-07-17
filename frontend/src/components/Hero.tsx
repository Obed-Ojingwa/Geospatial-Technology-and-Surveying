import { useEffect, useState } from 'react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1551679483-655d0fee8d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHxsaWRhJTIwaW1hZ2V8ZW58MHx8fHwxNzIxNDU2MDAw&ixlib=rb-4.0.3&q=80&w=400', // Lidar image
    'https://images.unsplash.com/photo-1520545534574-8eedce55d276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHxkcj9lfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=400', // Drone image
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxzdXJ2ZXljeSUyMGltYWdlfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=400', // Surveying image
    'https://images.unsplash.com/photo-1551697625-9b3e9a55d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxnaXN8ZW58MHx8fHwxNzIxNDU2MDAwfHA&ixlib=rb-4.0.3&q=80&w=400' // GIS image
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 flex">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-full h-full flex-shrink-0 transition-transform duration-700 ease-in-out transform ${idx === currentIndex ? 'translate-x-0' : idx === (currentIndex + images.length - 1) % images.length ? '-translate-x-full' : 'translate-x-full'}`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full bg-white/50 hover:bg-white/75 transition-colors ${idx === currentIndex ? 'bg-white' : ''}`}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl font-bold md:text-5xl drop-shadow-lg">
          Geospatial Technology and Surveying
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-sm">
          Data-driven surveying and mapping solutions
        </p>
        <div className="mt-6 flex space-x-4">
          <button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-shadow hover:shadow-lg"
          >
            Learn More
          </button>
          <button
            className="border border-white hover:border-white/80 text-white font-bold py-3 px-8 rounded-lg transition-shadow hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;