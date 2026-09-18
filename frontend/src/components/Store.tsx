const Store = () => {
  const categories = [
    {
      name: 'GIS\nSoftware',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Sensors &\nPayloads',
      image:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Drone\nHardware',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Training\nMaterials',
      image:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="store" className="bg-[#efefef] py-14 text-[#0d2d4d] sm:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-[#2c9eea] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            HARDWARE &amp; SUPPLIES
          </span>
        </div>

        <h2 className="mb-3 text-center text-[2.15rem] font-black leading-none tracking-[-0.05em] text-[#0f2d4d] sm:text-[3rem]">
          Geospatial Store
        </h2>

        <p className="mx-auto mb-8 max-w-[760px] text-center text-[0.96rem] leading-7 text-[#355078] sm:text-[1.15rem]">
          We supply high-quality geospatial software, hardware, drones, sensors, and accessories for professionals and enthusiasts.
        </p>

        <div className="mx-auto grid max-w-[1000px] gap-5 sm:gap-6 lg:grid-cols-3">
          <div className="relative h-[220px] overflow-hidden rounded-[1.55rem] shadow-[0_10px_22px_rgba(11,35,62,0.12)] sm:h-[236px] lg:h-[240px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.10), rgba(11,35,62,0.58)), url('${categories[0].image}')`
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-start p-5 sm:p-6">
              <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.08] text-white sm:text-[1.7rem]">
                {categories[0].name}
              </h3>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-[1.55rem] shadow-[0_10px_22px_rgba(11,35,62,0.12)] sm:h-[236px] lg:h-[240px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.10), rgba(11,35,62,0.58)), url('${categories[1].image}')`
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-5 text-center sm:p-6">
              <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.08] text-white sm:text-[1.7rem]">
                {categories[1].name}
              </h3>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-[1.55rem] shadow-[0_10px_22px_rgba(11,35,62,0.12)] sm:h-[236px] lg:h-[240px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.12), rgba(11,35,62,0.62)), url('${categories[2].image}')`
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 text-center sm:p-6">
              <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.08] text-white sm:text-[1.7rem]">
                {categories[2].name}
              </h3>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-[1.55rem] shadow-[0_10px_22px_rgba(11,35,62,0.12)] sm:h-[236px] lg:h-[240px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.10), rgba(11,35,62,0.58)), url('${categories[3].image}')`
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 text-center sm:p-6">
              <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.08] text-white sm:text-[1.7rem]">
                {categories[3].name}
              </h3>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-[1.55rem] shadow-[0_10px_22px_rgba(11,35,62,0.12)] sm:h-[236px] lg:h-[240px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.10), rgba(11,35,62,0.58)), url('${categories[4].image}')`
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 text-center sm:p-6">
              <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.08] text-white sm:text-[1.7rem]">
                {categories[4].name}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/store"
            className="inline-flex items-center gap-3 rounded-full bg-[#2c9eea] px-7 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(44,158,234,0.35)] transition hover:brightness-105"
          >
            Visit Store
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Store;