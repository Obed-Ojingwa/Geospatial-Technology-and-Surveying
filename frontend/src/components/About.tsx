import { FiArrowRight, FiCheck } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-copy">
            <div className="about-description">
            <p>
              At Terrabyte Global Limited, we provide comprehensive geospatial,
              surveying, and spatial intelligence solutions that empower informed
              decision-making across infrastructure, environmental, and
              technology-driven sectors. By combining advanced geospatial
              technologies, industry-standard methodologies, and a team of skilled
              professionals, we deliver accurate, reliable, and actionable spatial
              insights.
            </p>
            <p>
              Our drone surveillance and inspection services deploy cutting-edge
              unmanned aerial vehicles (UAV) for site monitoring, infrastructure
              assessment, security surveillance, and operational analysis.
            </p>
            <p>
              We specialize in geospatial data acquisition using both aerial and
              ground-based platforms, and in remote sensing and satellite data
              processing, transforming complex datasets into actionable insights
              for land-use analysis, environmental monitoring, and natural resource
              management.
            </p>
            </div>
            <a href="#contact" className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#2876ed] px-4 py-2.5 text-sm font-semibold text-white">
              Contact Us <FiArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="about-strengths">
            <h3>Why Choose Us</h3>
            <ul>
              <li><FiCheck aria-hidden="true" /><span>Innovation at Work</span></li>
              <li><FiCheck aria-hidden="true" /><span>Accurate Spatial Insights</span></li>
              <li><FiCheck aria-hidden="true" /><span>Industry-Standard Expertise</span></li>
              <li><FiCheck aria-hidden="true" /><span>Reliable Field Solutions</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;