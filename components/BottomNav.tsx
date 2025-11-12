import React from 'react';
import { HomeIcon, OrderIcon, HeartIcon, ProfileIcon } from './Icons';

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: HomeIcon, label: 'Home', active: true },
    { icon: OrderIcon, label: 'My Order', active: false },
    { icon: HeartIcon, label: 'Saved', active: false },
    { icon: ProfileIcon, label: 'Profile', active: false },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-1px_10px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center space-y-1 w-full ${
              item.active ? 'text-orange-500' : 'text-gray-400'
            } hover:text-orange-500 transition-colors`}
          >
            <item.icon className="w-6 h-6" />
            <span className={`text-xs font-semibold ${item.active ? 'font-bold' : ''}`}>
                {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;