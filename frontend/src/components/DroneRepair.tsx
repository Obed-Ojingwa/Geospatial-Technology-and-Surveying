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
    <section id="drone-repair" className="bg-[#efefef] py-16 text-[#0f2d52]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-[#36a1ea] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            WHAT WE DO
          </span>
        </div>

        <h2 className="mb-12 text-center text-[2.6rem] font-black leading-none tracking-[-0.05em] text-[#0d2d4d] sm:text-[3.1rem]">
          Drone Repair Services
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
          <div className="grid gap-6 sm:grid-cols-2">
            {droneRepairServices.slice(0, 4).map((service, idx) => (
              <div
                key={idx}
                className="flex min-h-[250px] flex-col justify-start rounded-[1.6rem] border border-[#dfe4ea] bg-[#f4f4f4] p-7 shadow-[0_5px_12px_rgba(15,45,82,0.04)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center text-[2.25rem] text-[#1d8ad6]">
                  {service.icon}
                </div>
                <h3 className="mb-3 max-w-[16rem] text-[1.05rem] font-bold leading-[1.3] text-[#0d2d4d] sm:text-[1.28rem]">
                  {service.title}
                </h3>
                <p className="max-w-[18rem] text-[0.92rem] leading-6 text-[#425f7d]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d7e1ea] bg-[#082a49] shadow-[0_10px_28px_rgba(15,45,82,0.15)] lg:min-h-[530px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(9, 24, 41, 0.18), rgba(9, 21, 35, 0.7)), url('https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1200&q=80')"
              }}
            />

            <div className="relative flex h-full min-h-[250px] flex-col justify-end p-6 sm:p-7 lg:min-h-[530px]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center text-[2.3rem] text-[#d9ebff] opacity-95">
                {droneRepairServices[2].icon}
              </div>

              <h3 className="max-w-[15rem] text-[1.05rem] font-bold leading-[1.3] text-white sm:text-[1.42rem]">
                {droneRepairServices[2].title}
              </h3>

              <p className="mt-3 max-w-[16rem] text-[0.92rem] leading-6 text-[#dfeaf7]">
                {droneRepairServices[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneRepair;