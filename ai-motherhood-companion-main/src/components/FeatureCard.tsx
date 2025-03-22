
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  imageUrl?: string;
}

const FeatureCard = ({ title, description, icon, className = '', imageUrl }: FeatureCardProps) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg p-6 
        transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:scale-105 group ${className}`}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-mother-blue via-mother-pink to-mother-blue-dark opacity-80"></div>
      
      {/* Add a subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=60')] bg-cover mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <div className="text-mother-blue-dark mb-4 flex items-center justify-center w-14 h-14 rounded-xl 
          bg-gradient-to-br from-mother-blue/30 to-mother-blue/10 shadow-md group-hover:shadow-lg transition-all duration-500
          transform group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-semibold text-mother-blue-dark mb-3 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-mother-gray-dark group-hover:text-mother-blue-dark/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
