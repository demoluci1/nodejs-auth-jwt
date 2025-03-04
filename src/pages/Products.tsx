
import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sample categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'panels', name: 'Solar Panels' },
  { id: 'inverters', name: 'Inverters' },
  { id: 'batteries', name: 'Batteries' },
  { id: 'accessories', name: 'Accessories' },
];

// Sample products data
const allProducts = [
  {
    id: 1,
    name: 'Premium Solar Panel 400W',
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: 'High-efficiency monocrystalline solar panel with premium cells and advanced encapsulation.',
    specs: [
      { name: 'Power Output', value: '400W' },
      { name: 'Efficiency', value: '22.8%' },
      { name: 'Dimensions', value: '1755 × 1038 × 35mm' },
      { name: 'Weight', value: '19.9kg' },
      { name: 'Warranty', value: '25 Years' },
    ],
  },
  {
    id: 2,
    name: 'Smart Inverter 5kW',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80',
    description: 'Advanced solar inverter with smart features, monitoring, and high efficiency rating.',
    specs: [
      { name: 'Power Rating', value: '5kW' },
      { name: 'Efficiency', value: '98.2%' },
      { name: 'Dimensions', value: '500 × 400 × 200mm' },
      { name: 'Weight', value: '22kg' },
      { name: 'Warranty', value: '12 Years' },
    ],
  },
  {
    id: 3,
    name: 'PowerStorage Battery 10kWh',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba53aaf35?auto=format&fit=crop&q=80',
    description: 'High-capacity lithium battery with long cycle life and smart energy management.',
    specs: [
      { name: 'Capacity', value: '10kWh' },
      { name: 'Chemistry', value: 'Lithium Iron Phosphate' },
      { name: 'Dimensions', value: '800 × 600 × 200mm' },
      { name: 'Weight', value: '95kg' },
      { name: 'Warranty', value: '10 Years' },
    ],
  },
  {
    id: 4,
    name: 'Solar Panel Mounting System',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1511355954361-df5a865165a8?auto=format&fit=crop&q=80',
    description: 'Durable mounting system for various roof types with easy installation features.',
    specs: [
      { name: 'Material', value: 'Anodized Aluminum' },
      { name: 'Roof Types', value: 'Flat, Sloped, Metal' },
      { name: 'Wind Resistance', value: 'Up to 150 mph' },
      { name: 'Load Capacity', value: '60kg/m²' },
      { name: 'Warranty', value: '15 Years' },
    ],
  },
  {
    id: 5,
    name: 'Budget-Friendly Solar Panel 300W',
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    description: 'Cost-effective polycrystalline solar panel with decent efficiency.',
    specs: [
      { name: 'Power Output', value: '300W' },
      { name: 'Efficiency', value: '18.5%' },
      { name: 'Dimensions', value: '1650 × 992 × 35mm' },
      { name: 'Weight', value: '18.5kg' },
      { name: 'Warranty', value: '15 Years' },
    ],
  },
  {
    id: 6,
    name: 'Micro Inverter 1kW',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1624503703659-342ea427b9d7?auto=format&fit=crop&q=80',
    description: 'Compact micro inverter for individual panel optimization and enhanced system performance.',
    specs: [
      { name: 'Power Rating', value: '1kW' },
      { name: 'Efficiency', value: '97.5%' },
      { name: 'Dimensions', value: '250 × 180 × 30mm' },
      { name: 'Weight', value: '2.5kg' },
      { name: 'Warranty', value: '10 Years' },
    ],
  },
  {
    id: 7,
    name: 'PowerStorage Battery 5kWh',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1601996597881-3a14e4941f02?auto=format&fit=crop&q=80',
    description: 'Compact residential battery storage solution for smaller energy needs.',
    specs: [
      { name: 'Capacity', value: '5kWh' },
      { name: 'Chemistry', value: 'Lithium Iron Phosphate' },
      { name: 'Dimensions', value: '600 × 500 × 200mm' },
      { name: 'Weight', value: '55kg' },
      { name: 'Warranty', value: '10 Years' },
    ],
  },
  {
    id: 8,
    name: 'Solar Cable Kit',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1605627079912-97c3810a11a4?auto=format&fit=crop&q=80',
    description: 'Complete cable kit with MC4 connectors for solar installation projects.',
    specs: [
      { name: 'Length', value: '10m' },
      { name: 'Wire Type', value: 'Solar PV Cable' },
      { name: 'Rating', value: '1500V DC' },
      { name: 'Connector', value: 'MC4 Compatible' },
      { name: 'Warranty', value: '5 Years' },
    ],
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm]);

  const toggleProductDetails = (productId: number) => {
    setSelectedProduct(selectedProduct === productId ? null : productId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-solar-blue/5 py-16">
          <div className="solar-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-semibold text-gray-900 mb-4">
                Our Products
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our complete range of high-quality solar products
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-solar-blue focus:border-solar-blue bg-white"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16">
          <div className="solar-container">
            {/* Categories */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex space-x-4 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      activeCategory === category.id
                        ? 'bg-solar-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Products Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-5 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
                      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">😕</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md mb-2">
                        {categories.find((c) => c.id === product.category)?.name || product.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      
                      <button
                        onClick={() => toggleProductDetails(product.id)}
                        className="text-solar-blue font-medium flex items-center hover:text-blue-700 transition-colors"
                      >
                        {selectedProduct === product.id ? 'Hide Details' : 'View Specifications'}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform ${
                            selectedProduct === product.id ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {selectedProduct === product.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Specifications</h4>
                          <dl className="space-y-2">
                            {product.specs.map((spec, index) => (
                              <div key={index} className="flex">
                                <dt className="text-xs text-gray-500 w-1/2">{spec.name}:</dt>
                                <dd className="text-xs font-medium text-gray-800 w-1/2">{spec.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
