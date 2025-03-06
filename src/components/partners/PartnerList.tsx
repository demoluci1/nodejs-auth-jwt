
import React from 'react';
import PartnerCard from './PartnerCard';
import { Partner } from './types';
import CustomButton from '../ui/CustomButton';

interface PartnerListProps {
  partners: Partner[];
  selectedPartner: number | null;
  onPartnerClick: (partnerId: number) => void;
  isLoading: boolean;
  searchTerm: string;
  clearSearch: () => void;
}

const PartnerList: React.FC<PartnerListProps> = ({
  partners,
  selectedPartner,
  onPartnerClick,
  isLoading,
  searchTerm,
  clearSearch
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
            <div className="h-32 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-5 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (partners.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl shadow-sm animate-fade-in">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No partners found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search terms or selecting a different category.
        </p>
        <CustomButton variant="outline" onClick={clearSearch}>
          Clear Search
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {partners.map((partner, index) => (
        <PartnerCard 
          key={partner.id}
          partner={partner}
          isSelected={selectedPartner === partner.id}
          onClick={() => onPartnerClick(partner.id)}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};

export default PartnerList;
