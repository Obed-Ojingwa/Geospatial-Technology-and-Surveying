import { useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center" aria-label="Geospatial Technology and Surveying home">
          <img src="/service_logo.png" alt="Geospatial Technology and Surveying" className="h-11 w-auto" />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          <Link href="#services">Services</Link>
          <Link href="#about">About Us</Link>
          <Link href="#training">Training</Link>
          <Link href="#portfolio">Projects</Link>
          <Link href="#blog">Insights</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <a href="#contact" className="rounded-md bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200">Login</a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-[#2876ed] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c64d1]">Get started <FiArrowRight /></a>
        </div>
        <button type="button" className="rounded-md p-2 text-slate-700 sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-4 pt-2 sm:hidden">
          {['#services', '#about', '#training', '#portfolio', '#blog', '#contact'].map((href) => (
            <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700">
              {href.slice(1).replace('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())}
            </a>
          ))}
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#2876ed] px-4 py-2.5 text-sm font-semibold text-white">Get started <FiArrowRight /></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Link = ({ href, children }: { href:string; children:React.ReactNode }) => {
  return (
    <a
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#2876ed]"
    >
      {children}
    </a>
  );
};