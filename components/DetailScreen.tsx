import React, { useState } from 'react';
import type { FoodItem } from '../types';
import { StarIcon, ClockIcon, FireIcon, PlusIcon, MinusIcon, ChevronLeftIcon } from './Icons';

interface DetailScreenProps {
  item: FoodItem;
  onBack: () => void;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ item, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="bg-gray-50 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover" />
           <button onClick={onBack} className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white md:hidden">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="bg-white rounded-t-3xl -mt-8 p-6 relative">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
              <p className="text-gray-500 text-sm mt-1">{item.address}</p>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 text-white rounded-full px-3 py-2">
              <button onClick={decrement} className="hover:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="font-bold text-lg w-6 text-center">{quantity}</span>
              <button onClick={increment} className="hover:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-gray-600 mt-4 text-sm">
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{item.rating}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 text-gray-400 mr-1.5" />
              <span className="font-semibold">{item.cookTime}</span>
            </div>
            <div className="flex items-center">
              <FireIcon className="w-5 h-5 text-orange-500 mr-1.5" />
              <span className="font-semibold">{item.calories} Kcal</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">
              Protein - {item.nutrition.protein}, Carbs - {item.nutrition.carbs}, Fats - {item.nutrition.fats}
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              The unique recipe will make you fly in creaminess of cheeseburger!
            </p>
            <a href="#" className="text-orange-600 font-semibold mt-2 inline-block text-sm">Customize &gt;</a>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Price</p>
            <p className="font-bold text-2xl text-gray-900">${(item.price * quantity).toFixed(2)}</p>
          </div>
          <button className="bg-black text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;