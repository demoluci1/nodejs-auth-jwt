
import { ArrowRight, Play, Zap, Leaf, Sun } from 'lucide-react';
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-solar-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-solar-green/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-solar-yellow/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 right-1/4 animate-bounce delay-500">
          <Zap className="w-8 h-8 text-solar-yellow opacity-60" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-bounce delay-1000">
          <Leaf className="w-6 h-6 text-solar-green opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-1500">
          <Sun className="w-10 h-10 text-solar-blue opacity-60" />
        </div>
      </div>

      <div className="solar-container pt-32 lg:pt-44 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-solar-green/10 to-solar-blue/10 text-solar-green font-medium text-sm rounded-full mb-6 border border-solar-green/20">
                <div className="w-2 h-2 bg-solar-green rounded-full animate-pulse"></div>
                Powering a Sustainable Future
              </div>
            </div>
            
            <h1 className={`font-display font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              Transform Your World with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-solar-blue via-solar-green to-solar-yellow">
                Premium Solar Solutions
              </span>
            </h1>
            
            <p className={`text-xl text-gray-600 mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              Join thousands of satisfied customers who've made the switch to clean, renewable energy. 
              Tirupati Enterprises delivers cutting-edge solar technology with unmatched quality and service.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 mb-10 transition-all duration-700 delay-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-solar-blue">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-solar-green">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-solar-yellow">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
            
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <CustomButton
                variant="gradient"
                size="lg"
                onClick={() => navigate('/products')}
                icon={<ArrowRight size={20} />}
              >
                Explore Products
              </CustomButton>
              
              <CustomButton
                variant="outline"
                size="lg"
                onClick={() => navigate('/partners')}
                icon={<Play size={18} />}
                iconPosition="left"
              >
                Watch Demo
              </CustomButton>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-solar-blue/20 to-solar-green/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="w-24 h-24 text-solar-yellow mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Clean Energy</h3>
                    <p className="text-gray-600">For a Better Tomorrow</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-solar-green/10 rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-solar-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Eco-Friendly</div>
                    <div className="text-xs text-gray-600">100% Green Energy</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-solar-blue/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-solar-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">High Efficiency</div>
                    <div className="text-xs text-gray-600">Up to 22% Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
