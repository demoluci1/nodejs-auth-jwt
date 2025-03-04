
import { NavLink } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="solar-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-solar-yellow" />
              <div className="font-display">
                <span className="font-bold text-xl block leading-none">Tirupati</span>
                <span className="text-sm text-solar-green block leading-tight">Enterprises</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Tirupati Enterprises is dedicated to providing high-quality solar products and building 
              strong partnerships to create a more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-solar-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-solar-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-solar-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-solar-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/partners" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Partners
                </NavLink>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-solar-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products#panels" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Solar Panels
                </a>
              </li>
              <li>
                <a href="/products#inverters" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Inverters
                </a>
              </li>
              <li>
                <a href="/products#batteries" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Batteries
                </a>
              </li>
              <li>
                <a href="/products#accessories" className="text-gray-600 hover:text-solar-blue transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-solar-green mt-0.5" />
                <span className="text-gray-600">
                  123 Solar Avenue, Greenville, Earth
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-solar-green" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-solar-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-solar-green" />
                <a href="mailto:info@tirupatienterprises.com" className="text-gray-600 hover:text-solar-blue transition-colors">
                  info@tirupatienterprises.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Tirupati Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
