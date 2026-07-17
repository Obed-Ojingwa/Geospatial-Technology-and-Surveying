const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Terrabyte Global Ltd" className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary">Terrabyte Global Ltd</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#services">Services</Link>
          <Link href="#training">Training</Link>
          <Link href="#store">Store</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#event">Events</Link>
          <Link href="#career">Career</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#account">Account</Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button placeholder */}
          <button className="text-primary hover:text-primary-dark">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Simple link component
const Link = ({ href, children }: { href:string; children:React.ReactNode }) => {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
};