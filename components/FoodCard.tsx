import React from 'react';
import type { FoodItem } from '../types';
import { StarIcon, PlusIcon } from './Icons';

interface FoodCardProps {
  item: FoodItem;
  onSelect: () => void;
  isSelected?: boolean;
}

const AddButton: React.FC = () => {
    return (
        <button className="bg-black text-white px-5 py-2 rounded-lg flex items-center space-x-1 font-semibold text-sm hover:bg-gray-800 transition-colors">
            <PlusIcon className="w-4 h-4" />
            <span>Add</span>
        </button>
    );
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect, isSelected }) => {
  return (
    <div onClick={onSelect} className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer transition-colors ${isSelected ? 'bg-orange-50' : 'hover:bg-gray-50'}`}>
      <div className="relative flex-shrink-0">
        <img src={item.imageUrl} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
        {item.isBestseller && (
            <span className="absolute top-1 left-1 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">Bestseller</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 truncate">{item.restaurant} • {item.address}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="font-semibold text-gray-700">{item.rating}</span>
          <span className="ml-1">({item.reviews})</span>
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="font-bold text-lg text-gray-900">${item.price.toFixed(2)}</p>
            <AddButton />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;