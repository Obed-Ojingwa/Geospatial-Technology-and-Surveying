import { useEffect, useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';

const Hero = () => {
  const images = [
    { src: '/people_drone.jpg', alt: 'Surveying drone in the field' },
    { src: '/people_gis.png', alt: 'Geospatial mapping in progress' },
    { src: '/Students_studying_drone_mapping.jpeg', alt: 'Digital terrain map' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(previous => (previous + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((currentIndex + images.length - 1) % images.length);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % images.length);

  const stats = [
    ['2,400+', 'Professionals trained'],
    ['48', 'Projects delivered'],
    ['95%', 'Client satisfaction'],
    ['100%', 'Field-ready graduates'],
  ];

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#071a38] text-white sm:min-h-[700px]">
      <div className="absolute inset-0 -z-20">
        {images.map((img, idx) => (
          <div key={img.src} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,20,49,0.98)_0%,rgba(6,28,61,0.88)_32%,rgba(6,28,61,0.35)_63%,rgba(6,28,61,0.15)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#071a38] via-[#071a38]/75 to-transparent" />
      <div className="absolute left-0 top-0 -z-10 h-full w-1/2 opacity-25 [background-image:linear-gradient(30deg,transparent_49%,#83b8ff_50%,transparent_51%),linear-gradient(150deg,transparent_49%,#83b8ff_50%,transparent_51%)] [background-size:34px_34px]" />

      <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col justify-between px-5 pb-8 pt-24 sm:min-h-[700px] sm:px-8 lg:px-12">
        <div className="max-w-xl pt-10 sm:pt-16">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-5 py-2 text-xs font-medium tracking-wide text-blue-50 backdrop-blur-sm">
            <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
            Nigeria&apos;s geospatial technology partner
          </div>
          <h1 className="max-w-lg text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            See the world in <span className="text-[#66adff]">more detail.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-6 text-blue-50/85 sm:text-base">
            Precise surveying, mapping, and aerial intelligence for the people building Nigeria&apos;s next horizon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-3 rounded-md bg-[#2876ed] px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-950/30 transition hover:bg-[#3d87f5]">
              Explore our services <FiArrowRight />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-md border border-white/50 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15">
              Start a project <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/15 bg-[#0b2854]/75 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/15 sm:grid-cols-4 sm:divide-y-0">
            {stats.map(([value, label]) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5 sm:px-6 lg:px-8">
                <FiCheckCircle className="shrink-0 text-3xl text-[#61aaff]" />
                <div>
                  <div className="text-2xl font-bold tracking-tight sm:text-3xl">{value}</div>
                  <div className="text-[11px] capitalize leading-4 text-blue-100/70">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <button type="button" onClick={goToPrevious} className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Previous slide"><FiChevronLeft /></button>
        <div className="flex gap-1.5">
          {images.map((image, idx) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`h-1 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/45 hover:bg-white/75'}`}
            aria-label={`Slide ${idx + 1}`}
          />
          ))}
        </div>
        <button type="button" onClick={goToNext} className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Next slide"><FiChevronRight /></button>
      </div>
    </section>
  );
};

export default Hero;