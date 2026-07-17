const Career = () => {
  const positions = [
    {
      title: 'Senior GIS Analyst',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Lead GIS projects, perform spatial analysis, and develop mapping solutions for clients across various industries.'
    },
    {
      title: 'Drone Pilot & Operator',
      location: 'Abuja, Nigeria',
      type: 'Contract',
      description: 'Operate drones for surveying, mapping, and inspection tasks. Ensure flight safety and data quality.'
    },
    {
      title: 'Remote Sensing Specialist',
      location: 'Port Harcourt, Nigeria',
      type: 'Full-time',
      description: 'Process satellite and aerial imagery, develop algorithms for change detection, and support environmental monitoring projects.'
    },
    {
      title: 'Sales & Marketing Executive',
      location: 'Nationwide',
      type: 'Full-time',
      description: 'Promote geospatial products and services, manage client relationships, and drive business growth.'
    }
  ];

  return (
    <section id="career" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Career Opportunities</h2>
        <p className="text-center text-gray-600 mb-12">
          Join our team of passionate professionals and contribute to innovative geospatial solutions that make a difference.
        </p>
        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-primary">{pos.title}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{pos.type}</span>
              </div>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {pos.location}</p>
              <p className="text-gray-600">{pos.description}</p>
              <a href="#" className="mt-4 inline-block text-primary font-medium hover:underline">
                Apply Now →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            View All Careers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Career;