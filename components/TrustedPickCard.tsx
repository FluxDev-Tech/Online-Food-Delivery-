import React from 'react';
import type { FoodItem } from '../types';
import { StarIcon, ClockIcon, FireIcon, PlusIcon } from './Icons';

interface TrustedPickCardProps {
  item: FoodItem;
  onSelect: () => void;
  isSelected?: boolean;
}

const TrustedPickCard: React.FC<TrustedPickCardProps> = ({ item, onSelect, isSelected }) => {
  return (
    <div onClick={onSelect} className={`flex-shrink-0 w-48 bg-white border rounded-xl p-3 shadow-sm hover:shadow-lg transition-all cursor-pointer ${isSelected ? 'border-orange-400 shadow-lg' : 'border-gray-100'}`}>
      <div className="relative">
        <img src={item.imageUrl} alt={item.name} className="w-full h-24 rounded-lg object-cover" />
        <div className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center space-x-1">
          <StarIcon className="w-3 h-3 text-yellow-400" />
          <span className="text-xs font-bold text-gray-800">{item.rating}</span>
        </div>
      </div>
      <h4 className="font-bold text-gray-800 mt-2 truncate">{item.name}</h4>
      <p className="text-xs text-gray-500 truncate">{item.restaurant}</p>
      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
        <div className="flex items-center">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>{item.cookTime}</span>
        </div>
        <div className="flex items-center">
            <FireIcon className="w-3 h-3 mr-1 text-orange-400" />
            <span>{item.calories} Kal</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="font-bold text-lg text-gray-900">${item.price.toFixed(2)}</p>
        <button className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TrustedPickCard;