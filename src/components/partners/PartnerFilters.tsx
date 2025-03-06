
import React from 'react';
import { Filter, Search, X } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

// Partner categories
export const categories = [
  { id: 'all', name: 'All Partners' },
  { id: 'manufacturer', name: 'Manufacturers' },
  { id: 'technology', name: 'Technology Providers' },
  { id: 'storage', name: 'Storage Solutions' },
  { id: 'installer', name: 'Installers' },
  { id: 'consultant', name: 'Consultants' },
  { id: 'finance', name: 'Financial Services' },
];

interface PartnerFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const PartnerFilters: React.FC<PartnerFiltersProps> = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search partners..."
              className="pl-10 pr-10 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-solar-green/20 focus:border-solar-green/60 outline-none transition-all duration-300"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={clearSearch}
              >
                <X size={18} className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          <div className="md:w-auto w-full">
            <CustomButton
              variant="outline"
              size="md"
              className="w-full md:w-auto border-2 border-tirupati-blue font-medium"
              icon={<Filter size={18} />}
              iconPosition="left"
              onClick={() => setShowFilters(!showFilters)}
              isActive={showFilters}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className={`mb-8 overflow-x-auto transition-all duration-300 ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex space-x-4 min-w-max p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-sm ${
                activeCategory === category.id
                  ? 'bg-solar-green text-white shadow-md shadow-green-300/30 transform scale-105 border-2 border-green-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnerFilters;
