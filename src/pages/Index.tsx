
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import PartnersShowcase from '@/components/home/PartnersShowcase';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  useEffect(() => {
    // Animation for elements that should animate when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach((element) => {
        observer.observe(element);
      });
    };
    
    animateOnScroll();
    
    // Cleanup
    return () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        element.classList.remove('animated');
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductsShowcase />
        <PartnersShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
