import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Training from './components/Training';
import Store from './components/Store';
import Blog from './components/Blog';
import Event from './components/Event';
import Career from './components/Career';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Services />
        <Training />
        <Store />
        <Blog />
        <Event />
        <Career />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default App;