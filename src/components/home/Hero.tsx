
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

const Hero = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-white/70" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80')] bg-cover bg-center"
          style={{ opacity: 0.2 }}
          aria-hidden="true"
        />
      </div>

      <div className="solar-container pt-32 lg:pt-44 pb-20 relative">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block px-3 py-1 bg-tirupati-purple/10 text-tirupati-purple font-medium text-sm rounded-full mb-5">
              Powering a Sustainable Future
            </span>
          </div>
          
          <h1 
            className={`font-display font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            Premium Solar Solutions for a 
            <span className="text-tirupati-blue"> Brighter</span> Tomorrow
          </h1>
          
          <p 
            className={`text-xl text-gray-600 mb-10 max-w-2xl transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            Tirupati Enterprises offers high-quality solar products and builds strong 
            partnerships to create a more sustainable and energy-efficient world.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            <CustomButton
              variant="primary"
              size="lg"
              onClick={() => navigate('/products')}
              icon={<ArrowRight size={18} />}
            >
              Explore Products
            </CustomButton>
            
            <CustomButton
              variant="secondary"
              size="lg"
              onClick={() => navigate('/partners')}
            >
              Our Partners
            </CustomButton>
          </div>
        </div>

        {/* Floating elements */}
        <div 
          className={`absolute -right-32 top-40 w-96 h-96 bg-tirupati-blue/5 rounded-full blur-3xl transition-all duration-1000 ${
            loaded ? 'opacity-70' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        
        <div 
          className={`absolute right-24 md:right-1/4 top-1/3 w-24 h-24 bg-tirupati-lightblue/20 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-80' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        
        <div 
          className={`absolute right-1/3 bottom-1/4 w-40 h-40 bg-tirupati-purple/10 rounded-full blur-2xl transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-60' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
