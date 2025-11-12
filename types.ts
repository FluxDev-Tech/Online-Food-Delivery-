
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  calories: number;
  cookTime: string;
  restaurant: string;
  address: string;
  isVeg: boolean;
  isBestseller: boolean;
  imageUrl: string;
  nutrition: {
    protein: string;
    carbs: string;
    fats: string;
  };
}
