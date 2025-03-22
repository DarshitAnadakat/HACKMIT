
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  certified: boolean;
  ashaRecommended?: boolean;
  rating: number;
  reviewCount: number;
  trimester?: 1 | 2 | 3 | 'postpartum';
}

const ProductCard = ({
  image,
  title,
  price,
  certified,
  ashaRecommended = false,
  rating,
  reviewCount,
  trimester
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="glass-card overflow-hidden hover-lift">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        
        {certified && (
          <div className="absolute top-2 left-2 bg-mother-green text-mother-green-dark text-xs font-medium py-1 px-2 rounded-full">
            Govt-Certified
          </div>
        )}
        
        {ashaRecommended && (
          <div className="absolute top-2 right-2 bg-mother-yellow text-mother-gray-dark text-xs font-medium py-1 px-2 rounded-full">
            ASHA's Choice
          </div>
        )}
        
        {trimester && (
          <div className="absolute bottom-2 left-2 bg-mother-blue/80 backdrop-blur-sm text-white text-xs font-medium py-1 px-2 rounded-full">
            {trimester === 'postpartum' ? 'Postpartum' : `Trimester ${trimester}`}
          </div>
        )}
        
        <button
          onClick={toggleFavorite}
          className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite ? 'bg-mother-pink text-mother-pink-dark' : 'bg-white/80 text-mother-gray-dark'
          }`}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-mother-blue-dark line-clamp-2 h-12">{title}</h3>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="text-xs text-mother-gray-dark ml-1">({reviewCount})</span>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="text-mother-blue-dark font-bold">₹{price.toLocaleString('en-IN')}</div>
          <button className="text-xs font-medium bg-mother-blue text-mother-blue-dark py-1 px-3 rounded-full hover:bg-mother-blue/80 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
