
import { useState, useEffect } from 'react';
import { Search, Filter, ScanLine } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FloatingActionButton from '../components/FloatingActionButton';

// Sample products data
const products = [
  {
    id: 1,
    image: '/placeholder.svg',
    title: 'Organic Pregnancy Wellness Tea - Caffeine Free',
    price: 599,
    certified: true,
    ashaRecommended: true,
    rating: 4.8,
    reviewCount: 352,
    trimester: 1 as const
  },
  {
    id: 2,
    image: '/placeholder.svg',
    title: 'Maternity Support Belt with Adjustable Compression',
    price: 1299,
    certified: true,
    ashaRecommended: false,
    rating: 4.6,
    reviewCount: 211,
    trimester: 2 as const
  },
  {
    id: 3,
    image: '/placeholder.svg',
    title: 'Natural Stretch Mark Prevention Cream - 250ml',
    price: 899,
    certified: true,
    ashaRecommended: true,
    rating: 4.7,
    reviewCount: 189,
    trimester: 3 as const
  },
  {
    id: 4,
    image: '/placeholder.svg',
    title: 'Postpartum Recovery Herbal Bath Mix - Set of 6',
    price: 1199,
    certified: false,
    ashaRecommended: false,
    rating: 4.5,
    reviewCount: 127,
    trimester: 'postpartum' as const
  },
  {
    id: 5,
    image: '/placeholder.svg',
    title: 'Foldable Pregnancy Body Pillow for Back Support',
    price: 2499,
    certified: true,
    ashaRecommended: false,
    rating: 4.9,
    reviewCount: 276,
    trimester: 2 as const
  },
  {
    id: 6,
    image: '/placeholder.svg',
    title: 'Prenatal Vitamins with Iron & Folate - 90 Tablets',
    price: 799,
    certified: true,
    ashaRecommended: true,
    rating: 4.7,
    reviewCount: 412,
    trimester: 1 as const
  },
  {
    id: 7,
    image: '/placeholder.svg',
    title: 'Bamboo Nursing Pads - Reusable Set of 8',
    price: 499,
    certified: false,
    ashaRecommended: true,
    rating: 4.4,
    reviewCount: 153,
    trimester: 'postpartum' as const
  },
  {
    id: 8,
    image: '/placeholder.svg',
    title: 'Organic Nipple Cream for Breastfeeding - 50g',
    price: 399,
    certified: true,
    ashaRecommended: true,
    rating: 4.6,
    reviewCount: 208,
    trimester: 'postpartum' as const
  },
  {
    id: 9,
    image: '/placeholder.svg',
    title: 'Digital Contraction Timer & Tracker',
    price: 999,
    certified: true,
    ashaRecommended: false,
    rating: 4.3,
    reviewCount: 87,
    trimester: 3 as const
  }
];

const Marketplace = () => {
  const [selectedTrimester, setSelectedTrimester] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCertifiedOnly, setShowCertifiedOnly] = useState(false);
  const [showAshaOnly, setShowAshaOnly] = useState(false);
  const [isCounterfeitWarningVisible, setIsCounterfeitWarningVisible] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedTrimester, searchQuery, showCertifiedOnly, showAshaOnly]);

  const filterProducts = () => {
    let filtered = [...products];
    
    // Filter by trimester
    if (selectedTrimester !== 'all') {
      filtered = filtered.filter(product => {
        if (selectedTrimester === 'postpartum') {
          return product.trimester === 'postpartum';
        }
        return product.trimester === parseInt(selectedTrimester);
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(query)
      );
    }
    
    // Filter by certification
    if (showCertifiedOnly) {
      filtered = filtered.filter(product => product.certified);
    }
    
    // Filter by ASHA recommendation
    if (showAshaOnly) {
      filtered = filtered.filter(product => product.ashaRecommended);
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen pt-16 pb-16 bg-mother-blue/5">
      <FloatingActionButton />
      
      {isCounterfeitWarningVisible && (
        <div className="bg-emergency text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-sm md:text-base font-medium">
              Caution: 38% of Maternal Products Sold Online are Counterfeit - Verify Before Purchase
            </div>
            <button
              onClick={() => setIsCounterfeitWarningVisible(false)}
              className="text-white/80 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-display font-semibold text-mother-blue-dark mb-2">
            Trusted Marketplace
          </h1>
          <p className="text-mother-gray-dark">
            Shop verified products for every stage of your pregnancy and motherhood journey
          </p>
        </header>
        
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-mother-blue/20 bg-white focus:outline-none focus:ring-2 focus:ring-mother-blue-dark"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mother-gray-dark" size={18} />
          </div>
          
          <div className="flex space-x-3">
            <button className="btn-secondary flex items-center">
              <Filter size={16} className="mr-2" />
              Filters
            </button>
            <button className="btn-primary flex items-center">
              <ScanLine size={16} className="mr-2" />
              Scan Product
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-5 sticky top-20">
              <h2 className="font-display font-semibold text-mother-blue-dark mb-4">
                Refine Products
              </h2>
              
              <div className="mb-5">
                <h3 className="text-sm font-medium text-mother-gray-dark mb-2">Pregnancy Stage</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedTrimester === 'all'}
                      onChange={() => setSelectedTrimester('all')}
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">All Stages</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedTrimester === '1'}
                      onChange={() => setSelectedTrimester('1')}
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">First Trimester</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedTrimester === '2'}
                      onChange={() => setSelectedTrimester('2')}
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">Second Trimester</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedTrimester === '3'}
                      onChange={() => setSelectedTrimester('3')}
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">Third Trimester</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      checked={selectedTrimester === 'postpartum'}
                      onChange={() => setSelectedTrimester('postpartum')}
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">Postpartum</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-5">
                <h3 className="text-sm font-medium text-mother-gray-dark mb-2">Certification</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showCertifiedOnly}
                      onChange={() => setShowCertifiedOnly(!showCertifiedOnly)}
                      className="mr-2 rounded text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">Govt-Certified Only</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showAshaOnly}
                      onChange={() => setShowAshaOnly(!showAshaOnly)}
                      className="mr-2 rounded text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">ASHA's Choice Only</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-5">
                <h3 className="text-sm font-medium text-mother-gray-dark mb-2">Price Range</h3>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">Under ₹500</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">₹500 - ₹1,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">₹1,000 - ₹2,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      className="mr-2 text-mother-blue-dark focus:ring-mother-blue-dark"
                    />
                    <span className="text-mother-gray-dark">₹2,000+</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full py-2 text-mother-blue-dark border border-mother-blue/30 rounded-lg hover:bg-mother-blue/5 transition-colors text-sm font-medium">
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Special sections */}
            <div className="mb-8">
              <h2 className="text-xl font-display font-semibold text-mother-blue-dark mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-mother-yellow/80 flex items-center justify-center text-xs font-bold mr-2">
                  A
                </span>
                ASHA's Choice
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products
                  .filter(product => product.ashaRecommended)
                  .slice(0, 3)
                  .map(product => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      certified={product.certified}
                      ashaRecommended={product.ashaRecommended}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      trimester={product.trimester}
                    />
                  ))}
              </div>
            </div>
            
            {/* All Products */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-semibold text-mother-blue-dark">
                  All Products
                </h2>
                <div className="text-sm text-mother-gray-dark">
                  Showing {filteredProducts.length} products
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      certified={product.certified}
                      ashaRecommended={product.ashaRecommended}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      trimester={product.trimester}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-mother-blue/10">
                  <div className="text-mother-gray-dark mb-2">No products found matching your criteria</div>
                  <button 
                    className="text-mother-blue-dark hover:underline"
                    onClick={() => {
                      setSelectedTrimester('all');
                      setSearchQuery('');
                      setShowCertifiedOnly(false);
                      setShowAshaOnly(false);
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
