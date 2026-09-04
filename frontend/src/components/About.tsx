import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-copy">
          <span className="about-eyebrow">WHO WE ARE</span>
          <h2>About Us</h2>
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
          <a href="#contact" className="about-cta">
            Contact Us <FiArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="about-visual" aria-label="Terrabyte field surveying team and company strengths">
          <div className="about-image-stage">
            <img src="/gis_drone.jpeg" alt="Terrabyte surveyor working with field equipment" />
          </div>
          <div className="about-proof about-proof-top-left">
            <FiCheckCircle aria-hidden="true" />
            <span>Data That Drives<br />Results</span>
          </div>
          <div className="about-proof about-proof-top-right">
            <FiCheckCircle aria-hidden="true" />
            <span>Innovation at<br />Work</span>
          </div>
          <div className="about-proof about-proof-bottom-left">
            <FiCheckCircle aria-hidden="true" />
            <span>Solutions Made<br />for You</span>
          </div>
          <div className="about-proof about-proof-bottom-right">
            <FiCheckCircle aria-hidden="true" />
            <span>Expertise You Can<br />Trust</span>
          </div>
          <div className="about-proof about-proof-bottom-center">
            <FiCheckCircle aria-hidden="true" />
            <span>Empowering<br />Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;