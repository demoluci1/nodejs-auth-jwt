
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';
import PartnerFilters from '@/components/partners/PartnerFilters';
import PartnerList from '@/components/partners/PartnerList';
import PartnerDetails from '@/components/partners/PartnerDetails';
import PartnersHero from '@/components/partners/PartnersHero';
import { allPartners } from '@/components/partners/types';

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const [filteredPartners, setFilteredPartners] = useState(allPartners);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const detailsPanelRef = useRef<HTMLDivElement>(null);
  const partnersSectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const clearSearch = () => {
    setSearchTerm('');
  };
  
  const scrollToPartners = () => {
    partnersSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleRandomPartnerSelect = () => {
    const randomId = Math.floor(Math.random() * allPartners.length) + 1;
    handlePartnerClick(randomId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Parallax Effect */}
        <PartnersHero scrollToPartners={scrollToPartners} />
        
        {/* Partners Section */}
        <section id="partners-section" className="py-16" ref={partnersSectionRef}>
          <div className="solar-container">
            {/* Search and Filter Components */}
            <PartnerFilters
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
            
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Partners List */}
              <div className="lg:col-span-2">
                <PartnerList
                  partners={filteredPartners}
                  selectedPartner={selectedPartner}
                  onPartnerClick={handlePartnerClick}
                  isLoading={isLoading}
                  searchTerm={searchTerm}
                  clearSearch={clearSearch}
                />
              </div>
              
              {/* Partner Details Panel */}
              <div ref={detailsPanelRef} className="lg:col-span-1">
                <PartnerDetails
                  selectedPartner={getSelectedPartner()}
                  onRandomPartnerSelect={handleRandomPartnerSelect}
                />
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
