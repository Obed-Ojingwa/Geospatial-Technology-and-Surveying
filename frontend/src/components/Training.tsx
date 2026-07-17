const Training = () => {
  const programs = [
    {
      level: 'Intermediate',
      duration: '2 Weeks',
      topics: ['GIS Fundamentals', 'Remote Sensing Basics', 'Intro to Drones']
    },
    {
      level: 'Advanced',
      duration: '4 Weeks',
      topics: ['Advanced GIS Analysis', 'Drone Photogrammetry', 'LiDAR Processing']
    },
    {
      level: 'Professional',
      duration: '8 Weeks',
      topics: ['Professional GIS Certification', 'Advanced Drone Operations', 'Geospatial Project Management']
    }
  ];

  return (
    <section id="training" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Training Programs</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">{prog.level} Level Training</h3>
              <p className="text-gray-600 mb-4"><strong>Duration:</strong> {prog.duration}</p>
              <ul className="space-y-2 text-gray-700 space-y-1">
                {prog.topics.map((topic, tdx) => (
                  <li key={tdx} className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-1 mr-2">
                      •
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;