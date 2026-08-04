import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog posts data - in a real app, this would come from an API or CMS
  const posts = [
    {
      title: 'How Drones Are Revolutionizing Land Surveying',
      excerpt: 'Discover the latest advancements in drone technology that are making land surveys faster, safer, and more accurate.',
      date: 'May 15, 2024',
      image: 'https://images.unsplash.com/photo-1520545534574-8eedce55d276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwxfHxkcn9lfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=800',
      slug: 'how-drones-are-revolutionizing-land-surveying',
      content: `
        <p>Drone technology has revolutionized the field of land surveying in recent years, offering unprecedented levels of efficiency, accuracy, and safety. Traditional surveying methods often required surveyors to navigate difficult terrain on foot, which was time-consuming and potentially hazardous.</p>

        <p>With drones, surveyors can now capture aerial imagery and LiDAR data from hard-to-reach areas quickly and safely. This technology has opened up new possibilities for:</p>
        <ul>
          <li>Topographic mapping of large areas</li>
          <li>Construction site monitoring</li>
          <li>Infrastructure inspection</li>
          <li>Environmental monitoring</li>
          <li>Disaster assessment and response</li>
        </ul>

        <p>Modern surveying drones equipped with RTK (Real-Time Kinematic) GPS can achieve centimeter-level accuracy, making them suitable for professional surveying applications. The data collected can be processed to create detailed 3D models, orthomosaic maps, and contour maps that are invaluable for engineers, architects, and land developers.</p>

        <p>As drone technology continues to advance with longer flight times, better cameras, and more sophisticated sensors, we can expect even more innovative applications in the field of geospatial surveying.</p>
      `
    },
    {
      title: 'Understanding GIS: From Basics to Advanced Applications',
      excerpt: 'A comprehensive guide to Geographic Information Systems and how they empower decision-making across industries.',
      date: 'Apr 22, 2024',
      image: 'https://images.unsplash.com/photo-1551697625-9b3e9a55d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxnaXN8ZW58MHx8fHwxNzIxNDU2MDAwcHA&ixlib=rb-4.0.3&q=80&w=800',
      slug: 'understanding-gis-from-basics-to-advanced-applications',
      content: `
        <p>Geographic Information Systems (GIS) have transformed the way we understand and interact with the world around us. At its core, GIS is a framework for gathering, managing, and analyzing spatial and geographic data.</p>

        <p>What makes GIS so powerful is its ability to:</p>
        <ul>
          <li>Visualize spatial data in maps and 3D scenes</li>
          <li>Analyze spatial relationships and patterns</li>
          <li>Model complex geographical processes</li>
          <li>Support data-driven decision making</li>
        </ul>

        <p>GIS technology is used across a wide range of industries including:</p>
        <ul>
          <li>Urban planning and development</li>
          <li>Environmental management and conservation</li>
          <li>Disaster response and emergency management</li>
          <li>Transportation and logistics</li>
          <li>Natural resource management</li>
          <li>Public health and epidemiology</li>
        </ul>

        <p>Modern GIS platforms incorporate advanced technologies such as:</p>
        <ul>
          <li>Real-time data integration from IoT sensors</li>
          <li>Artificial intelligence and machine learning for pattern recognition</li>
          <li>Cloud-based collaboration and sharing</li>
          <li>Augmented reality for immersive visualization</li>
        </ul>

        <p>Whether you're a beginner looking to understand the basics or an experienced professional seeking to apply advanced techniques, GIS offers powerful tools for solving complex spatial problems.</p>
      `
    },
    {
      title: 'The Future of Bathymetric Surveying with Autonomous Vessels',
      excerpt: 'Exploring how autonomous surface vessels are transforming underwater mapping and marine construction.',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxzdXJ2ZXljeSUyMGltYWdlfGVufDB8fHx8MTcyMTR1NTAwMHww&ixlib=rb-4.0.3&q=80&w=800',
      slug: 'the-future-of-bathymetric-surveying-with-autonomous-vessels',
      content: `
        <p>Bathymetric surveying, the measurement of water depth and mapping of underwater topography, is undergoing a revolutionary transformation with the advent of autonomous surface vessels (ASVs). These unmanned boats are changing how we map oceans, lakes, and rivers, offering significant advantages over traditional manned survey vessels.</p>

        <p>Key benefits of ASV-based bathymetric surveying include:</p>
        <ul>
          <li>Increased safety by removing personnel from hazardous marine environments</li>
          <li>Extended operational endurance for continuous 24/7 operations</li>
          <li>Reduced operational costs compared to manned vessels</li>
          <li>Consistent data quality through precise, repeatable survey patterns</li>
          <li>Access to shallow or confined waters unsuitable for larger vessels</li>
        </ul>

        <p>Modern ASVs are equipped with sophisticated sensor packages that typically include:</p>
        <ul>
          <li>Multibeam echosounders for high-resolution bathymetry</li>
          <li>Side-scan sonar for seabed imaging</li>
          <li>Sub-bottom profilers for subsurface sediment analysis</li>
          <li>LiDAR for above-water feature mapping</li>
          <li>High-precision GNSS for precise positioning</li>
        </ul>

        <p>As autonomy technology continues to advance, we're seeing the emergence of swarm capabilities where multiple ASVs work together to survey large areas more efficiently. Combined with advances in battery technology and solar power, some systems can now operate for weeks or even months without human intervention.</p>

        <p>The future of bathymetric surveying lies in the integration of autonomous vessels with artificial intelligence for real-time data processing and adaptive mission planning, promising to unlock new insights into our underwater world.</p>
      `
    }
  ];

  // Find the post matching the slug
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
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
          <a href="/blog" className="text-sm text-primary hover:underline">
            ← Back to Blog
          </a>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-primary mb-6">{post.title}</h1>

            <div className="prose prose-lg prose-neutral max-w-none">
              {/* Using dangerouslySetInnerHTML for simplicity - in a real app, you'd want to sanitize this */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;