import React from 'react';
import { Advertisement } from '../../data/mockData';

interface AdBannerProps {
  ad: Advertisement;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const AdBanner: React.FC<AdBannerProps> = ({ ad, className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-20',
    medium: 'h-32',
    large: 'h-48'
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group ${sizeClasses[size]} ${className}`}
      onClick={() => console.log(`Clicked ad: ${ad.title}`)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${ad.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-end p-4">
        <div className="text-white">
          <h3 className="font-bold text-lg mb-1 leading-tight">{ad.title}</h3>
          <p className="text-sm text-gray-200 leading-tight">{ad.description}</p>
        </div>
        
        <div className="absolute top-2 right-2">
          <span className="bg-white bg-opacity-90 text-xs px-2 py-1 rounded-full font-medium text-gray-800">
            Ad
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;