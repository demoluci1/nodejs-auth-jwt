
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink, MapPin, Phone, Mail, Clock, Briefcase, Award, Globe, Building, Users, Heart, Filter, Search, X } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const detailsPanelRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter partners based on category and search term
    const filtered = allPartners.filter((partner) => {
      const matchesCategory = activeCategory === 'all' || partner.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.specialization.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredPartners(filtered);
  }, [activeCategory, searchTerm]);

  const handlePartnerClick = (partnerId: number) => {
    // If the same partner is clicked again, close the details panel
    if (partnerId === selectedPartner) {
      setSelectedPartner(null);
      return;
    }

    // If a different partner is clicked, show its details
    setSelectedPartner(partnerId);
    
    // Scroll to details panel on mobile
    if (window.innerWidth < 1024 && detailsPanelRef.current) {
      setTimeout(() => {
        detailsPanelRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Show toast notification
    const partner = allPartners.find(p => p.id === partnerId);
    if (partner) {
      toast({
        title: `${partner.name} Selected`,
        description: "Viewing partner details",
      });
    }
  };

  const getSelectedPartner = () => {
    return allPartners.find(partner => partner.id === selectedPartner);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleContactClick = (type: string, value: string) => {
    // Show toast notification
    toast({
      title: `Contact Information`,
      description: `${type}: ${value}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Parallax Effect */}
        <section className="bg-gradient-to-r from-solar-green/10 to-tirupati-blue/10 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Partners')] bg-cover bg-center opacity-10"></div>
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
                  className="shadow-md shadow-green-300/30 text-white font-semibold border-2 border-green-600"
                >
                  Become a Partner
                </CustomButton>
                <CustomButton 
                  variant="outline" 
                  onClick={() => {
                    const partnersSection = document.getElementById('partners-section');
                    partnersSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View All Partners
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section id="partners-section" className="py-16">
          <div className="solar-container">
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
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPartners.map((partner, index) => (
                      <div
                        key={partner.id}
                        className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 
                          ${selectedPartner === partner.id
                            ? 'border-solar-green ring-1 ring-solar-green/30 transform scale-[1.02]'
                            : 'border-gray-100 hover:shadow-md hover:border-gray-200'
                          } animate-fade-in`}
                        style={{ animationDelay: `${index * 100}ms` }}
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
                            onClick={() => handlePartnerClick(partner.id)}
                            className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              selectedPartner === partner.id
                                ? 'bg-solar-green text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {selectedPartner === partner.id ? 'Selected ✓' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Partner Details Panel */}
              <div ref={detailsPanelRef} className="lg:col-span-1">
                {selectedPartner ? (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24 animate-fade-in">
                    {getSelectedPartner() && (
                      <>
                        <div className="h-48 bg-gradient-to-r from-tirupati-blue/5 to-solar-green/5 flex items-center justify-center p-6 relative">
                          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/500x300?text=Partner')] bg-cover bg-center opacity-5"></div>
                          <img
                            src={getSelectedPartner()?.logo}
                            alt={getSelectedPartner()?.name}
                            className="max-h-full max-w-full object-contain relative z-10 animate-fade-in"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-2xl font-semibold text-gray-900">
                              {getSelectedPartner()?.name}
                            </h3>
                            <span className="text-sm font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                              Est. {getSelectedPartner()?.yearFounded}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-6 italic border-l-4 border-solar-green/30 pl-3 py-1">
                            {getSelectedPartner()?.description}
                          </p>
                          
                          <div className="space-y-5 mb-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                                <Building className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900">Category</h4>
                                  <p className="text-sm text-gray-600">
                                    {categories.find(c => c.id === getSelectedPartner()?.category)?.name || getSelectedPartner()?.category}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                                <Clock className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900">Established</h4>
                                  <p className="text-sm text-gray-600">{getSelectedPartner()?.yearFounded}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                              <MapPin className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900">Location</h4>
                                <p className="text-sm text-gray-600">{getSelectedPartner()?.location}</p>
                              </div>
                            </div>
                            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                              <Award className="w-5 h-5 text-tirupati-blue flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900">Specialization</h4>
                                <p className="text-sm text-gray-600">{getSelectedPartner()?.specialization}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border-t border-gray-100 pt-6 space-y-4">
                            <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                              <Heart size={16} className="text-solar-green" /> Contact Information
                            </h4>
                            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100 cursor-pointer"
                                 onClick={() => handleContactClick('Phone', getSelectedPartner()?.contactInfo.phone || '')}>
                              <Phone className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <a href={`tel:${getSelectedPartner()?.contactInfo.phone}`} className="text-sm text-gray-600 hover:text-solar-green">
                                {getSelectedPartner()?.contactInfo.phone}
                              </a>
                            </div>
                            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100 cursor-pointer"
                                 onClick={() => handleContactClick('Email', getSelectedPartner()?.contactInfo.email || '')}>
                              <Mail className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <a href={`mailto:${getSelectedPartner()?.contactInfo.email}`} className="text-sm text-gray-600 hover:text-solar-green">
                                {getSelectedPartner()?.contactInfo.email}
                              </a>
                            </div>
                            <div className="flex gap-3 p-3 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-gray-100"
                                 onClick={() => handleContactClick('Address', getSelectedPartner()?.contactInfo.address || '')}>
                              <MapPin className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-600">
                                {getSelectedPartner()?.contactInfo.address}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <a 
                              href={getSelectedPartner()?.website} 
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
                                  description: `Learn more about our partnership with ${getSelectedPartner()?.name}`,
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
                                window.location.href = `mailto:${getSelectedPartner()?.contactInfo.email}`;
                              }}
                            >
                              Contact
                            </CustomButton>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
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
                        onClick={() => {
                          const randomId = Math.floor(Math.random() * allPartners.length) + 1;
                          handlePartnerClick(randomId);
                        }}
                      >
                        View Random Partner
                      </CustomButton>
                    </div>
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
