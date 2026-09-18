const Footer = () => {
  return (
    <footer className="bg-[#0d1e3d] text-white">
      <div className="mx-auto max-w-[1180px] px-5 pb-5 pt-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[290px] lg:pt-1">
            <div className="mb-3 flex items-center gap-3">
              <img src="/service_logo.png" alt="Terrabyte Global logo" className="h-[44px] w-[44px] rounded-full object-cover" />
              <div className="leading-none text-white">
                <div className="text-[1.6rem] font-black tracking-[0.01em]">TERRABYTE</div>
              </div>
            </div>

            <p className="text-[0.92rem] leading-6 text-white/90">
              Providing cutting-edge geospatial and surveying solutions across Africa.
            </p>

            <p className="mt-4 text-[0.92rem] leading-6 text-white/90">
              RC: 1234567 - Lagos, Nigeria
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:min-w-[620px] lg:justify-between">
            <div>
              <h3 className="mb-3 text-[1.05rem] font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-[0.9rem] text-white/80">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#training" className="hover:text-white">Training</a></li>
                <li><a href="#store" className="hover:text-white">Store</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#event" className="hover:text-white">Events</a></li>
                <li><a href="#career" className="hover:text-white">Career</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[1.05rem] font-semibold text-white">Services</h3>
              <ul className="space-y-2 text-[0.9rem] text-white/80">
                <li><a href="#services" className="hover:text-white">Geospatial Survey</a></li>
                <li><a href="#services" className="hover:text-white">Drone Mapping</a></li>
                <li><a href="#services" className="hover:text-white">Land Surveying</a></li>
                <li><a href="#services" className="hover:text-white">GIS and Remote Sensing</a></li>
                <li><a href="#services" className="hover:text-white">Buy Equipment and Software</a></li>
                <li><a href="#services" className="hover:text-white">Geophysical Survey</a></li>
                <li><a href="#services" className="hover:text-white">Consultancy</a></li>
                <li><a href="#services" className="hover:text-white">Spatial Analysis and Modelling</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[1.05rem] font-semibold text-white">Contact</h3>
              <div className="space-y-2 text-[0.9rem] leading-6 text-white/80">
                <p>
                  Stephen Avenue, Mission House, Lotto Area 6, Obafemi Owode, Ogun, Nigeria
                </p>
                <p className="mt-3">
                  <span className="block">johnabodunwa@gmail.com</span>
                  <span className="block">+2348103791497</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-4 text-[0.9rem] text-white/70">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>© {new Date().getFullYear()} Terrabyte Global Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;