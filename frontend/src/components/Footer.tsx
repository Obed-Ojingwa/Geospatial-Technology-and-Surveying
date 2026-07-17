const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="Terrabyte Global Ltd" className="h-10 w-auto" />
            <span className="font-bold text-xl">Terrabyte Global Ltd</span>
          </div>
          <p className="text-gray-200">
            Providing cutting-edge geospatial and surveying solutions across Africa.
          </p>
          <div className="mt-4 space-x-2">
            {/* Social icons placeholder */}
            <a href="#" className="hover:text-white/80 transition-colors">
              <span aria-label="Facebook">📘</span>
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <span aria-label="Twitter">🐦</span>
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <span aria-label="Instagram">📸</span>
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <span aria-label="LinkedIn">💼</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
            <li><a href="#store" className="hover:text-white transition-colors">Store</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#event" className="hover:text-white transition-colors">Events</a></li>
            <li><a href="#career" className="hover:text-white transition-colors">Career</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#services" className="hover:text-white transition-colors">Geospatial Survey</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Drone Mapping</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Land Surveying</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">GIS and Remote Sensing</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Buy Equipment and Software</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Geophysical Survey</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Consultancy</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Drone Repair</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Spatial Analysis and Modelling</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>
          <p className="text-gray-200 mb-2">
            Stephen Avenue, Mission House, Lotto Area 6, Obafemi Owode, Ogun, Nigeria
          </p>
          <p className="text-gray-200 mb-2">
            <span className="block">johnabodunwa@gmail.com</span>
            <span className="block">+2348103791497</span>
          </p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Terrabyte Global Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;