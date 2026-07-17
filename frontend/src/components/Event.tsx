const Event = () => {
  const events = [
    {
      title: 'Annual Geospatial Conference 2024',
      date: 'November 15-17, 2024',
      location: 'Abuja, Nigeria',
      description: 'Join industry leaders, researchers, and practitioners to discuss the latest trends in geospatial technology, drone applications, and spatial data science.'
    },
    {
      title: 'Drone Pilot Certification Workshop',
      date: 'Every first Saturday of the month',
      location: 'Lagos, Nigeria',
      description: 'Hands-on training for aspiring drone pilots covering flight safety, regulations, and aerial photography techniques.'
    },
    {
      title: 'GIS Day Celebration',
      date: 'November 20, 2024',
      location: 'Online & Lagos',
      description: 'Celebrate GIS Day with webinars, mapathons, and student competitions showcasing the power of geographic information systems.'
    }
  ];

  return (
    <section id="event" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Upcoming Events</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {events.map((ev, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-2">{ev.title}</h3>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {ev.date}</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {ev.location}</p>
              <p className="text-gray-600">{ev.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Event;