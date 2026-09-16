const Store = () => {
  const categories = [
    {
      name: 'GIS Software',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      className: 'lg:col-span-1'
    },
    {
      name: 'Drone Hardware',
      image:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80',
      className: 'lg:col-span-1'
    },
    {
      name: 'Sensors &\nPayloads',
      image:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80',
      className: 'lg:col-span-1'
    },
    {
      name: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      className: 'lg:col-span-1'
    },
    {
      name: 'Training\nMaterials',
      image:
        'https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80',
      className: 'lg:col-span-1'
    }
  ];

  return (
    <section id="store" className="relative overflow-hidden bg-[#efefef] py-16 text-[#0d2d4d]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(100,100,100,0.45) 1.4px, transparent 1.8px)',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-[#2c9eea] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            HARDWARE &amp; SUPPLIES
          </span>
        </div>

        <h2 className="mb-6 text-center text-[2.5rem] font-black leading-none tracking-[-0.05em] text-[#0d2d4d] sm:text-[3.1rem]">
          Geospatial Store
        </h2>

        <p className="mx-auto mb-10 max-w-[760px] text-center text-[1.05rem] leading-8 text-[#355078]">
          We supply high-quality geospatial software, hardware, drones, sensors, and accessories for professionals and enthusiasts.
        </p>

        <div className="mx-auto grid max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-[1.7rem] border border-[#dfeaf4] bg-[#0b233e] shadow-[0_10px_24px_rgba(11,35,62,0.14)]"
              style={{
                minHeight: idx === 2 ? '300px' : '250px'
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(11,35,62,0.18), rgba(11,35,62,0.62)), url('${cat.image}')`
                }}
              />

              <div className="relative flex h-full items-end justify-center p-6 text-center">
                <h3 className="whitespace-pre-line text-[1.05rem] font-bold leading-[1.1] text-white sm:text-[1.6rem]">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/store"
            className="inline-flex items-center gap-3 rounded-full bg-[#2c9eea] px-8 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(44,158,234,0.35)] transition hover:brightness-105"
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