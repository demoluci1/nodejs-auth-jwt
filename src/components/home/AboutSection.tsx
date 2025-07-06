
import { useEffect, useState, useRef } from 'react';
import { Users, Zap, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

const AboutSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    projects: 0,
    experience: 0,
    efficiency: 0
  });
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

  useEffect(() => {
    if (isVisible) {
      const targets = {
        customers: 5000,
        projects: 1200,
        experience: 15,
        efficiency: 98
      };

      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      const increments = {
        customers: targets.customers / steps,
        projects: targets.projects / steps,
        experience: targets.experience / steps,
        efficiency: targets.efficiency / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep >= steps) {
          setCounters(targets);
          clearInterval(timer);
        } else {
          setCounters({
            customers: Math.floor(increments.customers * currentStep),
            projects: Math.floor(increments.projects * currentStep),
            experience: Math.floor(increments.experience * currentStep),
            efficiency: Math.floor(increments.efficiency * currentStep)
          });
          currentStep++;
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "Over 5000 Satisfied Customers Nationwide", 
    "15+ Years of Industry Excellence",
    "Award-Winning Customer Service",
    "Partnerships with Leading Global Brands",
    "24/7 Technical Support & Maintenance"
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-br from-white via-gray-50/50 to-white">
      <div className="solar-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-solar-green/10 to-solar-blue/10 text-solar-green font-medium text-sm rounded-full mb-6">
              <Award className="w-4 h-4" />
              About Tirupati Enterprises
            </div>
            
            <h2 className="font-display font-bold text-gray-900 mb-6">
              Leading the Solar Revolution with 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-solar-blue to-solar-green">
                Innovation & Excellence
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Tirupati Enterprises has been at the forefront of India's solar energy transformation. 
              We combine cutting-edge technology with unmatched expertise to deliver sustainable energy solutions 
              that power homes, businesses, and communities across the nation.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-solar-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <CustomButton
                variant="primary"
                size="lg"
                onClick={() => navigate('/about')}
                icon={<ArrowRight size={18} />}
              >
                Learn More About Us
              </CustomButton>
              
              <CustomButton
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
              </CustomButton>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-solar-blue to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-solar-green to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {counters.projects.toLocaleString()}+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-solar-yellow to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {counters.experience}+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {counters.efficiency}%
                </div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
            
            {/* Feature Highlight */}
            <div className="bg-gradient-to-r from-solar-blue/5 to-solar-green/5 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-blue to-solar-green rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Industry Recognition</h3>
                  <p className="text-gray-600">Award-winning excellence in solar solutions</p>
                </div>
              </div>
              <p className="text-gray-700">
                Recognized as one of India's leading solar companies, we've received multiple industry awards 
                for innovation, quality, and customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
