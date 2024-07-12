import { get } from "http";
import { create } from "zustand";

export const useDrinksStore = create((set) => ({
  drinks: [
    {
      "name": "Strawberry Bubble Tea",
      "type": "Boba"
    },
    {
      "name": "Mocha Latte w/ Latte Art",
      "type": "Coffee"
    }
  ],
  setDrinks: (drinks) => set({ drinks }),
  addDrink: (drink) => set((state) => ({ drinks: [...state.drinks, drink] })),
  removeDrink: (drink) =>
    set((state) => ({
      drinks: state.drinks.filter((d) => d.name !== drink.name),
    })),
  getDrink: (name) => get().drinks.find((d) => d.name === name),
}));

export const useFoodStore = create((set) => ({
  food: [
    // {
    //   "name": "Spicy Chicken Sandwich w/ Chips",
    //   "type": "Sandwich"
    // },
    {
      "name": "Mystery Octopus Sandwich",
      "type": "Sandwich"
    },
    {
      "name": "Turkey Club Sandwich",
      "type": "Sandwich"
    },
  ],
  setFood: (food) => set({ food }),
  addFood: (food) => set((state) => ({ food: [...state.food, food] })),
  removeFood: (food) =>
    set((state) => ({
      food: state.food.filter((f) => f.name !== food.name),
    }),
  ),
  getFood: (name) => get().food.find((f) => f.name === name),
}));
