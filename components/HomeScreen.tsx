import React from 'react';
import type { FoodItem } from '../types';
import FoodCard from './FoodCard';
import TrustedPickCard from './TrustedPickCard';
import BottomNav from './BottomNav';
import { MapPinIcon, ChevronDownIcon, HeartIcon, BellIcon, SearchIcon } from './Icons';

const mockFoodData: FoodItem[] = [
    { id: 1, name: 'Carnitas Tacos', description: 'Lorem ipsum dolor sit amet...', price: 15.00, rating: 4.5, reviews: 30, calories: 500, cookTime: '15 min', restaurant: 'Cookie Heaven', address: '54 Summit Street', isVeg: false, isBestseller: true, imageUrl: 'https://images.unsplash.com/photo-1599974558515-34b782c1626a?q=80&w=800', nutrition: { protein: '50gm', carbs: '10gm', fats: '15gm' } },
    { id: 2, name: 'Asada Tacos', description: 'Consectetur adipiscing elit...', price: 15.00, rating: 4.5, reviews: 30, calories: 450, cookTime: '12 min', restaurant: 'Taco Town', address: '123 Main St', isVeg: false, isBestseller: false, imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800', nutrition: { protein: '45gm', carbs: '12gm', fats: '18gm' } },
    { id: 3, name: 'Birria Tacos', description: 'Sed do eiusmod tempor...', price: 30.00, rating: 4.8, reviews: 55, calories: 600, cookTime: '20 min', restaurant: 'Birria Land', address: '456 Oak Ave', isVeg: false, isBestseller: true, imageUrl: 'https://images.unsplash.com/photo-1625442564495-5d82a1a2b5e3?q=80&w=800', nutrition: { protein: '60gm', carbs: '15gm', fats: '25gm' } },
    { id: 4, name: 'Veggie Tacos', description: 'Ut enim ad minim veniam...', price: 12.00, rating: 4.6, reviews: 40, calories: 350, cookTime: '10 min', restaurant: 'Green Bites', address: '789 Pine Ln', isVeg: true, isBestseller: false, imageUrl: 'https://images.unsplash.com/photo-1542342533-87805c2BA557?q=80&w=800', nutrition: { protein: '20gm', carbs: '30gm', fats: '10gm' } },
    { id: 5, name: 'Fish Tacos', description: 'Duis aute irure dolor in...', price: 18.00, rating: 4.7, reviews: 60, calories: 480, cookTime: '18 min', restaurant: 'The Salty Taco', address: '101 Beach Blvd', isVeg: false, isBestseller: true, imageUrl: 'https://images.unsplash.com/photo-1608219994358-c21525a7a83d?q=80&w=800', nutrition: { protein: '40gm', carbs: '18gm', fats: '22gm' } },
];


interface HomeScreenProps {
  onSelectFoodItem: (item: FoodItem) => void;
  selectedItemId?: number | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectFoodItem, selectedItemId }) => {
  return (
    <div className="bg-white h-full flex flex-col">
      <header className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-2 font-semibold text-gray-800 text-sm">15 Water Street Fremont</span>
            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
                <HeartIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
                <BellIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="mt-4 relative">
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 md:pb-4">
        <section className="py-4">
          <div className="flex justify-between items-center px-4 mb-3">
            <h2 className="font-bold text-xl text-gray-800">Your trusted picks</h2>
            <a href="#" className="text-sm font-semibold text-orange-500">View all</a>
          </div>
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {mockFoodData.slice(0, 3).map(item => (
              <TrustedPickCard key={item.id} item={item} onSelect={() => onSelectFoodItem(item)} isSelected={item.id === selectedItemId} />
            ))}
          </div>
        </section>

        <section className="py-4">
          <div className="flex justify-between items-center px-4 mb-3">
            <h2 className="font-bold text-xl text-gray-800">Recommended</h2>
          </div>
          <div className="space-y-3 px-4">
            {mockFoodData.map(item => (
              <FoodCard key={item.id} item={item} onSelect={() => onSelectFoodItem(item)} isSelected={item.id === selectedItemId} />
            ))}
          </div>
        </section>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default HomeScreen;