import React from 'react';
import { Advertisement } from '../../data/mockData';
import { ExternalLink } from 'lucide-react';

interface AdCardProps {
  ad: Advertisement;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

const AdCard: React.FC<AdCardProps> = ({ ad, className = '', variant = 'horizontal' }) => {
  const handleClick = () => {
    console.log(`Clicked ad: ${ad.title}`);
    // In a real app, this would navigate to the ad link
  };

  if (variant === 'vertical') {
    return (
      <div 
        className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group ${className}`}
        onClick={handleClick}
      >
        <div className="relative">
          <img 
            src={ad.image} 
            alt={ad.title}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-white bg-opacity-90 text-xs px-2 py-1 rounded-full font-medium text-gray-800">
              Ad
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{ad.title}</h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{ad.description}</p>
          <div className="flex items-center text-orange-600 text-sm font-medium">
            <span>Learn More</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group ${className}`}
      onClick={handleClick}
    >
      <div className="flex">
        <div className="relative w-24 h-20 flex-shrink-0">
          <img 
            src={ad.image} 
            alt={ad.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-1 right-1">
            <span className="bg-white bg-opacity-90 text-xs px-1.5 py-0.5 rounded-full font-medium text-gray-800">
              Ad
            </span>
          </div>
        </div>
        
        <div className="flex-1 p-3">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">{ad.title}</h3>
          <p className="text-gray-600 text-xs mb-2 leading-relaxed line-clamp-2">{ad.description}</p>
          <div className="flex items-center text-orange-600 text-xs font-medium">
            <span>View Offer</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;