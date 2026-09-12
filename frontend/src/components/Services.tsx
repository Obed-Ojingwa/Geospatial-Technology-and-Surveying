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
    <section id="services" className="services-section">
      <div className="services-shell">
        <div className="services-heading">
          <h2>Our Services</h2>
          {/* <span className="services-arrow" aria-hidden="true" /> */}
        </div>

        <div className="services-featured-grid">
          {services.slice(0, 3).map((service, idx) => (
            <article key={service.title} className={`service-card service-card-${idx}`}>
              <div className="service-card-image" />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="services-more-grid">
          {services.slice(3).map((service) => (
            <article key={service.title} className="service-card service-card-compact">
              <div className="service-card-image" />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;