import React, { useState, useCallback } from 'react';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import LoginScreen from './components/LoginScreen';
import { TacoPlaceholderIcon } from './components/Icons';
import type { FoodItem } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleSelectFoodItem = useCallback((item: FoodItem) => {
    setSelectedItem(item);
  }, []);

  const handleGoBack = useCallback(() => {
    setSelectedItem(null);
  }, []);
  
  if (!isLoggedIn) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-white shadow-2xl rounded-lg overflow-hidden relative min-h-[800px] md:min-h-[90vh] md:max-h-[90vh]">
          <LoginScreen onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-0 md:p-4 lg:p-8">
      <div className="w-full h-screen md:h-auto md:min-h-[80vh] md:max-h-[90vh] max-w-7xl bg-white shadow-2xl rounded-none md:rounded-2xl overflow-hidden relative flex flex-row">
        
        {/* --- Mobile Layout --- */}
        <div className="md:hidden w-full h-full overflow-hidden">
          <div className={`w-full h-full transition-transform duration-300 ease-in-out ${selectedItem ? '-translate-x-full' : 'translate-x-0'}`}>
            <HomeScreen onSelectFoodItem={handleSelectFoodItem} selectedItemId={selectedItem?.id} />
          </div>
          <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${selectedItem ? 'translate-x-0' : 'translate-x-full'}`}>
            {selectedItem && (
              <DetailScreen item={selectedItem} onBack={handleGoBack} />
            )}
          </div>
        </div>

        {/* --- Desktop Layout --- */}
        <div className="hidden md:flex w-full h-full">
          {/* Left Panel: Always show HomeScreen */}
          <div className="w-1/2 lg:w-2/5 border-r border-gray-100 h-full">
            <HomeScreen onSelectFoodItem={handleSelectFoodItem} selectedItemId={selectedItem?.id} />
          </div>

          {/* Right Panel: Show Detail or Placeholder */}
          <div className="flex-1 h-full">
            {selectedItem ? (
              <DetailScreen item={selectedItem} onBack={handleGoBack} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-gray-50 p-8 text-center">
                <TacoPlaceholderIcon className="w-48 h-48 text-gray-300" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Select an item</h2>
                <p className="mt-2 text-gray-500">Choose a taco from the list to see more details.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
