import React from 'react';

const StorePage = () => {
  const categories = [
    { name: 'GIS Software', icon: '💻', description: 'Professional GIS software solutions for mapping, analysis, and spatial data management.' },
    { name: 'Drone Hardware', icon: '🚁', description: 'High-performance drones and UAV platforms for aerial surveying, mapping, and inspection.' },
    { name: 'Sensors & Payloads', icon: '📡', description: 'Specialized sensors and payloads including LiDAR, multispectral, thermal, and photogrammetry equipment.' },
    { name: 'Accessories', icon: '🔧', description: 'Essential accessories including batteries, chargers, propellers, carrying cases, and ground control equipment.' },
    { name: 'Training Materials', icon: '📚', description: 'Comprehensive training resources, courses, and certification materials for geospatial technologies.' }
  ];

  return (
    <section id="store-page" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <a href="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </a>
          <h1 className="text-3xl font-bold text-center text-primary mb-6">Geospatial Store</h1>
          <p className="text-center text-gray-600 mb-8">
            We supply high-quality geospatial software, hardware, drones, sensors, and accessories for professionals and enthusiasts.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="font-semibold text-primary mb-3">{cat.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
              <a href="#" className="inline-block px-4 py-2 bg-primary text-white rounded-sm text-sm hover:bg-primary-dark transition-colors">
                Explore
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Visit Our Complete Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default StorePage;