import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample events data - in a real app, this would come from an API or CMS
  const events = [
    {
      title: 'Annual Geospatial Conference 2024',
      date: 'November 15-17, 2024',
      location: 'Abuja, Nigeria',
      description: 'Join industry leaders, researchers, and practitioners to discuss the latest trends in geospatial technology, drone applications, and spatial data science.',
      slug: 'annual-geospatial-conference-2024',
      content: `
        <p>The Annual Geospatial Conference 2024 is the premier gathering for professionals in the geospatial industry. This three-day event brings together experts from around the world to share knowledge, showcase innovations, and discuss the future of geospatial technology.</p>

        <h3>Conference Highlights:</h3>
        <ul>
          <li>Keynote presentations from industry leaders</li>
          <li>Technical workshops on cutting-edge geospatial technologies</li>
          <li>Exhibition hall featuring the latest geospatial tools and software</li>
          <li>Networking opportunities with peers and potential collaborators</li>
          <li>Student paper competitions and research presentations</li>
        </ul>

        <p>This year's conference will focus on emerging trends such as:</p>
        <ul>
          <li>Artificial Intelligence and Machine Learning in Geospatial Analysis</li>
          <li>Real-time GIS and IoT Integration</li>
          <li>Drone Technology and Autonomous Systems</li>
          <li>Climate Change Monitoring and Environmental Applications</li>
          <li>Smart Cities and Urban Planning</li>
        </ul>

        <p>Whether you're a seasoned professional, researcher, or student, the Annual Geospatial Conference 2024 offers valuable insights and opportunities to advance your career and expand your professional network.</p>
      `
    },
    {
      title: 'Drone Pilot Certification Workshop',
      date: 'Every first Saturday of the month',
      location: 'Lagos, Nigeria',
      description: 'Hands-on training for aspiring drone pilots covering flight safety, regulations, and aerial photography techniques.',
      slug: 'drone-pilot-certification-workshop',
      content: `
        <p>Our Drone Pilot Certification Workshop provides comprehensive training for individuals looking to become certified drone pilots. Held on the first Saturday of every month in Lagos, this hands-on workshop covers everything you need to know to operate drones safely and legally.</p>

        <h3>Workshop Curriculum:</h3>
        <ul>
          <li>Drone fundamentals and types of UAVs</li>
          <li>Flight principles and aerodynamics</li>
          <li>Pre-flight planning and risk assessment</li>
          <li>Basic and advanced flight maneuvers</li>
          <li>Emergency procedures and safety protocols</li>
          <li>Maintenance and troubleshooting</li>
          <li>Nigeria civil aviation regulations for drone operations</li>
          <li>Privacy considerations and ethical flying practices</li>
        </ul>

        <h3>Practical Training Components:</h3>
        <ul>
          <li>Indoor flight simulator training</li>
          <li>Outdoor flight practice with various drone models</li>
          <li>Aerial photography and videography techniques</li>
          <li>Mapping and surveying applications</li>
          <li>Inspection techniques for infrastructure and agriculture</li>
        </ul>

        <p>Upon successful completion of the workshop and practical assessment, participants receive a certificate of completion that demonstrates their competency as a drone pilot. The workshop is suitable for beginners with no prior experience as well as experienced pilots looking to refresh their skills and learn about current regulations.</p>

        <p>All necessary equipment is provided, including training drones, safety gear, and instructional materials. Participants are advised to wear comfortable clothing and closed-toe shoes for the outdoor practical sessions.</p>
      `
    },
    {
      title: 'GIS Day Celebration',
      date: 'November 20, 2024',
      location: 'Online & Lagos',
      description: 'Celebrate GIS Day with webinars, mapathons, and student competitions showcasing the power of geographic information systems.',
      slug: 'gis-day-celebration',
      content: `
        <p>GIS Day is an annual celebration of geographic information systems technology and its applications in our daily lives. This year's celebration features both online events and in-person activities in Lagos, offering something for everyone interested in the power of spatial data and mapping.</p>

        <h3>Event Schedule:</h3>
        <ul>
          <li><strong>9:00 AM - Opening Ceremony</strong>: Welcome address and overview of GIS Day activities</li>
          <li><strong>10:00 AM - Webinar Series</strong>:
            <ul>
              <li>"Introduction to GIS for Beginners"</li>
              <li>"Advanced Spatial Analysis Techniques"</li>
              <li>"GIS in Environmental Management"</li>
              <li>"Urban Planning and Smart Cities"</li>
            </ul>
          </li>
          <li><strong>1:00 PM - Mapathon Challenge</strong>: Collaborative mapping project to support local community initiatives</li>
          <li><strong>3:00 PM - Student Competition</strong>: GIS project presentations from local universities and colleges</li>
          <li><strong>4:30 PM - Closing Remarks</strong>: Awards ceremony and celebration highlights</li>
        </ul>

        <h3>What is GIS Day?</h3>
        <p>GIS Day is a global event that celebrates the technology of geographic information systems (GIS). It provides an opportunity for users of GIS technology to demonstrate real-world applications that are making a difference in our society.</p>

        <p>On GIS Day, organizations across the globe open their doors to schools, businesses, and the general public to showcase how GIS technology is used to:</p>
        <ul>
          <li>Make better decisions about resources and the environment</li>
          <li>Improve emergency response and disaster management</li>
          <li>Enhance transportation and logistics efficiency</li>
          <li>Support urban planning and infrastructure development</li>
          <li>Preserve cultural heritage and historical sites</li>
        </ul>

        <p>Whether you're a GIS professional, student, educator, or simply curious about mapping technology, GIS Day offers valuable insights into how spatial data shapes our world and improves our quality of life.</p>

        <p>All events are free and open to the public. Online webinars will be streamed via our YouTube channel and website. In-person activities in Lagos will take place at our headquarters office with refreshments provided.</p>
      `
    }
  ];

  // Find the event matching the slug
  const event = events.find(event => event.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
          <a href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a href="/events" className="text-sm text-primary hover:underline">
            ← Back to Events
          </a>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-500">{event.date}</span>
              <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">{event.location}</span>
            </div>

            <h1 className="text-3xl font-bold text-primary mb-6">{event.title}</h1>

            <p className="text-gray-600 mb-6">{event.description}</p>

            <div className="prose prose-lg prose-neutral max-w-none">
              {/* Using dangerouslySetInnerHTML for simplicity - in a real app, you'd want to sanitize this */}
              <div dangerouslySetInnerHTML={{ __html: event.content }} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default EventDetail;