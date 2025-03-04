
import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Quality Products',
    description: 'We offer only the highest quality solar products from trusted manufacturers.',
  },
  {
    title: 'Expert Knowledge',
    description: 'Our team brings years of experience and expertise in the renewable energy sector.',
  },
  {
    title: 'Strong Partnerships',
    description: 'We collaborate with industry leaders to provide the best solutions to our customers.',
  },
  {
    title: 'Customer Focus',
    description: 'We prioritize customer satisfaction and build long-term relationships.',
  },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-solar-blue/5">
      <div className="solar-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-3 py-1 bg-solar-blue/10 text-solar-blue font-medium text-sm rounded-full mb-3">
              About Us
            </span>
            <h2 className="font-display font-semibold text-gray-900 mb-6">
              Committed to a Sustainable Future
            </h2>
            <p className="text-gray-600 mb-6">
              At Tirupati Enterprises, we believe in the power of solar energy to transform the way we 
              power our world. Our mission is to provide high-quality solar products and build strong 
              partnerships to create a more sustainable and energy-efficient future.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience in the renewable energy sector, we've established ourselves as a 
              trusted provider of solar solutions. Our commitment to quality, innovation, and customer 
              satisfaction is at the heart of everything we do.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-3"
                  style={{ transitionDelay: `${200 * index}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-solar-green/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-solar-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80" 
                alt="Solar panels installation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 bg-solar-yellow/20 rounded-full mb-4">
                <span className="text-2xl font-bold text-solar-yellow">10+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Years of Excellence</h3>
              <p className="text-sm text-gray-600">
                Over a decade of experience providing premium solar solutions and building trusted partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
