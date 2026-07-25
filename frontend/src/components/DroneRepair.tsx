import { FaTools, FaWrench, FaHeadset, FaPlane, FaStore } from 'react-icons/fa';

const droneRepairServices = [
  {
    title: 'Diagnostic & Troubleshooting',
    icon: <FaTools />,
    description: 'Comprehensive diagnosis of drone systems, including motors, ESCs, flight controllers, and sensors to identify issues accurately.'
  },
  {
    title: 'Repair & Component Replacement',
    icon: <FaWrench />,
    description: 'Expert repair services for frames, propellers, motors, gimbals, cameras, and electronic components using genuine parts.'
  },
  {
    title: 'Firmware & Software Updates',
    icon: <FaHeadset />,
    description: 'Updating firmware, calibrating sensors, and configuring flight controllers for optimal performance and safety.'
  },
  {
    title: 'Maintenance & Tune-ups',
    icon: <FaPlane />,
    description: 'Regular maintenance packages to keep your drone in peak condition, including cleaning, balancing, and performance checks.'
  },
  {
    title: 'Custom Builds & Upgrades',
    icon: <FaStore />,
    description: 'Building custom drones for specific applications and upgrading existing platforms with advanced payloads and capabilities.'
  }
];

const DroneRepair = () => {
  return (
    <section id="drone-repair" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Drone Repair Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {droneRepairServices.map((service, idx) => (
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

export default DroneRepair;