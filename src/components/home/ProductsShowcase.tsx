
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Premium Solar Panel',
    category: 'Panel',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: 'High-efficiency solar panel with premium monocrystalline cells.',
    highlight: 'Efficiency Rating: 22.8%',
  },
  {
    id: 2,
    name: 'Advanced Inverter',
    category: 'Inverter',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Smart inverter with built-in monitoring and advanced energy management.',
    highlight: 'Warranty: 12 Years',
  },
  {
    id: 3,
    name: 'PowerStorage Battery',
    category: 'Battery',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba53aaf35?auto=format&fit=crop&q=80',
    description: 'High-capacity lithium battery with long cycle life and smart integration.',
    highlight: 'Capacity: 10 kWh',
  },
  {
    id: 4,
    name: 'Mounting System',
    category: 'Accessory',
    image: 'https://images.unsplash.com/photo-1511355954361-df5a865165a8?auto=format&fit=crop&q=80',
    description: 'Durable mounting system designed for various roof types and weather conditions.',
    highlight: 'Material: Anodized Aluminum',
  },
];

const ProductsShowcase = () => {
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
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-solar-blue/10 text-solar-blue font-medium text-sm rounded-full mb-3">
            Our Products
          </span>
          <h2 className="font-display font-semibold text-gray-900 mb-4">
            Premium Solar Products for Every Need
          </h2>
          <p className="text-gray-600">
            We offer a wide range of high-quality solar products, from efficient panels 
            to advanced inverters and reliable batteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700 hover:shadow-md ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-solar-green font-medium text-sm mb-4">{product.highlight}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-solar-blue font-medium text-sm hover:text-blue-700 transition-colors"
                >
                  View Details <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CustomButton
            variant="primary"
            onClick={() => navigate('/products')}
            icon={<ArrowRight size={18} />}
          >
            View All Products
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
