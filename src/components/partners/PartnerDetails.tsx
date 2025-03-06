
import React from 'react';
import { ExternalLink, MapPin, Phone, Mail, Clock, Briefcase, Award, Globe, Building, Users, Heart } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { Partner } from './types';
import { categories } from './PartnerFilters';
import { useToast } from '@/hooks/use-toast';

interface PartnerDetailsProps {
  selectedPartner: Partner | undefined;
  onRandomPartnerSelect: () => void;
}

const PartnerDetails: React.FC<PartnerDetailsProps> = ({ selectedPartner, onRandomPartnerSelect }) => {
  const { toast } = useToast();

  const handleContactClick = (type: string, value: string) => {
    // Show toast notification
    toast({
      title: `Contact Information`,
      description: `${type}: ${value}`,
    });
  };

  if (!selectedPartner) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center border border-gray-100 sticky top-24 animate-fade-in">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Building className="h-8 w-8 text-tirupati-blue/70" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner Details</h3>
        <p className="text-gray-600 mb-6">
          Select a partner from the list to view detailed information and contact details.
        </p>
        <div className="text-center">
          <CustomButton 
            variant="outline" 
            size="sm"
            onClick={onRandomPartnerSelect}
          >
            View Random Partner
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24 animate-fade-in">
      <div className="h-48 bg-gradient-to-r from-tirupati-blue/5 to-solar-green/5 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/500x300?text=Partner')] bg-cover bg-center opacity-5"></div>
        <img
          src={selectedPartner.logo}
          alt={selectedPartner.name}
          className="max-h-full max-w-full object-contain relative z-10 animate-fade-in"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            {selectedPartner.name}
          </h3>
          <span className="text-sm font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            Est. {selectedPartner.yearFounded}
          </span>
        </div>
        <p className="text-gray-600 mb-6 italic border-l-4 border-solar-green/30 pl-3 py-1">
          {selectedPartner.description}
        </p>
        
        <div className="space-y-5 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
              <Building className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Category</h4>
                <p className="text-sm text-gray-600">
                  {categories.find(c => c.id === selectedPartner.category)?.name || selectedPartner.category}
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
              <Clock className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Established</h4>
                <p className="text-sm text-gray-600">{selectedPartner.yearFounded}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
            <MapPin className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Location</h4>
              <p className="text-sm text-gray-600">{selectedPartner.location}</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
            <Award className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Specialization</h4>
              <p className="text-sm text-gray-600">{selectedPartner.specialization}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 space-y-4">
          <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <Heart size={16} className="text-solar-green" /> Contact Information
          </h4>
          <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100 cursor-pointer"
               onClick={() => handleContactClick('Phone', selectedPartner.contactInfo.phone || '')}>
            <Phone className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
            <a href={`tel:${selectedPartner.contactInfo.phone}`} className="text-sm text-gray-600 hover:text-solar-green">
              {selectedPartner.contactInfo.phone}
            </a>
          </div>
          <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100 cursor-pointer"
               onClick={() => handleContactClick('Email', selectedPartner.contactInfo.email || '')}>
            <Mail className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
            <a href={`mailto:${selectedPartner.contactInfo.email}`} className="text-sm text-gray-600 hover:text-solar-green">
              {selectedPartner.contactInfo.email}
            </a>
          </div>
          <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100"
               onClick={() => handleContactClick('Address', selectedPartner.contactInfo.address || '')}>
            <MapPin className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              {selectedPartner.contactInfo.address}
            </p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <a 
            href={selectedPartner.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="col-span-2"
          >
            <CustomButton
              variant="solar"
              className="w-full"
              icon={<ExternalLink size={16} />}
            >
              Visit Website
            </CustomButton>
          </a>
          <CustomButton
            variant="outline"
            className="w-full"
            icon={<Globe size={16} />}
            onClick={() => {
              toast({
                title: "Partnership Information",
                description: `Learn more about our partnership with ${selectedPartner.name}`,
              });
            }}
          >
            Learn More
          </CustomButton>
          <CustomButton
            variant="outline"
            className="w-full"
            icon={<Mail size={16} />}
            onClick={() => {
              window.location.href = `mailto:${selectedPartner.contactInfo.email}`;
            }}
          >
            Contact
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
