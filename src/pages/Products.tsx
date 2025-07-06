
import { useState, useEffect } from 'react';
import { Search, Filter, Grid, Star, ArrowRight, Zap, Shield, Award } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';

// Enhanced products data
const allProducts = [
  {
    id: 1,
    name: 'Premium Monocrystalline Solar Panel',
    category: 'panels',
    price: 299,
    rating: 4.9,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: 'High-efficiency monocrystalline solar panel with 22.8% efficiency rating.',
    features: ['22.8% Efficiency', '25-Year Warranty', 'Weather Resistant', 'Easy Installation'],
    badge: 'Best Seller',
    power: '400W',
  },
  {
    id: 2,
    name: 'Smart Grid-Tie Inverter',
    category: 'inverters',
    price: 599,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Advanced grid-tie inverter with smart monitoring and optimization features.',
    features: ['Smart Monitoring', '12-Year Warranty', 'MPPT Technology', 'Remote Control'],
    badge: 'New',
    power: '5kW',
  },
  {
    id: 3,
    name: 'Lithium Power Storage Battery',
    category: 'batteries',
    price: 1299,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba53aaf35?auto=format&fit=crop&q=80',
    description: 'High-capacity lithium battery with intelligent BMS and long cycle life.',
    features: ['10kWh Capacity', '6000+ Cycles', 'Smart BMS', 'App Control'],
    badge: 'Premium',
    power: '10kWh',
  },
  {
    id: 4,
    name: 'Professional Mounting System',
    category: 'accessories',
    price: 199,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1511355954361-df5a865165a8?auto=format&fit=crop&q=80',
    description: 'Durable aluminum mounting system for various roof types.',
    features: ['Anodized Aluminum', 'Universal Fit', 'Easy Installation', 'Corrosion Resistant'],
    badge: '',
    power: 'Universal',
  },
];

const categories = [
  { id: 'all', name: 'All Products', count: allProducts.length },
  { id: 'panels', name: 'Solar Panels', count: allProducts.filter(p => p.category === 'panels').length },
  { id: 'inverters', name: 'Inverters', count: allProducts.filter(p => p.category === 'inverters').length },
  { id: 'batteries', name: 'Batteries', count: allProducts.filter(p => p.category === 'batteries').length },
  { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = allProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-solar-blue/5 via-white to-solar-green/5 py-16">
          <div className="solar-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-solar-green/10 to-solar-blue/10 text-solar-green font-medium text-sm rounded-full mb-6">
                <Award className="w-4 h-4" />
                Premium Quality Products
              </div>
              <h1 className="font-display font-bold text-gray-900 mb-4">
                Discover Our Complete Range of 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-solar-blue to-solar-green">
                  Solar Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                From high-efficiency panels to smart inverters and reliable batteries, 
                find everything you need for your solar energy system.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-blue focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16">
          <div className="solar-container">
            {/* Category Filters */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex space-x-4 min-w-max pb-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-solar-blue to-solar-green text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                    <span className="ml-2 text-sm opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Products Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded mb-2 w-full"></div>
                      <div className="h-3 bg-gray-200 rounded mb-4 w-5/6"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <CustomButton
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                >
                  Clear Filters
                </CustomButton>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {product.badge && (
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                          product.badge === 'Best Seller' ? 'bg-solar-yellow text-black' :
                          product.badge === 'New' ? 'bg-solar-green text-white' :
                          'bg-solar-blue text-white'
                        }`}>
                          {product.badge}
                        </div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-solar-blue font-semibold text-sm">{product.power}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-blue transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">
                          ${product.price}
                        </div>
                        <CustomButton
                          variant="primary"
                          size="sm"
                          icon={<ArrowRight size={16} />}
                        >
                          View Details
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="solar-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every product is backed by our commitment to quality, performance, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                <p className="text-gray-600">Industry-leading efficiency ratings and superior performance in all conditions.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-green to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Quality</h3>
                <p className="text-gray-600">Rigorous testing and quality control ensure long-lasting, dependable products.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-yellow to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Warranty</h3>
                <p className="text-gray-600">Extended warranties and exceptional after-sales support for complete peace of mind.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
