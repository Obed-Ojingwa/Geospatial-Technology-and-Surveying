import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Training from './components/Training';
import Store from './components/Store';
import Blog from './components/Blog';
import Event from './components/Event';
import Career from './components/Career';
import DroneRepair from './components/DroneRepair';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BlogDetail from './pages/BlogDetail';
import EventDetail from './pages/EventDetail';
import StorePage from './pages/StorePage';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* Home page with all sections */}
          <Route path="/" element={
            <>
              <main>
                <section id="home">
                  <Hero />
                </section>
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Training />
                <Store />
                <Blog />
                <Event />
                <Career />
                <DroneRepair />
                <ContactForm />
              </main>
              <Footer />
            </>
          } index />

          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Event routes */}
          <Route path="/events" element={<Event />} />
          <Route path="/event/:slug" element={<EventDetail />} />

          {/* Store routes */}
          <Route path="/store" element={<StorePage />} />

          {/* Redirect old store link */}
          <Route path="/store/*" element={<Navigate to="/store" replace />} />

          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;