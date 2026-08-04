import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Engr. Adeola Johnson",
    title: "Project Manager",
    company: "Lagos State Public Works Corporation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxibHVzc2luZXJ8ZW58MHx8fHwxNjA3OTE2Mzc3&ixlib=rb-1.2.1&q=80&w=400",
    rating: 5,
    content: "Terrabyte Global Ltd delivered exceptional drone mapping services for our infrastructure project. Their accuracy and professionalism exceeded our expectations. The 3D models they created helped us identify potential issues before construction began, saving us significant time and resources.",
    date: "March 2023",
    location: "Lagos, Nigeria"
  },
  {
    id: 2,
    name: "Dr. Chinedu Okoro",
    title: "Director of Environmental Services",
    company: "Federal Ministry of Environment",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxhdmF0YXJ8ZW58MHx8fHwxNjA3OTE2Mzk0&ixlib=rb-1.2.1&q=80&w=400",
    rating: 5,
    content: "Their coastal erosion monitoring study provided invaluable data for our climate change adaptation planning. The team's expertise in remote sensing and GIS analysis was evident throughout the project. We've since engaged them for additional environmental monitoring projects.",
    date: "January 2023",
    location: "Abuja, Nigeria"
  },
  {
    id: 3,
    name: "Mrs. Fatima Bello",
    title: "CEO",
    company: "GreenField Agro Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxmbWFsZSUyMGF2YXRhcnx8fHx8fHwxNjA3OTE2NDAz&ixlib=rb-1.2.1&q=80&w=400",
    rating: 4,
    content: "The precision agriculture implementation transformed our farming operations. Their drone-based multispectral analysis helped us optimize fertilizer usage and increase crop yields. The team was knowledgeable, responsive, and delivered actionable insights we could implement immediately.",
    date: "November 2022",
    location: "Oyo State, Nigeria"
  },
  {
    id: 4,
    name: "Engr. Michael Okonkwo",
    title: "Senior Bridge Engineer",
    company: "Federal Ministry of Works",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQyNzl8MHwxfHNlYXJjaHwzfHxzaGF2aW5nJTIwYWZyb2NlfGVufDB8fHx8MTYwNzkxNjQyNA..&ixlib=rb-1.2.1&q=80&w=400",
    rating: 5,
    content: "Their bridge inspection services using drone photogrammetry were revolutionary for our maintenance planning. They identified structural issues that weren't visible through traditional inspection methods. The detailed reports and 3D models helped us prioritize repairs effectively.",
    date: "September 2022",
    location: "Nationwide, Nigeria"
  }
];

const clientLogos = [
  {
    name: "Lagos State Government",
    image: "https://via.placeholder.com/150x80/2563eb/ffffff?text=LSG",
    alt: "Lagos State Government"
  },
  {
    name: "Federal Ministry of Works",
    image: "https://via.placeholder.com/150x80/dc2626/ffffff?text=FMW",
    alt: "Federal Ministry of Works"
  },
  {
    name: "GreenField Agro",
    image: "https://via.placeholder.com/150x80/059669/ffffff?text=GFA",
    alt: "GreenField Agro Solutions"
  },
  {
    name: "Environmental Protection Agency",
    image: "https://via.placeholder.com/150x80/7c3aed/ffffff?text=EPA",
    alt: "Environmental Protection Agency"
  },
  {
    name: "Nigerian Communications Commission",
    image: "https://via.placeholder.com/150x80/ea580c/ffffff?text=NCC",
    alt: "Nigerian Communications Commission"
  },
  {
    name: "Nigerian Geological Survey Agency",
    image: "https://via.placeholder.com/150x80/16a34a/ffffff?text=NGSA",
    alt: "Nigerian Geological Survey Agency"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Hear from satisfied clients who have benefited from our geospatial expertise and innovative solutions.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-12 space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} photo`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                </div>
                <div>
                  <div className="flex items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
                    <div className="flex items-baseline ml-4 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className={star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                <div className="text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <span className="mx-2">•</span>
                  <span>{testimonial.location}</span>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-semibold text-center text-primary mb-8">Trusted By Leading Organizations</h3>
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;