
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink, MapPin, Phone, Mail, Clock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

// Sample partners data with extended information
const allPartners = [
  {
    id: 1,
    name: 'SolarTech Industries',
    logo: 'https://via.placeholder.com/300x150?text=SolarTech',
    description: 'Leading manufacturer of high-efficiency solar cells and modules.',
    category: 'manufacturer',
    yearFounded: 2005,
    location: 'San Jose, California',
    specialization: 'Monocrystalline and Polycrystalline Panels',
    website: 'https://example.com/solartech',
    contactInfo: {
      email: 'contact@solartech.example',
      phone: '+1 (555) 123-4567',
      address: '123 Innovation Drive, San Jose, CA 95134'
    }
  },
  {
    id: 2,
    name: 'PowerGrid Solutions',
    logo: 'https://via.placeholder.com/300x150?text=PowerGrid',
    description: 'Specializing in smart grid technologies and energy management systems.',
    category: 'technology',
    yearFounded: 2010,
    location: 'Boston, Massachusetts',
    specialization: 'Grid Integration and Control Systems',
    website: 'https://example.com/powergrid',
    contactInfo: {
      email: 'info@powergrid.example',
      phone: '+1 (555) 234-5678',
      address: '456 Tech Square, Boston, MA 02134'
    }
  },
  {
    id: 3,
    name: 'GreenEnergy Systems',
    logo: 'https://via.placeholder.com/300x150?text=GreenEnergy',
    description: 'Innovative provider of renewable energy solutions and storage systems.',
    category: 'storage',
    yearFounded: 2012,
    location: 'Austin, Texas',
    specialization: 'Battery Storage and Energy Management',
    website: 'https://example.com/greenenergy',
    contactInfo: {
      email: 'contact@greenenergy.example',
      phone: '+1 (555) 345-6789',
      address: '789 Renewable Lane, Austin, TX 78701'
    }
  },
  {
    id: 4,
    name: 'SunPower Innovations',
    logo: 'https://via.placeholder.com/300x150?text=SunPower',
    description: 'Developer of cutting-edge solar technologies and installation services.',
    category: 'installer',
    yearFounded: 2008,
    location: 'Phoenix, Arizona',
    specialization: 'Installation and Maintenance Services',
    website: 'https://example.com/sunpower',
    contactInfo: {
      email: 'hello@sunpower.example',
      phone: '+1 (555) 456-7890',
      address: '1010 Solar Avenue, Phoenix, AZ 85001'
    }
  },
  {
    id: 5,
    name: 'EcoSmart Solutions',
    logo: 'https://via.placeholder.com/300x150?text=EcoSmart',
    description: 'Sustainable energy consulting and implementation services.',
    category: 'consultant',
    yearFounded: 2015,
    location: 'Seattle, Washington',
    specialization: 'Energy Audits and Efficiency Planning',
    website: 'https://example.com/ecosmart',
    contactInfo: {
      email: 'info@ecosmart.example',
      phone: '+1 (555) 567-8901',
      address: '222 Sustainability Way, Seattle, WA 98101'
    }
  },
  {
    id: 6,
    name: 'BrightFuture Corp',
    logo: 'https://via.placeholder.com/300x150?text=BrightFuture',
    description: 'Renewable energy financing and investment solutions.',
    category: 'finance',
    yearFounded: 2011,
    location: 'Chicago, Illinois',
    specialization: 'Solar Financing and Investment',
    website: 'https://example.com/brightfuture',
    contactInfo: {
      email: 'invest@brightfuture.example',
      phone: '+1 (555) 678-9012',
      address: '333 Finance Plaza, Chicago, IL 60601'
    }
  },
  {
    id: 7,
    name: 'SolarEdge Technologies',
    logo: 'https://via.placeholder.com/300x150?text=SolarEdge',
    description: 'Provider of intelligent inverter solutions for solar power systems.',
    category: 'manufacturer',
    yearFounded: 2006,
    location: 'Denver, Colorado',
    specialization: 'Solar Inverters and Power Optimizers',
    website: 'https://example.com/solaredge',
    contactInfo: {
      email: 'support@solaredge.example',
      phone: '+1 (555) 789-0123',
      address: '444 Innovation Court, Denver, CO 80202'
    }
  },
  {
    id: 8,
    name: 'CleanTech Ventures',
    logo: 'https://via.placeholder.com/300x150?text=CleanTech',
    description: 'Venture capital firm focused on clean energy and sustainability innovations.',
    category: 'finance',
    yearFounded: 2009,
    location: 'San Francisco, California',
    specialization: 'Venture Capital and Growth Investment',
    website: 'https://example.com/cleantech',
    contactInfo: {
      email: 'ventures@cleantech.example',
      phone: '+1 (555) 890-1234',
      address: '555 Venture Drive, San Francisco, CA 94105'
    }
  },
];

// Partner categories
const categories = [
  { id: 'all', name: 'All Partners' },
  { id: 'manufacturer', name: 'Manufacturers' },
  { id: 'technology', name: 'Technology Providers' },
  { id: 'storage', name: 'Storage Solutions' },
  { id: 'installer', name: 'Installers' },
  { id: 'consultant', name: 'Consultants' },
  { id: 'finance', name: 'Financial Services' },
];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const [filteredPartners, setFilteredPartners] = useState(allPartners);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = allPartners.filter((partner) => {
      return activeCategory === 'all' || partner.category === activeCategory;
    });
    
    setFilteredPartners(filtered);
  }, [activeCategory]);

  const handlePartnerClick = (partnerId: number) => {
    setSelectedPartner(partnerId === selectedPartner ? null : partnerId);
  };

  const getSelectedPartner = () => {
    return allPartners.find(partner => partner.id === selectedPartner);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-solar-green/5 py-16">
          <div className="solar-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-semibold text-gray-900 mb-4">
                Our Partners
              </h1>
              <p className="text-xl text-gray-600 mb-0">
                Collaborating with industry leaders to drive innovation and excellence
              </p>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section className="py-16">
          <div className="solar-container scrollbar-hide overflow-x-auto">
            {/* Categories */}
            <div className="mb-12 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeCategory === category.id
                        ? 'bg-solar-green text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Partners List */}
              <div className="lg:col-span-2">
                {isLoading ? (
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
                ) : filteredPartners.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-4xl mb-4">😕</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No partners found</h3>
                    <p className="text-gray-600">
                      Try selecting a different category.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPartners.map((partner) => (
                      <div
                        key={partner.id}
                        className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 ${
                          selectedPartner === partner.id
                            ? 'border-solar-green ring-1 ring-solar-green/30'
                            : 'border-gray-100 hover:shadow-md'
                        }`}
                      >
                        <div className="h-32 bg-gray-50 flex items-center justify-center p-6">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{partner.description}</p>
                          <button
                            onClick={() => handlePartnerClick(partner.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedPartner === partner.id
                                ? 'bg-solar-green text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {selectedPartner === partner.id ? 'Selected' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Partner Details Panel */}
              <div className="lg:col-span-1">
                {selectedPartner ? (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                    {getSelectedPartner() && (
                      <>
                        <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
                          <img
                            src={getSelectedPartner()?.logo}
                            alt={getSelectedPartner()?.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {getSelectedPartner()?.name}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {getSelectedPartner()?.description}
                          </p>
                          
                          <div className="space-y-4 mb-6">
                            <div className="flex gap-3">
                              <Clock className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900">Year Founded</h4>
                                <p className="text-sm text-gray-600">{getSelectedPartner()?.yearFounded}</p>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <MapPin className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900">Location</h4>
                                <p className="text-sm text-gray-600">{getSelectedPartner()?.location}</p>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900">Specialization</h4>
                                <p className="text-sm text-gray-600">{getSelectedPartner()?.specialization}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border-t border-gray-100 pt-6 space-y-4">
                            <h4 className="text-base font-semibold text-gray-900">Contact Information</h4>
                            <div className="flex gap-3">
                              <Phone className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <a href={`tel:${getSelectedPartner()?.contactInfo.phone}`} className="text-sm text-gray-600 hover:text-solar-green">
                                {getSelectedPartner()?.contactInfo.phone}
                              </a>
                            </div>
                            <div className="flex gap-3">
                              <Mail className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <a href={`mailto:${getSelectedPartner()?.contactInfo.email}`} className="text-sm text-gray-600 hover:text-solar-green">
                                {getSelectedPartner()?.contactInfo.email}
                              </a>
                            </div>
                            <div className="flex gap-3">
                              <MapPin className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-600">
                                {getSelectedPartner()?.contactInfo.address}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <a 
                              href={getSelectedPartner()?.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <CustomButton
                                variant="secondary"
                                className="w-full"
                                icon={<ExternalLink size={16} />}
                              >
                                Visit Website
                              </CustomButton>
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner Details</h3>
                    <p className="text-gray-600 mb-0">
                      Select a partner to view detailed information.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
