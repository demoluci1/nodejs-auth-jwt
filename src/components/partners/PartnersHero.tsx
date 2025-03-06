
import React from 'react';
import { Users } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { useNavigate } from 'react-router-dom';

interface PartnersHeroProps {
  scrollToPartners: () => void;
}

const PartnersHero: React.FC<PartnersHeroProps> = ({ scrollToPartners }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-solar-green/10 to-tirupati-blue/10 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/c8ad6a03-84e2-4405-9328-c14c5be7127a.png')] bg-cover bg-center opacity-10"></div>
      <div className="solar-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-semibold text-gray-900 mb-4 animate-fade-down">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up">
            Collaborating with industry leaders to drive innovation and excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <CustomButton 
              variant="solar" 
              onClick={() => navigate('/contact')}
              icon={<Users size={18} />}
              iconPosition="left"
              className="shadow-lg shadow-green-300/30 text-white font-bold border-2 border-green-600 hover:bg-green-700"
            >
              Become a Partner
            </CustomButton>
            <CustomButton 
              variant="outline" 
              onClick={scrollToPartners}
              className="bg-white border-2 border-tirupati-blue hover:bg-tirupati-blue/5"
            >
              View All Partners
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
