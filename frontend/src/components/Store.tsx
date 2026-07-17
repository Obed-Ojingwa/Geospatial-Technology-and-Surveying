const Store = () => {
  const categories = [
    { name: 'GIS Software', icon: '💻' },
    { name: 'Drone Hardware', icon: '🚁' },
    { name: 'Sensors & Payloads', icon: '📡' },
    { name: 'Accessories', icon: '🔧' },
    { name: 'Training Materials', icon: '📚' }
  ];

  return (
    <section id="store" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Geospatial Store</h2>
        <p className="text-center text-gray-600 mb-12">
          We supply high-quality geospatial software, hardware, drones, sensors, and accessories for professionals and enthusiasts.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-semibold text-primary">{cat.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Visit Our Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Store;