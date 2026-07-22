import { FaPlane, FaMapMarkedAlt, FaCloud, FaCamera, FaSatellite, FaWater, FaLayerGroup, FaStore, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';

const services = [
  {
    title: 'Land Survey',
    icon: <FaMapMarkedAlt />,
    description: 'Accurate land boundary and topographic surveys for construction, land development, and legal purposes.'
  },
  {
    title: 'Drone Services',
    icon: <FaPlane />,
    description: 'Survey, mapping, surveillance, inspection, aerial photography and videography using advanced UAV technology.'
  },
  {
    title: 'Data Collection',
    icon: <FaCloud />,
    description: 'Comprehensive data acquisition from aerial, terrestrial, and satellite sources for comprehensive geospatial databases.'
  },
  {
    title: 'Aerial Photography & Videography',
    icon: <FaCamera />,
    description: 'High-resolution aerial imagery and video for monitoring, marketing, and documentation.'
  },
  {
    title: 'Remote Sensing & Satellite Processing',
    icon: <FaSatellite />,
    description: 'Processing of multispectral, hyperspectral, and radar imagery for environmental monitoring and resource management.'
  },
  {
    title: 'Bathymetry Survey',
    icon: <FaWater />,
    description: 'Underwater depth mapping for marine construction, dredging, and environmental studies.'
  },
  {
    title: 'Drone Data Processing & Mapping',
    icon: <FaLayerGroup />,
    description: 'Processing raw drone data into orthomosaics, DSM, DTM, and 3D models for analysis.'
  },
  {
    title: 'Geographic Information System (GIS)',
    icon: <FaMapMarkedAlt />,
    description: 'Design, implementation, and analysis of GIS solutions for spatial data management and decision making.'
  },
  {
    title: 'Store',
    icon: <FaStore />,
    description: 'Supply of geospatial software, hardware, drones, sensors, and related accessories.'
  },
  {
    title: 'Geophysical Survey',
    icon: <FaChartLine />,
    description: 'Subsurface investigations using magnetic, gravity, resistivity, and seismic methods.'
  },
  {
    title: 'Training',
    icon: <FaChalkboardTeacher />,
    description: 'Specialized training programs in GIS, drone operations, remote sensing, and geospatial analytics.'
  },
  {
    title: 'Spatial Analysis & Modelling',
    icon: <FaChartLine />,
    description: 'Advanced spatial statistics, modeling, and simulation for planning, risk assessment, and predictive analytics.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-6 flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;