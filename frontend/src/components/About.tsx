const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">About Us</h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 items-start">
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Terrabyte Global Limited, we provide comprehensive geospatial,
              surveying, and spatial intelligence solutions that empower informed
              decision-making across infrastructure, environmental, and
              technology-driven sectors. By combining advanced geospatial
              technologies, industry-standard methodologies, and a team of skilled
              professionals, we deliver accurate, reliable, and actionable spatial
              insights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our drone surveillance and inspection services deploy cutting-edge
              unmanned aerial vehicles (UAV) for site monitoring, infrastructure
              assessment, security surveillance, and operational analysis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We specialize in geospatial data acquisition using both aerial and
              ground-based platforms, and in remote sensing and satellite data
              processing, transforming complex datasets into actionable insights
              for land-use analysis, environmental monitoring, and natural resource
              management.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                  <span aria-hidden="true">✓</span>
                </span>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">Expertise You Can Trust</h4>
                  <p className="text-gray-600">
                    From land and geophysical surveys to bathymetry and spatial
                    analysis, we deliver complete geospatial solutions with
                    precision and insight.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                  <span aria-hidden="true">✓</span>
                </span>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">Innovation at Work</h4>
                  <p className="text-gray-600">
                    Our drones, remote sensing technologies, and GIS systems
                    capture and process data with pinpoint accuracy, enabling
                    smarter decision-making.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                  <span aria-hidden="true">✓</span>
                </span>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">Solutions Made for You</h4>
                  <p className="text-gray-600">
                    Every project is unique. That’s why we tailor aerial
                    photography, data modeling, and drone inspections to your
                    exact requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                  <span aria-hidden="true">✓</span>
                </span>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">Empowering Professionals</h4>
                  <p className="text-gray-600">
                    Through advanced training in GIS, drone operations, and
                    geospatial technologies, we help professionals stay ahead in a
                    rapidly evolving field.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 bg-primary/10 text-primary rounded-full p-2">
                  <span aria-hidden="true">✓</span>
                </span>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-800">Data That Drives Results</h4>
                  <p className="text-gray-600">
                    Terrabyte provides reliable, high-quality data and analysis,
                    giving your projects the insights needed to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;