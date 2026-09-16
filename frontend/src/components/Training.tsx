import { FaPlane, FaArrowRight } from 'react-icons/fa';

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
    <section id="training" className="relative overflow-hidden bg-[#efefef] py-16 text-[#0d2d4d]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(103,103,103,0.55) 1.4px, transparent 1.8px)',
          backgroundSize: '23px 23px',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <span className="rounded-full bg-[#2c9eea] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            TECHNICAL UPSKILLING
          </span>
        </div>

        <h2 className="mb-12 text-center text-[2.6rem] font-black leading-none tracking-[-0.05em] text-[#0d2d4d] sm:text-[3.2rem]">
          Training Programs
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="flex min-h-[295px] flex-col justify-between rounded-[1.8rem] border border-[#d8e3ef] bg-[#0b233e] p-6 pb-7 text-white shadow-[0_12px_25px_rgba(11,35,62,0.12)]"
            >
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-[2.2rem] text-[#8ecbff]">
                  <FaPlane />
                </div>

                <h3 className="mb-4 text-[1.12rem] font-bold leading-snug text-white sm:text-[1.55rem]">
                  {prog.level} Level Training
                </h3>

                <p className="mb-5 text-[1rem] font-medium text-[#dfeaf7]">
                  Duration: <span className="text-white">{prog.duration}</span>
                </p>

                <ul className="space-y-3 text-[0.95rem] text-[#e9f2ff]">
                  {prog.topics.map((topic, tdx) => (
                    <li key={tdx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center text-[#8ecbff]">
                        <FaArrowRight className="text-[0.85rem]" />
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-[#2c9eea] px-7 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(44,158,234,0.35)] transition hover:brightness-105">
            Visit the Academy
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Training;