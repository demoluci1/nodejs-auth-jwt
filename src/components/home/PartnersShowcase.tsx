
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

// Sample partners data
const partners = [
  {
    id: 1,
    name: 'SolarTech Industries',
    logo: 'https://via.placeholder.com/150?text=SolarTech',
    description: 'Leading manufacturer of high-efficiency solar cells and modules.',
  },
  {
    id: 2,
    name: 'PowerGrid Solutions',
    logo: 'https://via.placeholder.com/150?text=PowerGrid',
    description: 'Specializing in smart grid technologies and energy management systems.',
  },
  {
    id: 3,
    name: 'GreenEnergy Systems',
    logo: 'https://via.placeholder.com/150?text=GreenEnergy',
    description: 'Innovative provider of renewable energy solutions and storage systems.',
  },
  {
    id: 4,
    name: 'SunPower Innovations',
    logo: 'https://via.placeholder.com/150?text=SunPower',
    description: 'Developer of cutting-edge solar technologies and installation services.',
  },
  {
    id: 5,
    name: 'EcoSmart Solutions',
    logo: 'https://via.placeholder.com/150?text=EcoSmart',
    description: 'Sustainable energy consulting and implementation services.',
  },
  {
    id: 6,
    name: 'BrightFuture Corp',
    logo: 'https://via.placeholder.com/150?text=BrightFuture',
    description: 'Renewable energy financing and investment solutions.',
  },
];

const PartnersShowcase = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-solar-green/10 text-solar-green font-medium text-sm rounded-full mb-3">
            Our Partners
          </span>
          <h2 className="font-display font-semibold text-gray-900 mb-4">
            Collaborating with Industry Leaders
          </h2>
          <p className="text-gray-600">
            We partner with the best in the industry to provide high-quality solar solutions
            and drive innovation in renewable energy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`group bg-white rounded-xl p-6 text-center transition-all duration-500 hover:shadow-md border border-transparent hover:border-solar-green/20 relative overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-solar-green/5 to-tirupati-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-solar-green/10 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Partner content */}
              <div className="h-24 flex items-center justify-center mb-4 relative z-10">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={`max-h-full max-w-[120px] object-contain transition-all duration-500 ${
                    hoveredPartner === partner.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 relative z-10">{partner.name}</h3>
              <p className="text-gray-600 text-sm mb-4 relative z-10">{partner.description}</p>
              
              {/* Hover state info button */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4 pt-8 transform transition-all duration-300 ${
                hoveredPartner === partner.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <button 
                  onClick={() => navigate('/partners')}
                  className="text-solar-green text-sm font-medium flex items-center justify-center gap-1 mx-auto hover:text-green-600"
                >
                  <Heart size={14} className="inline" /> View Details <ArrowRight size={14} className="inline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CustomButton
            variant="solar"
            onClick={() => navigate('/partners')}
            icon={<Users size={18} />}
            iconPosition="left"
            className="shadow-lg shadow-solar-green/20 hover:shadow-xl hover:shadow-solar-green/20"
          >
            View All Partners
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
