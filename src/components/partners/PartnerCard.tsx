
import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { Partner } from './types';
import { categories } from './PartnerFilters';

interface PartnerCardProps {
  partner: Partner;
  isSelected: boolean;
  onClick: () => void;
  animationDelay: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partner, 
  isSelected, 
  onClick, 
  animationDelay 
}) => {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 
        ${isSelected
          ? 'border-solar-green ring-1 ring-solar-green/30 transform scale-[1.02]'
          : 'border-gray-100 hover:shadow-md hover:border-gray-200'
        } animate-fade-in`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-tirupati-blue/5 to-solar-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            Since {partner.yearFounded}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{partner.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-medium px-2 py-1 bg-solar-green/10 text-solar-green rounded-full flex items-center gap-1">
            <Briefcase size={12} /> {categories.find(c => c.id === partner.category)?.name || partner.category}
          </span>
          <span className="text-xs font-medium px-2 py-1 bg-tirupati-blue/10 text-tirupati-blue rounded-full flex items-center gap-1">
            <MapPin size={12} /> {partner.location.split(', ')[1] || partner.location}
          </span>
        </div>
        <button
          onClick={onClick}
          className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            isSelected
              ? 'bg-solar-green text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected ✓' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default PartnerCard;
