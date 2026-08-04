import { FaBuilding, FaDrone, FaLayers, FaChartArea, FaMap, FaSatelliteDish } from 'react-icons/fa';

const portfolioProjects = [
  {
    id: 1,
    title: "Urban Infrastructure Mapping Project",
    category: "Urban Planning",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHx1cmJhbnxlbnwwfHx8fDE2MDc5MTYzNDg&ixlib=rb-1.2.1&q=80&w=400",
    description: "Comprehensive 3D modeling and mapping of downtown infrastructure for city planning and development initiatives.",
    technologies: ["Drone Mapping", "LiDAR Processing", "GIS Analysis", "3D Modeling"],
    client: "Metropolitan Development Authority",
    duration: "6 months",
    location: "Lagos, Nigeria",
    highlights: [
      "500+ acres mapped with 2cm accuracy",
      "Created detailed 3D building models",
      "Identified 23 infrastructure improvement areas",
      "Reduced survey time by 70% compared to traditional methods"
    ]
  },
  {
    id: 2,
    title: "Coastal Erosion Monitoring Study",
    category: "Environmental Monitoring",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxjb2FzdCUyMGVyb3Npb258ZW58MHx8fHwxNjA3OTE2MzUy&ixlib=rb-1.2.1&q=80&w=400",
    description: "Multi-year study monitoring coastal erosion rates along Nigeria's coastline using satellite imagery and drone surveys.",
    technologies: ["Satellite Imagery", "Change Detection", "GIS Analysis", "Remote Sensing"],
    client: "Federal Ministry of Environment",
    duration: "18 months",
    location: "Niger Delta Region",
    highlights: [
      "Monitored 150km of coastline",
      "Detected average erosion rate of 2.3m/year",
      "Provided data for coastal protection planning",
      "Published findings in environmental science journal"
    ]
  },
  {
    id: 3,
    title: "Agricultural Precision Mapping Initiative",
    category: "Precision Agriculture",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmaXJldHxlbnwwfHx8fDE2MDc5MTYzNTU&ixlib=rb-1.2.1&q=80&w=400",
    description: "Precision agriculture implementation for large-scale farms using drone-based multispectral imaging and soil analysis.",
    technologies: ["Multispectral Imaging", "NDVI Analysis", "Soil Sampling", "Variable Rate Technology"],
    client: "GreenField Agro Solutions",
    duration: "4 months",
    location: "Oyo State, Nigeria",
    highlights: [
      "Mapped 2,500 hectares of farmland",
      "Identified nutrient deficiencies across 15% of land",
      "Recommended variable rate fertilization",
      "Increased crop yield by average of 22%"
    ]
  },
  {
    id: 4,
    title: "Transportation Infrastructure Assessment",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581091851971-8464d0f3cca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHx0cmFuc3BvcnRhdGlvbiUyMGluc3RydWN0dXJlfGVufDB8fHx8MTYwNzkxNjM2MA..&ixlib=rb-1.2.1&q=80&w=400",
    description: "Comprehensive assessment of major highways and bridges using drone photogrammetry and structural analysis techniques.",
    technologies: ["Photogrammetry", "Structural Analysis", "Defect Detection", "3D Modeling"],
    client: "Federal Ministry of Works",
    duration: "8 months",
    location: "Abuja-Lokoja Highway Corridor",
    highlights: [
      "Inspected 12 bridges and 8 overpasses",
      "Identified 47 structural deficiencies",
      "Created maintenance priority ranking",
      "Saved estimated $2M in potential repair costs"
    ]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Our Work</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            Explore our portfolio of successful geospatial projects demonstrating our expertise
            in delivering innovative solutions across various industries.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-10 flex flex-wrap gap-4 justify-center">
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            All Projects
          </button>
          {[
            "Urban Planning",
            "Environmental Monitoring",
            "Precision Agriculture",
            "Infrastructure"
          ].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{project.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mr-2 mb-1">
                    {project.technologies[0]}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mr-2 mb-1">
                    {project.technologies[1]}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mr-2 mb-1">
                    {project.technologies[2]}
                  </span>
                </div>

                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Duration:</strong> {project.duration}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;