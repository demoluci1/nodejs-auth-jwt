
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
    <section ref={sectionRef} className="section-padding bg-white">
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
              className={`bg-gray-50 rounded-xl p-6 text-center transition-all duration-700 hover:shadow-sm border border-transparent hover:border-gray-100 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-[120px] object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CustomButton
            variant="secondary"
            onClick={() => navigate('/partners')}
            icon={<ArrowRight size={18} />}
          >
            View All Partners
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
